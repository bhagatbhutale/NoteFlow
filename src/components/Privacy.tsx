import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconCheck, IconShield } from "./Icons";

const POINTS = [
  {
    title: "No account, no sign-up",
    body: "Open the app and start writing. No email, no password, no verification link, no onboarding quiz.",
  },
  {
    title: "No analytics, no tracking",
    body: "We don't know what you wrote and we don't want to. There are no tracking SDKs and no advertising profile.",
  },
  {
    title: "Works in airplane mode",
    body: "No SIM, no Wi-Fi, no problem. Everything works exactly the same with the radios switched off.",
  },
  {
    title: "Your backup, your rules",
    body: "Export every note as JSON whenever you like, and wipe everything from the app in a single tap.",
  },
];

export function Privacy() {
  return (
    <section id="privacy" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl animate-blob [animation-delay:-8s]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Privacy"
              tone="dark"
              align="left"
              title={
                <>
                  Your notes never
                  <br />
                  leave your phone.
                </>
              }
              sub="Most notes apps want your data. NoteFlow wants the opposite: a small, fast, honest tool that keeps your thoughts exactly where they belong — with you."
            />

            <Reveal delay={120}>
              <div className="mt-8 flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                  <IconShield className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-white/70">
                  <strong className="font-extrabold text-white">The only network calls</strong>{" "}
                  in NoteFlow are optional ads. Nothing you type is ever uploaded, synced or
                  shared — there is simply nowhere for it to go.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-white/10 bg-ink-soft p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
                    <IconCheck className="h-4.5 w-4.5" strokeWidth={3} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
