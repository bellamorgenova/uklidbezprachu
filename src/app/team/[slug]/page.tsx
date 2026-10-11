import { PostLayout } from "@/components/PostLayout";
import { getTeamMember, getTeamMembers } from "@/lib/content";
import { sectionHref, SECTION } from "@/lib/sections";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getTeamMembers().map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  return buildPageMetadata({
    title: member.data.title,
    description: member.data.description,
    path: `/team/${slug}`,
    noIndex: true,
    ogImage: member.data.thumbnail ?? undefined,
  });
}

export default async function TeamDetailPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <PostLayout
      title={member.data.title}
      description={member.data.description}
      pubDate={member.data.pubDate}
      updatedDate={member.data.updatedDate}
      thumbnail={member.data.thumbnail}
      breadcrumbParent="Tým"
      parentHref={sectionHref(SECTION.team)}
      content={member.content || member.data.description}
    />
  );
}
