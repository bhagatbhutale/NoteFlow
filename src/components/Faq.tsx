import { useState } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconChevronDown } from "./Icons";

const FAQS = [
  {
    q: "Is NoteFlow really free?",
    a: "Yes. The app is free to download and use, with banner ads and optional rewarded ads that unlock extra note colors. There is no subscription, and nothing important is locked — notes, search, sort, pins, favorites, archive and JSON export all work for free.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up, no email and no password. Install it, open it, start writing. Your notes are tied to your phone, not to an account.",
  },
  {
    q: "Where are my notes stored?",
    a: "Right on your device, in a local database. Nothing is uploaded, and there is no cloud sync to opt into — so there is no server copy of your thoughts anywhere.",
  },
  {
    q: "Can I move my notes to a new phone?",
    a: "Yes. Use Export in Settings to save all of your notes as a JSON file, copy that file to your new phone, and import it. It takes about a minute and works completely offline.",
  },
  {
    q: "Does the app work offline?",
    a: "Completely. Airplane mode, no SIM card, no Wi-Fi — every feature works exactly the same. That is the entire point of the app.",
  },
  {
    q: "Why do some note colors need an ad?",
    a: "To keep the app free for everyone. The first note colors are always free; the extra palettes can be unlocked by watching a short rewarded ad when you pick a color.",
  },
  {
    q: "Is my data sold or shared?",
    a: "Never. There are no analytics SDKs, no advertising profile and no data brokers. The only network activity in the app is serving ads.",
  },
  {
    q: "Which phones are supported?",
    a: "NoteFlow is a lightweight app that runs on virtually any modern Android phone or tablet, and it takes up only a few megabytes.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        sub="Everything people usually ask before installing NoteFlow."
      />

      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 40}>
              <div
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors duration-300",
                  isOpen ? "border-ink/10 shadow-sm" : "border-ink/[0.06]",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-bold text-ink sm:text-[17px]">
                    {f.q}
                  </span>
                  <IconChevronDown
                    className={cn(
                      "ml-auto h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-slate-500">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
