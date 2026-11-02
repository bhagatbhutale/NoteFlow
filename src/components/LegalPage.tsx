import type { ReactNode } from "react";
import {
  APP_FULL_NAME,
  DEVELOPER_NAME,
  PRIVACY_EFFECTIVE_DATE,
  SUPPORT_EMAIL,
} from "../config";
import { IconArrowRight, IconMail } from "./Icons";

export type LegalBlock =
  | { kind: "p"; text: string; link?: { href: string; label: string } }
  | { kind: "list"; items: string[] }
  | { kind: "callout"; text: string }
  | { kind: "contact" };

export type LegalSection = { title: string; blocks: LegalBlock[] };

function BlockView({ block }: { block: LegalBlock }) {
  if (block.kind === "list") {
    return (
      <ul className="mt-3 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.kind === "callout") {
    return (
      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-[15px] leading-relaxed font-semibold text-amber-900">
        {block.text}
      </div>
    );
  }

  if (block.kind === "contact") {
    return (
      <div className="mt-4 rounded-2xl border border-ink/[0.06] bg-white p-5">
        <p className="text-[11px] font-extrabold tracking-[0.18em] text-slate-400 uppercase">
          Contact
        </p>
        <dl className="mt-3 space-y-2 text-[15px]">
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-bold text-ink">Developer:</dt>
            <dd className="text-slate-600">{DEVELOPER_NAME}</dd>
          </div>
          <div className="flex flex-wrap gap-x-2">
            <dt className="font-bold text-ink">Application:</dt>
            <dd className="text-slate-600">{APP_FULL_NAME}</dd>
          </div>
          <div className="flex flex-wrap items-center gap-x-2">
            <dt className="font-bold text-ink">Email:</dt>
            <dd>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-1.5 font-bold text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700"
              >
                <IconMail className="h-4 w-4" />
                {SUPPORT_EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    );
  }

  return (
    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
      {block.text}
      {block.link ? (
        <>
          {" "}
          <a
            href={block.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold break-words text-orange-600 underline decoration-orange-300 underline-offset-4 hover:text-orange-700"
          >
            {block.link.label}
          </a>
        </>
      ) : null}
    </p>
  );
}

function Meta({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-2xl border border-ink/[0.06] bg-white px-4 py-3">
      <p className="text-[10px] font-extrabold tracking-[0.16em] text-slate-400 uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-ink">{value}</p>
    </div>
  );
}

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:pt-32">
      <a
        href="#top"
        className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-bold text-slate-500 transition-colors hover:text-orange-600"
      >
        <IconArrowRight className="h-4 w-4 rotate-180" />
        Back to home
      </a>

      <header className="mt-7">
        <span className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-orange-600 uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-slate-500">{intro}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Meta label="Effective date" value={PRIVACY_EFFECTIVE_DATE} />
          <Meta label="Application" value={APP_FULL_NAME} />
          <Meta label="Developer" value={DEVELOPER_NAME} />
        </div>
      </header>

      <div className="mt-10 space-y-9">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-bold text-ink sm:text-[22px]">
              {section.title}
            </h2>
            {section.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </section>
        ))}
      </div>

      <footer className="mt-12 rounded-3xl border border-ink/[0.06] bg-white p-6 text-center">
        <p className="font-display text-lg font-bold text-ink">
          Thank you for using {APP_FULL_NAME}.
        </p>
        <a
          href="#top"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/25"
        >
          <IconArrowRight className="h-4 w-4 rotate-180" />
          Back to home
        </a>
      </footer>
    </article>
  );
}
