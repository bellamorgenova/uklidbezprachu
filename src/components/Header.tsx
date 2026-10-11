import { CTA_LABEL } from "@/lib/consts";
import { sectionHref, SECTION } from "@/lib/sections";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="header">
      <div className="navbar w-full">
        <div className="container grid grid-cols-[204px_1fr] lg:grid-cols-[204px_1fr_auto] items-center">
          <Logo />
          <Navbar />
          <div className="flex gap-3 ml-auto">
            <Link
              href={sectionHref(SECTION.contact)}
              className="hidden sm:flex btn bg-main border-main text-white rounded-lg hover:bg-green-600"
            >
              {CTA_LABEL}
            </Link>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost ml-2"
              >
                <Menu className="w-6 h-6" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
