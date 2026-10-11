import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nás",
};

export default function AboutPage() {
  return (
    <section className="section container max-w-3xl post">
      <p className="mb-4">
        <Link href="/#o-nas" className="text-main underline">
          ← Zpět na úvodní stránku
        </Link>
      </p>
      <p>
        Podrobné informace o firmě najdete v sekci O nás na hlavní stránce. Tato
        samostatná adresa zůstává pro zpětnou kompatibilitu odkazů.
      </p>
    </section>
  );
}
