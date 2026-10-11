import { User } from "lucide-react";

export function TeamHiringCard() {
  return (
    <article>
      <div
        className="relative w-full aspect-[4/5] max-h-[22rem] mx-auto mb-4 rounded-xl overflow-hidden bg-gray-200"
        aria-hidden
      >
        <User
          className="absolute left-1/2 top-[54%] h-[94%] w-[94%] max-w-none -translate-x-1/2 -translate-y-1/2 text-gray-400"
          strokeWidth={0.75}
          fill="currentColor"
        />
        <span
          className="absolute inset-0 z-10 flex items-center justify-center text-8xl sm:text-9xl font-bold text-[rgb(54,184,100)] select-none pointer-events-none"
        >
          ?
        </span>
      </div>
      <p className="mt-4 text-sm sm:text-base text-center sm:text-left">
        Hledáme parťáky do týmu! Pokud je úklid i Tvoje vášeň a máš zájem o spolupráci,
        ozvi se nám.
      </p>
    </article>
  );
}
