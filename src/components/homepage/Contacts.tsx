import { Mail, MapPin, PhoneCall } from "lucide-react";

import { SECTION } from "@/lib/sections";

export function Contacts() {
  return (
    <section id={SECTION.contact} className="page-section section section-contacts">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold text-xl lg:text-[40px]">Find us</h3>
            <div className="mt-10 grid gap-6">
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <PhoneCall size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">Call Us</p>
                  <a href="tel:+(08)255201888">+(08) 255 201 888</a>
                </div>
              </div>
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">Email Now</p>
                  <a href="mailto:Hello@procleaning.com">Hello@procleaning.com</a>
                </div>
              </div>
              <div
                className="grid grid-cols-[54px_1fr] gap-4 items-center bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div
                  className="bg-main text-white flex items-center justify-center rounded-full w-13.5 h-13.5"
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg mb-0">Address</p>
                  <address className="not-italic">
                    7510, Brand Tower, New York, USA
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm mb-0">Contact info</p>
            <h3 className="font-semibold text-xl lg:text-[40px] mb-3">Keep In Touch</h3>
            <p>
              We prioritize responding to your inquiries promptly to ensure you
              receive the assistance you need in a timely manner
            </p>
            <form action="/" method="post" className="mt-8 grid gap-3">
              <fieldset className="fieldset">
                <input
                  type="text"
                  placeholder="Name"
                  className="input w-full"
                  id="contact-name"
                  name="contact_name"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full"
                  id="contact-email"
                  name="contact_email"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <textarea
                  className="textarea w-full"
                  placeholder="Message"
                  id="contact-msg"
                  name="contact_msg"
                  required
                />
              </fieldset>
              <button
                className="btn bg-main border-main text-white rounded-lg hover:bg-green-600 shadow-none lg:mr-auto"
                type="submit"
              >
                Sent Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
