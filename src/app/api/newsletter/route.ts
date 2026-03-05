import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err } from "@/lib/api";

const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

// POST /api/newsletter/subscribe — Public
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = subscribeSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const existing = await prisma.subscriber.findUnique({
    where: { email: parsed.data.email },
  });

  if (existing) {
    if (existing.status === "ACTIVE") return err("Already subscribed", 409);
    // Re-subscribe
    const updated = await prisma.subscriber.update({
      where: { email: parsed.data.email },
      data: { status: "ACTIVE", unsubscribed: null },
    });
    return ok(updated);
  }

  // Also create a lead
  await prisma.lead.create({
    data: {
      name: parsed.data.name ?? "Newsletter Subscriber",
      email: parsed.data.email,
      source: "NEWSLETTER",
    },
  });

  const subscriber = await prisma.subscriber.create({ data: parsed.data });
  return ok(subscriber, 201);
}

// GET /api/newsletter — Get subscriber count (admin)
export async function GET() {
  const count = await prisma.subscriber.count({ where: { status: "ACTIVE" } });
  return ok({ subscriberCount: count });
}
