import { Reveal } from "./Reveal";
import { PlayStoreButton } from "./PlayStoreButton";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 px-6 py-14 text-center shadow-[0_30px_60px_-30px_rgba(249,115,22,0.6)] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -right-8 -bottom-20 h-56 w-56 rounded-full bg-amber-200/40 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-white uppercase">
              Free · No account · Offline
            </span>
            <h2 className="mt-5 font-display text-3xl leading-tight font-bold text-white sm:text-5xl">
              Ready to clear your head?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/85">
              Download NoteFlow and write your first note in under ten seconds. No setup,
              no sign-up, no cloud — just you and your thoughts.
            </p>
            <div className="mt-8 flex justify-center">
              <PlayStoreButton eyebrow="Download free on" className="hover:shadow-2xl" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
