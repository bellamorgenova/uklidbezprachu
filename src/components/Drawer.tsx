import { NAV_MENU } from "@/lib/consts";
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
        <span className="sr-only">Close menu</span>
      </label>
      <div className="menu bg-dark text-white min-h-full w-80 p-4 flex flex-col">
        <Logo mode="dark" />
        <ul className="mt-4">
          {NAV_MENU.map((item) => (
            <li key={item.url}>
              <HeaderLink href={item.url} className="hover:bg-black">
                {item.title}
              </HeaderLink>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 items-center w-full mt-auto">
          <a
            href="/contact"
            className="btn bg-main border-main text-white rounded-lg hover:bg-green-600 hover:text-white! w-full"
          >
            Get a quote
          </a>
        </div>
      </div>
    </div>
  );
}
