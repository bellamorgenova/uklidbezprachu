"use client";

import { scrollToSectionById } from "@/lib/scroll-to-section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, type MouseEvent } from "react";

type Props = ComponentProps<typeof Link>;

function hrefToString(href: Props["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object" && "pathname" in href) {
    const hash = href.hash ? `#${href.hash.replace(/^#/, "")}` : "";
    return `${href.pathname ?? "/"}${hash}`;
  }
  return "/";
}

export function HeaderLink({ href, className, children, onClick, ...props }: Props) {
  const pathname = usePathname();
  const hrefStr = hrefToString(href);
  const [pathPart, hashPart] = hrefStr.split("#");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const targetPath = pathPart || "/";
    const sectionId = hashPart;
    if (!sectionId || targetPath !== "/" || pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", `/#${sectionId}`);
    scrollToSectionById(sectionId, "smooth");
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
