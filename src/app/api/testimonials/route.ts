import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err, requireAdmin } from "@/lib/api";

const testimonialSchema = z.object({
  author: z.string().min(2),
  company: z.string().optional(),
  content: z.string().min(10),
  rating: z.number().int().min(1).max(5).default(5),
});

// GET /api/testimonials — Public (approved only)
export async function GET() {
  const testimonials = await prisma.testimonial.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return ok(testimonials);
}

// POST /api/testimonials — Public submission or Admin direct publish
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = testimonialSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const admin = await requireAdmin();
  const testimonial = await prisma.testimonial.create({
    data: { ...parsed.data, approved: !!admin }, // auto-approve if admin
  });
  return ok(testimonial, 201);
}

// PATCH /api/testimonials — Admin approve/reject
export async function PATCH(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const { id, approved } = await req.json();
  if (!id) return err("Missing id");

  const testimonial = await prisma.testimonial.update({
    where: { id },
    data: { approved },
  });
  return ok(testimonial);
}
