import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FEATURES = [
  {
    emoji: "🗄️",
    title: "Real on-device database",
    body: "Every note lives in a real SQLite database on your phone — fast, reliable and safe, even after a reboot.",
    tone: "bg-sky-100",
  },
  {
    emoji: "🔍",
    title: "Instant search & sort",
    body: "Find any note in milliseconds. Sort by edited date, created date, title or color.",
    tone: "bg-amber-100",
  },
  {
    emoji: "🎨",
    title: "10 note colors",
    body: "Color-code your world. The first colors are free — unlock the rest with a quick rewarded ad.",
    tone: "bg-pink-100",
  },
  {
    emoji: "📌",
    title: "Pin to top",
    body: "Keep your most important thoughts exactly where you can see them, always one tap away.",
    tone: "bg-orange-100",
  },
  {
    emoji: "⭐",
    title: "Favorites & archive",
    body: "Star what matters, archive the clutter. Two taps to a beautifully clean home screen.",
    tone: "bg-yellow-100",
  },
  {
    emoji: "📤",
    title: "JSON backup & restore",
    body: "Export every note as JSON and import it on a new phone. Your data is never locked in.",
    tone: "bg-emerald-100",
  },
  {
    emoji: "✍️",
    title: "Live word & character count",
    body: "Perfect for tweets, captions and essays — see words and characters update as you type.",
    tone: "bg-violet-100",
  },
  {
    emoji: "🚫",
    title: "Privacy by design",
    body: "No account, no analytics, no tracking. The only network use in the app is optional ads.",
    tone: "bg-rose-100",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need. Nothing you don't."
        sub="NoteFlow is small on purpose. It does the everyday job of capturing thoughts brilliantly — and then gets out of your way."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <article className="group h-full rounded-3xl border border-ink/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(22,25,35,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(22,25,35,0.18)]">
              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${f.tone}`}
              >
                {f.emoji}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
