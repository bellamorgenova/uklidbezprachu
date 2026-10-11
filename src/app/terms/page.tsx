import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & conditions",
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl post">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Home</Link></li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <h1 className="uppercase">Terms & conditions</h1>
        <p>
          By using this website and our cleaning services, you agree to these
          terms. Service scope, pricing, and scheduling are agreed individually
          for each booking.
        </p>
        <p>
          Replace this placeholder text with your business terms before launch.
        </p>
      </div>
    </section>
  );
}
