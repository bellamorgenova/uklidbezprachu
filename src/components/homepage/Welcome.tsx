import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  "Vetted professionals",
  "Next day availability",
  "Standard cleaning tasks",
  "Best Quality",
  "Affordable Prices",
];

export function Welcome() {
  return (
    <section className="section section-welcome">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Image
            src="/img/img2.webp"
            alt=""
            width={535}
            height={442}
            className="w-auto h-auto"
          />
          <div>
            <h2>Welcome To Our Pro-cleaning Company!</h2>
            <p>
              We make your space shine! Professional and reliable cleaning service
              company providing top-notch solutions for homes and businesses.
              Satisfaction guaranteed!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-6 gap-4">
              {perks.map((label) => (
                <div
                  key={label}
                  className="grid grid-cols-[20px_1fr] items-center bg-gray-50 dark:bg-dark p-4 rounded gap-4"
                >
                  <div
                    className="bg-main text-white rounded-full flex items-center justify-center w-5 h-5"
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="font-semibold text-lg">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto sm:mx-0">
              <Link
                href="/contact"
                className="btn bg-main border-main text-white rounded-lg hover:bg-green-600"
              >
                Book Now
              </Link>
              <Link href="/about" className="btn btn-outline rounded-lg">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
