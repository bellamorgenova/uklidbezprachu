import { Star, User } from "lucide-react";
import Image from "next/image";
import type { TeamFrontmatter } from "@/lib/content";

type Props = { id: string; data: TeamFrontmatter };

function StarRow({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <div className="flex gap-1 items-center text-yellow-500 my-2">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={24} fill="currentColor" />
      ))}
    </div>
  );
}

export function TeamCard({ data }: Props) {
  const description = data.description?.trim();

  return (
    <article>
      <div className="w-full mb-4">
        {data.thumbnail ? (
          <div
            className="relative w-full aspect-[4/5] max-h-[22rem] mx-auto overflow-hidden [mask-image:radial-gradient(ellipse_88%_86%_at_50%_42%,#000_52%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_88%_86%_at_50%_42%,#000_52%,transparent_100%)]"
          >
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={768}
              height={1024}
              sizes="(max-width: 640px) 85vw, 320px"
              className="w-full h-full object-cover object-[center_18%] scale-[1.08] origin-[center_22%]"
              unoptimized
            />
          </div>
        ) : (
          <div
            className="rounded-xl overflow-hidden bg-[radial-gradient(circle_at_center,transparent,rgba(54,184,100,0.25))]"
          >
          <div
            className="w-full aspect-[370/300] bg-gray-100 flex items-center justify-center text-gray-300"
            aria-label="Fotografie doplníme"
          >
            <User className="w-[38%] h-[38%] min-w-[7rem] min-h-[7rem]" strokeWidth={1.25} />
          </div>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-xl sm:text-2xl">{data.title}</h3>
      <StarRow count={data.rating} />
      {description ? (
        <p className="mt-4 text-sm sm:text-base">{description}</p>
      ) : (
        <p className="mt-4 text-sm sm:text-base text-gray-500 italic">Text doplníme.</p>
      )}
    </article>
  );
}
