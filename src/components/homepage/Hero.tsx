import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="section-hero bg-gray-50 py-10 lg:py-20 bg-no-repeat bg-cover relative overflow-hidden z-0"
    >
      <Image
        src="/img/bg/bg0.webp"
        alt=""
        width={1200}
        height={600}
        priority
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
      />
      <div className="absolute inset-0 bg-white/80 md:bg-transparent -z-10" />
      <div className="container z-10 relative">
        <div className="sm:max-w-md md:max-w-xl text-center sm:text-left">
          <p className="text-sm mb-1">Quality cleaning at a fair price.</p>
          <h1>Specialized, efficient, and thorough cleaning services</h1>
          <p>
            We provide performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto sm:mx-0">
            <Link
              href="/contact"
              className="btn bg-main border-main text-white rounded-lg hover:bg-green-600"
            >
              Get Start Now
            </Link>
            <Link
              href="/service"
              className="btn btn-outline hover:bg-white hover:border-white rounded-lg"
            >
              View all Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
