import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { ok, err, requireAdmin } from "@/lib/api";

// GET /api/analytics — Admin dashboard overview stats
export async function GET() {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [
    totalClients,
    totalLeads,
    newLeadsThisMonth,
    openRequests,
    emergencyRequests,
    draftQuotes,
    approvedQuotes,
    subscriberCount,
    totalPosts,
    publishedPosts,
    leadsBySource,
    leadsByStatus,
    recentLeads,
  ] = await Promise.all([
    prisma.client.count(),
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: thirtyDaysAgo } } }),
    prisma.serviceRequest.count({ where: { status: { in: ["PENDING", "ASSIGNED", "ACTIVE"] } } }),
    prisma.serviceRequest.count({ where: { urgency: "EMERGENCY", status: { not: "COMPLETED" } } }),
    prisma.quote.count({ where: { status: "DRAFT" } }),
    prisma.quote.count({ where: { status: "APPROVED" } }),
    prisma.subscriber.count({ where: { status: "ACTIVE" } }),
    prisma.post.count(),
    prisma.post.count({ where: { published: true } }),
    prisma.lead.groupBy({ by: ["source"], _count: true }),
    prisma.lead.groupBy({ by: ["status"], _count: true }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  return ok({
    overview: {
      totalClients,
      totalLeads,
      newLeadsThisMonth,
      openRequests,
      emergencyRequests,
      draftQuotes,
      approvedQuotes,
      subscriberCount,
      totalPosts,
      publishedPosts,
    },
    charts: {
      leadsBySource,
      leadsByStatus,
    },
    recentLeads,
  });
}

// POST /api/analytics — Track page view (fire-and-forget from client)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { path, referrer } = body;
  if (!path) return ok({ tracked: false });

  await prisma.pageView.create({
    data: { path, referrer: referrer ?? null },
  }).catch(() => null); // silent fail — don't block page load

  return ok({ tracked: true });
}
