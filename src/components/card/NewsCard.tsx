import { formatFrontmatterDate } from "@/lib/date";
import type { BlogFrontmatter } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = { id: string; data: BlogFrontmatter };

export function NewsCard({ id, data }: Props) {
  return (
    <article className="group">
      <Link href={`/blog/${id}`} className="flex flex-col gap-3 h-full">
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={500}
            height={250}
            className="rounded-xl aspect-2/1 w-full h-auto object-cover mb-4"
          />
        )}
        <div className="text-center w-full flex-1 flex flex-col justify-between items-center">
          <p className="flex flex-wrap gap-2 gap-x-4 items-center uppercase justify-center text-sm">
            <span className="btn btn-outline px-3 py-1 h-auto text-xs rounded-md">
              {data.category.title}
            </span>
            <span>{data.author.name}</span>
            <time dateTime={data.pubDate.toISOString()}>
              {formatFrontmatterDate(data.pubDate)}
            </time>
          </p>
          <h3 className="font-semibold text-xl sm:text-2xl my-4 group-hover:underline">
            {data.title}
          </h3>
          <p className="mb-6 text-sm sm:text-base">{data.description}</p>
          <span className="btn btn-outline hover:bg-main hover:text-white hover:border-main rounded-lg mt-auto inline-flex gap-2">
            Read more
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
