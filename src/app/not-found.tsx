import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container text-center">
      <h1>Stránka nenalezena</h1>
      <p className="mb-6">Omlouváme se, tato adresa na webu neexistuje.</p>
      <Link href="/" className="btn bg-main text-white border-main">
        Na úvodní stránku
      </Link>
    </section>
  );
}
