import { NAV_MENU } from "@/lib/consts";
import { HeaderLink } from "./HeaderLink";

/** Odkazy menu — v hlavičce vedle sebe s CTA, na středu stránky. */
export function Navbar() {
  return (
    <ul className="menu menu-horizontal gap-x-0 text-gray-700 p-0">
      {NAV_MENU.map((item) => (
        <li key={item.url}>
          <HeaderLink
            href={item.url}
            className="rounded-lg hover:bg-gray-100 hover:text-main font-medium px-3"
          >
            {item.title}
          </HeaderLink>
        </li>
      ))}
    </ul>
  );
}
