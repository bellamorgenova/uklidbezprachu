import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PolicyPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl post">
        <div className="breadcrumbs text-sm mb-6">
          <ul className="flex! flex-wrap">
            <li><Link href="/">Home</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <h1 className="uppercase">Privacy Policy</h1>
        <p>
          At ProCleaning, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data when you use our website and services.
        </p>
        <h2 className="h4">1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and address when you contact us or request cleaning
          services.
        </p>
        <h2 className="h4">2. How We Use Your Information</h2>
        <p>
          We use your information to provide cleaning services, respond to
          inquiries, and improve our website and customer experience.
        </p>
        <h2 className="h4">3. Contact</h2>
        <p>
          If you have questions about this policy, please contact us through the
          contact form on this website.
        </p>
      </div>
    </section>
  );
}
