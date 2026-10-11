import { NewsCard } from "@/components/card/NewsCard";
import type { BlogFrontmatter, ContentItem } from "@/lib/content";
import { SECTION } from "@/lib/sections";

export function NewsSection({
  posts,
}: {
  posts: ContentItem<BlogFrontmatter>[];
}) {
  return (
    <section id={SECTION.blog} className="page-section section section-services">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-b border-b-main pb-10">
          <h2 className="capitalize">Stay Updated with Our Tips & Service News!</h2>
          <div>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <p className="font-semibold mb-3 text-xl">Our Blog</p>
              <p>
                <a href={`#${SECTION.blog}`} className="text-main underline hover:no-underline">
                  Všechny články
                </a>
              </p>
            </div>
            <p className="mb-3">
              Stay informed with our latest cleaning tips, service updates, expert
              advice on maintaining an immaculate home
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 relative">
          {posts.map((post) => (
            <NewsCard key={post.id} id={post.id} data={post.data} />
          ))}
        </div>
      </div>
    </section>
  );
}
