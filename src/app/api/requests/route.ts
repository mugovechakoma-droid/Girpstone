import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err } from "@/lib/api";

const requestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  type: z.string().min(2),
  urgency: z.enum(["LOW", "MEDIUM", "HIGH", "EMERGENCY"]).default("MEDIUM"),
  location: z.string().min(3),
  description: z.string().min(10),
});

// GET /api/requests — Admin only
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as any;
  const urgency = searchParams.get("urgency") as any;

  const requests = await prisma.serviceRequest.findMany({
    where: {
      ...(status ? { status } : {}),
      ...(urgency ? { urgency } : {}),
    },
    orderBy: [{ urgency: "desc" }, { createdAt: "desc" }],
  });

  return ok(requests);
}

// POST /api/requests — Public endpoint (contact form, hero CTA)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const request = await prisma.serviceRequest.create({ data: parsed.data });

  // Also create a lead record for tracking
  await prisma.lead.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      source: "CONTACT_FORM",
      serviceInterest: parsed.data.type,
      message: parsed.data.description,
    },
  });

  return ok(request, 201);
}
