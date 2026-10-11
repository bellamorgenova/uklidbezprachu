import { PostLayout } from "@/components/PostLayout";
import { getService, getServices } from "@/lib/content";
import { sectionHref, SECTION } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getService(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.data.title,
    description: post.data.description,
    path: `/service/${slug}`,
    ogImage: post.data.thumbnail ?? undefined,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getService(slug);
  if (!post) notFound();

  return (
    <PostLayout
      title={post.data.title}
      description={post.data.description}
      pubDate={post.data.pubDate}
      updatedDate={post.data.updatedDate}
      thumbnail={post.data.thumbnail}
      breadcrumbParent="Služby"
      parentHref={sectionHref(SECTION.services)}
      content={post.content}
    />
  );
}
