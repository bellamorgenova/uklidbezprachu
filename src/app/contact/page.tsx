import { Contacts } from "@/components/homepage/Contacts";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = buildPageMetadata({
  title: "Kontakt",
  path: "/contact",
  noIndex: true,
});

export default function ContactPage() {
  return (
    <div>
      <p className="container pt-6">
        <Link href="/#kontakt" className="text-main underline text-sm">
          Stejný obsah je také na úvodní stránce
        </Link>
      </p>
      <Contacts />
    </div>
  );
}
