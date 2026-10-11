import { FormattedDate } from "@/components/FormattedDate";
import { MarkdownBody } from "@/components/MarkdownBody";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  thumbnail?: string;
  breadcrumbParent: string;
  parentHref: string;
  authorName?: string;
  categoryTitle?: string;
  content: string;
};

export function PostLayout({
  title,
  pubDate,
  updatedDate,
  thumbnail,
  breadcrumbParent,
  parentHref,
  authorName,
  categoryTitle,
  content,
}: Props) {
  return (
    <div className="container pt-0 pb-10 lg:py-20">
      <article className="post">
        <div className="breadcrumbs text-sm">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Domů</Link></li>
            <li><Link href={parentHref}>{breadcrumbParent}</Link></li>
            <li>{title}</li>
          </ul>
        </div>
        <div className="title text-center my-5 sm:my-10">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center items-center">
            <FormattedDate date={pubDate} />
            {updatedDate && (
              <div className="last-updated-on">
                Naposledy upraveno <FormattedDate date={updatedDate} />
              </div>
            )}
            {authorName && <span>Autor: {authorName}</span>}
            {categoryTitle && (
              <span className="bg-main text-white rounded py-1 px-2">
                {categoryTitle}
              </span>
            )}
          </div>
          <h1>{title}</h1>
        </div>
        {thumbnail && (
          <div className="hero-image">
            <Image
              width={1020}
              height={510}
              src={thumbnail}
              alt=""
              className="w-full h-auto aspect-2/1 object-cover rounded-lg"
              priority
            />
          </div>
        )}
        <div className="prose">
          <div className="max-w-5xl mx-auto pt-5 lg:pt-10">
            <MarkdownBody content={content} />
            <hr className="mt-5 lg:mt-20 opacity-10" />
            <div className="flex justify-between flex-wrap items-center gap-4 pt-5 lg:pt-10">
              <Link href={parentHref} className="btn btn-outline inline-flex gap-2">
                <ArrowLeft size={18} /> Zpět
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
