import { PRODUCT_HUNT_URL } from "../config";
import { MiniNoteCard, NotesListScreen, PhoneFrame } from "./PhoneMockups";
import { PlayStoreButton } from "./PlayStoreButton";
import { Reveal } from "./Reveal";
import { IconCheck, IconRocket } from "./Icons";

const HIGHLIGHTS = [
  "100% offline",
  "No account needed",
  "10 note colors",
  "JSON backup",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-32">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-28 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-24 -right-24 h-96 w-96 rounded-full bg-pink-200/50 blur-3xl animate-blob [animation-delay:-6s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl animate-blob [animation-delay:-12s]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-extrabold text-ink shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live on Google Play
              <span className="text-slate-400">· v1.0</span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] font-bold tracking-tight text-ink sm:text-6xl">
              Your thoughts.
              <br />
              <span className="relative whitespace-nowrap text-orange-500">
                Your device.
                <svg
                  className="absolute -bottom-3 left-0 h-3.5 w-full text-orange-300"
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10c42-7 96-8 138-3 18 2 36 3 56 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-slate-600">
              <strong className="font-extrabold text-ink">NoteFlow</strong> is a
              premium, privacy-first offline notes app. Write, color-code, pin
              and organize your thoughts — with no account, no cloud and no
              tracking. Everything stays safely on your phone.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PlayStoreButton />
              <a
                href={PRODUCT_HUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl border-2 border-ink/10 bg-white px-5 py-3.5 text-sm font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-lg"
              >
                <IconRocket className="h-4 w-4 text-orange-500 transition-transform group-hover:-rotate-12" />
                Support our launch
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-1.5 text-sm font-bold text-slate-600"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <IconCheck className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 text-xs font-semibold text-slate-400">
              Free to download · Ads keep it free · No account, no sign-up, no
              permissions required
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200 via-pink-200 to-sky-200 opacity-70 blur-3xl animate-blob" />

            <div className="relative animate-float-slow">
              <PhoneFrame>
                <NotesListScreen />
              </PhoneFrame>
              <div className="absolute inset-x-6 -bottom-6 h-8 rounded-[50%] bg-ink/15 blur-xl" />
            </div>

            <MiniNoteCard
              className="-left-4 top-14 xl:-left-10"
              tone="yellow"
              title="Grocery List"
              lines={["72%", "56%", "44%"]}
              rotate={-8}
            />
            <MiniNoteCard
              className="-right-5 bottom-20 xl:-right-8"
              tone="blue"
              title="Favorite Quotes"
              lines={["86%", "70%", "58%"]}
              rotate={7}
            />
            <MiniNoteCard
              className="top-1/2 -right-10 hidden xl:block"
              tone="green"
              title="Recipes to Try"
              lines={["64%", "48%"]}
              rotate={11}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
