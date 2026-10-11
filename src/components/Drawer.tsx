import { CTA_LABEL, NAV_MENU } from "@/lib/consts";
import { sectionHref, SECTION } from "@/lib/sections";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";

export function Drawer() {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      >
        <span className="sr-only">Zavřít menu</span>
      </label>
      <div className="menu bg-white text-gray-800 min-h-full w-80 p-4 flex flex-col border-r border-gray-200">
        <Logo compact />
        <ul className="mt-6 gap-1">
          {NAV_MENU.map((item) => (
            <li key={item.url}>
              <HeaderLink
                href={item.url}
                className="rounded-lg hover:bg-gray-100 font-medium"
              >
                {item.title}
              </HeaderLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 items-stretch w-full mt-auto pt-6">
          <a
            href={sectionHref(SECTION.contact)}
            className="btn bg-main border-main text-white rounded-lg hover:bg-green-700 hover:border-green-700 w-full shadow-none"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </div>
  );
}
