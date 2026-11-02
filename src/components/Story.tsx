import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconCheck } from "./Icons";

const RULES = [
  "No account. Ever.",
  "No cloud — your notes stay on your device.",
  "No tracking. Ads are the only network call.",
  "No lock-in — export everything as JSON, anytime.",
  "No bloat. A few megabytes that open instantly.",
];

export function Story() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="The story"
        title="Built by one person, for people who just want to write things down"
      />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <article className="relative h-full rounded-3xl border border-ink/[0.06] bg-white p-7 shadow-[0_2px_12px_rgba(22,25,35,0.04)] sm:p-9">
            <span
              className="pointer-events-none absolute top-4 left-6 font-display text-7xl leading-none text-orange-200 select-none"
              aria-hidden="true"
              >
              &ldquo;
            </span>
            <div className="relative">
              <p className="font-display text-xl leading-snug font-semibold text-ink sm:text-2xl">
                Every notes app I tried wanted an account first and my thoughts second.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Then they wanted to sync my grocery lists to somebody else&rsquo;s server.
                I just wanted somewhere to put Wi-Fi passwords, recipes and half-formed
                ideas &mdash; without signing my life away first.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                So I built the opposite: an app that opens straight into a blank page,
                keeps everything in a real database on your own phone, and never asks who
                you are. NoteFlow is small on purpose. It does one job &mdash; capturing
                thoughts &mdash; and it does it without an account, without a cloud, and
                without following you around.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <img
                  src="/images/app-icon.png"
                  alt=""
                  className="h-11 w-11 rounded-xl shadow-sm ring-1 ring-black/5"
                />
                <div>
                  <p className="font-display text-sm font-bold text-ink">
                    The maker of NoteFlow
                  </p>
                  <p className="text-xs font-semibold text-slate-400">
                    Solo developer · Building in public from India 🇮🇳
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-sky-50 to-emerald-50 p-7 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">The rules I followed</h3>
            <ol className="mt-5 space-y-4">
              {RULES.map((r, i) => (
                <li key={r} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-extrabold text-emerald-600 shadow-sm">
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed font-semibold text-slate-600">
                    {r}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-7 flex items-center gap-2 text-sm font-bold text-emerald-700">
              <IconCheck className="h-4 w-4" strokeWidth={3} />
              Shipped, live and free on Google Play
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
