import { NextRequest } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ok, err, requireAdmin } from "@/lib/api";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const postSchema = z.object({
  title: z.string().min(5),
  content: z.string().min(20),
  excerpt: z.string().optional(),
  coverImage: z.string().url().optional(),
  category: z.string().default("General"),
  published: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// GET /api/posts — Public (only published), Admin sees all
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user && ["SUPER_ADMIN", "EDITOR"].includes((session.user as any).role);
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10");

  const where = isAdmin ? {} : { published: true };

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      skip: (page - 1) * limit,
      take: limit,
      select: {
        id: true, title: true, slug: true, excerpt: true,
        coverImage: true, category: true, published: true,
        publishedAt: true, viewCount: true,
        author: { select: { name: true } },
      },
    }),
    prisma.post.count({ where }),
  ]);

  return ok({ posts, total, page, limit });
}

// POST /api/posts — Admin only
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return err("Unauthorized", 401);

  const body = await req.json();
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) return err(parsed.error.message);

  const slug = slugify(parsed.data.title);
  const existing = await prisma.post.findUnique({ where: { slug } });
  if (existing) return err("A post with this title already exists", 409);

  const post = await prisma.post.create({
    data: {
      ...parsed.data,
      slug,
      authorId: (session.user as any).id,
      publishedAt: parsed.data.published ? new Date() : null,
    },
  });

  return ok(post, 201);
}
