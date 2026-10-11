import Image from "next/image";

export function Sec1() {
  return (
    <section className="page-section section section-1">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="mb-3">Úklid, který dává smysl i cenově</p>
            <h2>Kvalitní práce, příjemný přístup, jasná cena</h2>
            <p className="mb-6">
              Nabízíme komplexní úklid domácností i firemních prostor. Před
              prvním úklidem si ujasníme rozsah, abyste přesně věděli, za co
              platíte.
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
