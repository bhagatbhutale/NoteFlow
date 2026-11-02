import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { APP_NAME, PLAY_STORE_URL } from "../config";
import { IconMenu, IconPlayTriangle, IconX } from "./Icons";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Privacy", href: "#privacy" },
  { label: "Launch", href: "#launch" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/images/app-icon.png"
            alt=""
            className="h-9 w-9 rounded-xl shadow-sm ring-1 ring-black/5"
          />
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {APP_NAME}
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-slate-500 transition-colors hover:bg-white hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/25 md:ml-3 md:inline-flex"
        >
          <IconPlayTriangle className="h-3.5 w-3.5" />
          Get the app
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink md:hidden"
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-base font-bold text-slate-600 hover:bg-white hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white"
          >
            <IconPlayTriangle className="h-3.5 w-3.5" />
            Get it on Google Play
          </a>
        </div>
      </div>
    </header>
  );
}
