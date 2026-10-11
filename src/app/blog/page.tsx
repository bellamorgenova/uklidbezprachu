import { NewsCard } from "@/components/card/NewsCard";
import { getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogListPage() {
  const posts = getBlogPosts();
  return (
    <section className="section">
      <div className="container">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Home</Link></li>
            <li>Blog</li>
          </ul>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {posts.map((post) => (
            <li key={post.id}>
              <NewsCard id={post.id} data={post.data} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
