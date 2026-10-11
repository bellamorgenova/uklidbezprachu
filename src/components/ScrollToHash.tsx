"use client";

import { scrollToSectionById } from "@/lib/scroll-to-section";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToCurrentHash(behavior: ScrollBehavior = "smooth") {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return;
  requestAnimationFrame(() => {
    scrollToSectionById(id, behavior);
  });
}

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToCurrentHash("smooth");
    const onHashChange = () => scrollToCurrentHash("smooth");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return null;
}
