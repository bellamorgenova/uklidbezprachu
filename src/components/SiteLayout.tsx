import { Footer } from "./Footer";
import { Header } from "./Header";
import { Drawer } from "./Drawer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer min-h-screen">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        title="Toggle navigation menu"
      />
      <label htmlFor="my-drawer-2" className="sr-only">
        Toggle navigation menu
      </label>
      <div className="drawer-content flex flex-col min-h-screen">
        <main className="min-h-screen flex flex-col">
          <Header />
          {children}
        </main>
        <Footer />
      </div>
      <Drawer />
    </div>
  );
}
