import {
  APP_FULL_NAME,
  APP_NAME,
  APP_TAGLINE,
  CONTACT_EMAIL,
  DEVELOPER_NAME,
  PLAY_STORE_URL,
  PRODUCT_HUNT_URL,
} from "../config";
import { IconMail, IconPlayTriangle, IconProductHunt, IconXSocial } from "./Icons";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Screenshots", href: "#screenshots" },
      { label: "Privacy", href: "#privacy" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Launch",
    links: [
      { label: "Product Hunt", href: PRODUCT_HUNT_URL, external: true },
      { label: "Press kit", href: "#launch" },
      { label: "Share", href: "#launch" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#/privacy" },
      { label: "Terms of Service", href: "#/terms" },
      { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
  {
    title: "Get the app",
    links: [
      { label: "Google Play", href: PLAY_STORE_URL, external: true },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src="/images/app-icon.png"
                alt=""
                className="h-10 w-10 rounded-xl shadow-sm ring-1 ring-black/5"
              />
              <span className="font-display text-xl font-bold text-ink">{APP_NAME}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              <span className="font-bold text-ink">{APP_FULL_NAME}</span> — {APP_TAGLINE} A
              premium, privacy-first offline notes app for Android.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Play"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <IconPlayTriangle className="h-3.5 w-3.5" />
              </a>
              <a
                href={PRODUCT_HUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Product Hunt"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <IconProductHunt className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                title="Email"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <IconMail className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${APP_NAME} — ${APP_TAGLINE}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X"
                className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
              >
                <IconXSocial className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-extrabold tracking-[0.14em] text-ink uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={"external" in l && l.external ? "_blank" : undefined}
                      rel={"external" in l && l.external ? "noopener noreferrer" : undefined}
                      className="text-sm font-semibold text-slate-500 transition-colors hover:text-orange-600"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs font-semibold text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {APP_NAME} · {DEVELOPER_NAME}
          </p>
          <p className="text-center sm:text-right">
            An independent app · Not affiliated with Google or Product Hunt · Made with ❤️
            in India
          </p>
        </div>
      </div>
    </footer>
  );
}
