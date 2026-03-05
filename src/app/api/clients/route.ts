import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err, requireAdmin } from "@/lib/api";

const createClientSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  address: z.string().optional(),
  tier: z.enum(["STANDARD", "ELITE", "CORPORATE"]).optional(),
  notes: z.string().optional(),
});

// GET /api/clients
export async function GET(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const { searchParams } = new URL(req.url);
  const tier = searchParams.get("tier") as any;
  const status = searchParams.get("status") as any;
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "25");

  const where = {
    ...(tier ? { tier } : {}),
    ...(status ? { status } : {}),
  };

  const [clients, total] = await Promise.all([
    prisma.client.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      include: { _count: { select: { quotes: true, serviceRequests: true } } },
    }),
    prisma.client.count({ where }),
  ]);

  return ok({ clients, total, page, limit });
}

// POST /api/clients
export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return err("Unauthorized", 401);

  const body = await req.json();
  const parsed = createClientSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const existing = await prisma.client.findUnique({
    where: { email: parsed.data.email },
  });
  if (existing) return err("Client with this email already exists", 409);

  const client = await prisma.client.create({ data: parsed.data });
  return ok(client, 201);
}
