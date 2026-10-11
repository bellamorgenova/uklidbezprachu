"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link>;

export function HeaderLink({ href, className, children, ...props }: Props) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : href.pathname ?? "/";
  const subpath = pathname.match(/[^/]+/g);
  const isActive =
    hrefStr === pathname || hrefStr === "/" + (subpath?.[0] ?? "");

  return (
    <Link
      href={href}
      className={[className, isActive ? "nav-link-active" : ""].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}
