import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container text-center">
      <h1>404</h1>
      <p className="mb-6">Page not found.</p>
      <Link href="/" className="btn bg-main text-white border-main">
        Back to home
      </Link>
    </section>
  );
}
