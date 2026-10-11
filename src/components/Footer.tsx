import { sectionHref, SECTION } from "@/lib/sections";
import Link from "next/link";
import { HeaderLink } from "./HeaderLink";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer bg-dark text-white gap-0 block">
      <div className="footer-top w-full py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <Logo onDarkBackground />
              <p className="mt-4">
                Profesionální úklid pro domácnosti a firmy. Sledujte nás — brzy
                přidáme tipy, jak udržet domov čistý s minimem námahy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <nav className="grid gap-3">
                <h3 className="text-xl font-semibold">Firma</h3>
                <HeaderLink href={sectionHref(SECTION.about)} className="hover:underline hover:text-main">
                  O nás
                </HeaderLink>
                <HeaderLink href={sectionHref(SECTION.services)} className="hover:underline hover:text-main">
                  Služby
                </HeaderLink>
                <HeaderLink href={sectionHref(SECTION.team)} className="hover:underline hover:text-main">
                  Tým
                </HeaderLink>
              </nav>
              <nav className="grid gap-3">
                <h3 className="text-xl font-semibold">Informace</h3>
                <Link href="/policy" className="hover:underline hover:text-main">
                  Ochrana osobních údajů
                </Link>
                <Link href="/terms" className="hover:underline hover:text-main">
                  Obchodní podmínky
                </Link>
              </nav>
            </div>
            <div className="grid gap-3">
              <h3 className="text-xl font-semibold">Novinky e-mailem</h3>
              <form
                action="/"
                method="get"
                className="mt-3 grid gap-4 grid-cols-1 sm:grid-cols-[2fr_1fr] lg:grid-cols-1"
              >
                <input
                  type="email"
                  placeholder="Váš e-mail"
                  className="input text-black w-full"
                  name="subscribe_email"
                  id="subscribe-email"
                />
                <button
                  className="btn bg-main border-main text-white rounded-lg hover:bg-green-600 lg:mr-auto shadow-none"
                  type="submit"
                >
                  Odebírat
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm w-full">
        <div className="container text-center border-t border-white py-10">
          &copy; {year} Úklid bez prachu
        </div>
      </div>
    </footer>
  );
}
