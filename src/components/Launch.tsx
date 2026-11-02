import { useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import {
  APP_DESCRIPTION,
  APP_KEYWORDS,
  APP_TAGLINE,
  CONTACT_EMAIL,
  PLAY_STORE_URL,
  PRESS_KIT,
  PRODUCT_HUNT_URL,
} from "../config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  IconArrowUp,
  IconCopy,
  IconDownload,
  IconMail,
  IconProductHunt,
  IconReddit,
  IconWhatsApp,
  IconXSocial,
} from "./Icons";

const CHANNELS = [
  { name: "Product Hunt", detail: "Launch-day upvotes & comments", status: "Live" },
  { name: "Hacker News", detail: "Show HN post", status: "Show HN" },
  { name: "Y Combinator", detail: "Startup directory & launch", status: "Submitted" },
  { name: "Reddit", detail: "r/androidapps · r/productivity", status: "Planned" },
  { name: "X / Twitter", detail: "Build-in-public thread", status: "Live" },
  { name: "Dev.to & Hashnode", detail: "“How I built NoteFlow”", status: "Writing" },
];

const STATUS_TONE: Record<string, string> = {
  Live: "bg-emerald-100 text-emerald-700",
  Planned: "bg-slate-100 text-slate-500",
  Submitted: "bg-sky-100 text-sky-700",
  Writing: "bg-amber-100 text-amber-700",
  "Show HN": "bg-orange-100 text-orange-700",
};

function ActionButton({
  onClick,
  children,
  variant = "primary",
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition-all hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-ink text-white hover:shadow-lg hover:shadow-ink/25"
          : "border-2 border-ink/10 bg-white text-ink hover:border-ink/25",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Launch() {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const pageUrl = () =>
    typeof window !== "undefined" ? window.location.href : PLAY_STORE_URL;
  const shareText = `${APP_TAGLINE} A privacy-first offline notes app for Android — no account, no cloud, no tracking.`;

  const shareLinks = [
    {
      name: "X",
      Icon: IconXSocial,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl())}`,
    },
    {
      name: "Reddit",
      Icon: IconReddit,
      href: `https://www.reddit.com/submit?url=${encodeURIComponent(pageUrl())}&title=${encodeURIComponent(`NoteFlow — ${APP_TAGLINE}`)}`,
    },
    {
      name: "WhatsApp",
      Icon: IconWhatsApp,
      href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl()}`)}`,
    },
  ];

  const copyDescription = async () => {
    try {
      await navigator.clipboard.writeText(APP_DESCRIPTION);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  };

  const downloadPressKit = () => {
    const blob = new Blob([PRESS_KIT], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-notes-press-kit.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    window.setTimeout(() => setDownloaded(false), 2200);
  };

  return (
    <section id="launch" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Launch"
        title="We're going live — come say hi 👋"
        sub="NoteFlow is launching across the maker and builder communities. Here is everything you need to upvote, share or write about it."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        {/* Product Hunt card */}
        <Reveal className="lg:col-span-3">
          <article className="h-full rounded-3xl border border-ink/[0.06] bg-white p-6 shadow-[0_2px_12px_rgba(22,25,35,0.05)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#DA552F] text-white shadow-lg shadow-[#DA552F]/30">
                <IconProductHunt className="h-8 w-8" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold tracking-[0.22em] text-[#DA552F] uppercase">
                  Product Hunt
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">NoteFlow</h3>
                <p className="text-sm font-semibold text-slate-500">{APP_TAGLINE}</p>
              </div>
              <a
                href={PRODUCT_HUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hidden shrink-0 flex-col items-center gap-0.5 rounded-xl border-2 border-[#DA552F] px-4 py-2.5 text-[#DA552F] transition-all hover:-translate-y-0.5 hover:bg-[#DA552F] hover:text-white sm:flex"
              >
                <IconArrowUp className="h-4 w-4" strokeWidth={3} />
                <span className="text-[11px] font-extrabold">Upvote</span>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {APP_KEYWORDS.map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-cream px-3 py-1.5 text-xs font-bold text-slate-500"
                >
                  {k}
                </span>
              ))}
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
              NoteFlow is built by a solo indie developer. If it sounds useful to you, an
              upvote and a short comment on launch day genuinely changes everything for a
              one-person team. 🙏
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={PRODUCT_HUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#DA552F] px-5 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#DA552F]/30"
              >
                <IconArrowUp className="h-4 w-4" strokeWidth={3} />
                Upvote on Product Hunt
              </a>
              <a
                href="#screenshots"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-ink/10 bg-white px-5 py-3.5 text-sm font-extrabold text-ink transition-all hover:-translate-y-0.5 hover:border-ink/25"
              >
                See the screenshots
              </a>
            </div>
          </article>
        </Reveal>

        {/* Press kit card */}
        <Reveal delay={100} className="lg:col-span-2">
          <article className="flex h-full flex-col rounded-3xl border border-ink/[0.06] bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-ink">Press kit</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Everything a writer, reviewer or curator needs — app description, feature
              list, links and ready-to-paste copy.
            </p>

            <ul className="mt-4 space-y-1.5 text-sm font-semibold text-slate-500">
              {["App description", "Feature list", "Links & contact", "Suggested copy"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {i}
                  </li>
                ),
              )}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <ActionButton onClick={downloadPressKit}>
                <IconDownload className="h-4 w-4" />
                {downloaded ? "Downloaded ✓" : "Download .md"}
              </ActionButton>
              <ActionButton onClick={copyDescription} variant="ghost">
                <IconCopy className="h-4 w-4" />
                {copied ? "Copied ✓" : "Copy description"}
              </ActionButton>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=My%20Notes`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-orange-300 decoration-2 underline-offset-4 transition-colors hover:text-orange-600"
            >
              <IconMail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
          </article>
        </Reveal>
      </div>

      {/* Channels */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.name} delay={i * 50}>
            <div className="flex h-full items-center gap-3 rounded-2xl border border-ink/[0.06] bg-white px-4 py-4">
              <div className="min-w-0">
                <p className="font-display text-base font-bold text-ink">{c.name}</p>
                <p className="truncate text-xs font-semibold text-slate-400">{c.detail}</p>
              </div>
              <span
                className={cn(
                  "ml-auto shrink-0 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase",
                  STATUS_TONE[c.status] ?? "bg-slate-100 text-slate-500",
                )}
              >
                {c.status}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Share row */}
      <Reveal delay={120}>
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-ink/[0.06] bg-white px-5 py-4">
          <p className="font-display text-base font-bold text-ink">Share the launch</p>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            {shareLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Share on ${s.name}`}
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <s.Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-xl bg-cream px-4 py-2.5 text-sm font-extrabold text-slate-600 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
            >
              <IconCopy className="h-4 w-4" />
              {copied ? "Link copied ✓" : "Copy link"}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
