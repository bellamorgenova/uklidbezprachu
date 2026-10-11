import { Contacts } from "@/components/homepage/Contacts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return <Contacts />;
}
