"use client";

import { scrollToSectionById } from "@/lib/scroll-to-section";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ComponentProps, type MouseEvent } from "react";

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
  const [hash, setHash] = useState("");
  const hrefStr = hrefToString(href);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  const [pathPart, hashPart] = hrefStr.split("#");
  const targetHash = hashPart ? `#${hashPart}` : "";
  const onHome = pathname === "/";

  let isActive = false;
  if (hrefStr === "/" || hrefStr.endsWith("#uvod")) {
    isActive = onHome && (hash === "" || hash === "#uvod");
  } else if (targetHash) {
    isActive = onHome && hash === targetHash;
  } else {
    isActive = hrefStr === pathname;
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    const targetPath = pathPart || "/";
    const sectionId = hashPart;
    if (!sectionId || targetPath !== "/" || pathname !== "/") return;

    event.preventDefault();
    window.history.pushState(null, "", `/#${sectionId}`);
    scrollToSectionById(sectionId, "smooth");
    setHash(`#${sectionId}`);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={[className, isActive ? "nav-link-active" : ""]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Link>
  );
}
