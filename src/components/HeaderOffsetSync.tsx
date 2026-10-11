"use client";

import { useEffect } from "react";

const HEADER_SELECTOR = "header.header";
const GAP_PX = 12;

/** Synchronizuje CSS proměnnou s reálnou výškou sticky hlavičky (logo 80px atd.). */
export function HeaderOffsetSync() {
  useEffect(() => {
    const header = document.querySelector(HEADER_SELECTOR);
    if (!header) return;

    const update = () => {
      const height = header.getBoundingClientRect().height + GAP_PX;
      document.documentElement.style.setProperty(
        "--site-header-offset",
        `${height}px`,
      );
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
