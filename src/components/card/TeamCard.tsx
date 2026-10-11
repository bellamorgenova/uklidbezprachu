import { Star } from "lucide-react";
import Image from "next/image";
import type { TeamFrontmatter } from "@/lib/content";

type Props = { id: string; data: TeamFrontmatter };

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1 items-center text-yellow-500 my-2">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={24} fill="currentColor" />
      ))}
    </div>
  );
}

export function TeamCard({ data }: Props) {
  return (
    <article>
      <div
        className="bg-[radial-gradient(circle_at_center,transparent,rgba(54,184,100,0.4))] bg-cover rounded-xl overflow-hidden w-full mb-4"
      >
        {data.thumbnail && (
          <Image
            src={data.thumbnail}
            alt={data.title}
            width={370}
            height={300}
            className="w-full h-auto object-cover"
          />
        )}
      </div>
      <h3 className="font-semibold text-xl sm:text-2xl">{data.title}</h3>
      <StarRow count={data.rating} />
      <p className="mt-4 text-sm sm:text-base">{data.description}</p>
    </article>
  );
}
