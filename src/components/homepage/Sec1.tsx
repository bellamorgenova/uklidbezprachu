import Image from "next/image";

export function Sec1() {
  return (
    <section className="page-section section section-1">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="mb-3">Affordable cleaning solutions</p>
            <h2>High-Quality and Friendly Services at Fair Prices</h2>
            <p className="mb-6">
              We provide comprehensive cleaning services tailored to your needs.
              From residential cleaning services
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/img/img1.webp"
              alt=""
              width={478}
              height={421}
              className="w-auto h-auto m-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
