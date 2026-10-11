"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname]);

  return null;
}
