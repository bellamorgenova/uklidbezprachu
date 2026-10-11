import { PostLayout } from "@/components/PostLayout";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.data.title,
    description: post.data.description,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <PostLayout
      title={post.data.title}
      description={post.data.description}
      pubDate={post.data.pubDate}
      updatedDate={post.data.updatedDate}
      thumbnail={post.data.thumbnail}
      breadcrumbParent="Blog"
      parentHref="/blog"
      authorName={post.data.author.name}
      categoryTitle={post.data.category.title}
      content={post.content}
    />
  );
}
