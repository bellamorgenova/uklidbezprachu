import { NAV_MENU } from "@/lib/consts";
import { HeaderLink } from "./HeaderLink";

export function Navbar() {
  return (
    <div className="hidden lg:block mx-auto">
      <ul className="menu menu-horizontal gap-x-4">
        {NAV_MENU.map((item) => (
          <li key={item.url}>
            <HeaderLink href={item.url} className="hover:bg-white">
              {item.title}
            </HeaderLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
