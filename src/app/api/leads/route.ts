import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err } from "@/lib/api";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  source: z
    .enum(["HERO_CTA", "CONTACT_FORM", "WHATSAPP", "NEWSLETTER", "REFERRAL"])
    .default("HERO_CTA"),
  serviceInterest: z.string().optional(),
  message: z.string().optional(),
});

// POST /api/leads — Public (from any CTA)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const lead = await prisma.lead.create({ data: parsed.data });
  return ok(lead, 201);
}

// GET /api/leads — Admin only
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as any;
  const source = searchParams.get("source") as any;

  const leads = await prisma.lead.findMany({
    where: {
      ...(status ? { status } : {}),
      ...(source ? { source } : {}),
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return ok(leads);
}
