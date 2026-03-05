import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err, requireAdmin } from "@/lib/api";

const createQuoteSchema = z.object({
  clientId: z.string(),
  serviceType: z.string().min(3),
  scope: z.string().min(10),
  locations: z.array(z.string()).min(1),
  amountUsd: z.number().positive(),
  validUntil: z.string().datetime(),
  notes: z.string().optional(),
});

// GET /api/quotes
export async function GET(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") as any;
  const clientId = searchParams.get("clientId");

  const quotes = await prisma.quote.findMany({
    where: {
      ...(status ? { status } : {}),
      ...(clientId ? { clientId } : {}),
    },
    include: { client: { select: { name: true, email: true, company: true } } },
    orderBy: { createdAt: "desc" },
  });

  return ok(quotes);
}

// POST /api/quotes
export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const body = await req.json();
  const parsed = createQuoteSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const client = await prisma.client.findUnique({
    where: { id: parsed.data.clientId },
  });
  if (!client) return err("Client not found", 404);

  const quote = await prisma.quote.create({
    data: {
      ...parsed.data,
      amountUsd: parsed.data.amountUsd,
      validUntil: new Date(parsed.data.validUntil),
    },
    include: { client: { select: { name: true, email: true } } },
  });

  return ok(quote, 201);
}
