import Image from "next/image";
import Link from "next/link";

type LogoProps = { mode?: "light" | "dark" };

export function Logo({ mode = "light" }: LogoProps) {
  const src = mode === "light" ? "/img/logo.svg" : "/img/logo-w.svg";
  return (
    <Link href="/" className="logo inline-block">
      <Image
        src={src}
        alt="uklidbezprachu_template"
        width={204}
        height={50}
        priority
        className="w-auto h-auto max-h-12"
      />
    </Link>
  );
}
