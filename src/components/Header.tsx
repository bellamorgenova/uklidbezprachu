import { CTA_LABEL } from "@/lib/consts";
import { sectionHref, SECTION } from "@/lib/sections";
import { Menu } from "lucide-react";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="header sticky top-0 z-40 bg-white border-b border-gray-200 text-gray-800 shadow-sm">
      <div className="navbar w-full bg-transparent min-h-0">
        <div
          className="container flex items-center justify-between gap-3 py-2.5 lg:py-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
        >
          <div className="justify-self-start">
            <Logo compact />
          </div>

          <nav
            className="hidden lg:flex items-center justify-center gap-2 xl:gap-3"
            aria-label="Hlavní navigace"
          >
            <Navbar />
            <HeaderLink
              href={sectionHref(SECTION.contact)}
              className="btn btn-md bg-main border-main text-white rounded-lg hover:bg-green-700 hover:border-green-700 shadow-none font-medium px-5 whitespace-nowrap"
            >
              {CTA_LABEL}
            </HeaderLink>
          </nav>

          <div className="flex justify-end justify-self-end">
            <label
              htmlFor="my-drawer-2"
              aria-label="Otevřít menu"
              className="btn btn-square btn-ghost text-gray-800 hover:bg-gray-100 border border-transparent lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
