import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <section className="section container max-w-3xl post">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo
        integer malesuada nunc vel risus commodo viverra.
      </p>
      <p>
        Morbi tristique senectus et netus. Id semper risus in hendrerit gravida
        rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis
        purus sit amet.
      </p>
      <p>
        Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque.
        Diam sit amet nisl suscipit.
      </p>
    </section>
  );
}
