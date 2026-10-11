import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceFrontmatter } from "@/lib/content";

type Props = { id: string; data: ServiceFrontmatter };

export function ServiceCard({ id, data }: Props) {
  return (
    <article>
      <Link href={`/service/${id}`} className="block">
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={400}
            height={200}
            className="w-full h-auto aspect-2/1 rounded-xl object-cover mb-4"
          />
        )}
        <h3 className="font-semibold text-xl sm:text-2xl my-4">{data.title}</h3>
        <p className="mb-4 mt-4 text-sm sm:text-base">{data.description}</p>
        <span className="btn btn-outline hover:bg-main hover:text-white hover:border-main rounded-lg inline-flex gap-2">
          Book Now
          <ArrowUpRight size={16} />
        </span>
      </Link>
    </article>
  );
}
