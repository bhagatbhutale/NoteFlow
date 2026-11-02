import { useState } from "react";
import { cn } from "../utils/cn";
import {
  EditorScreen,
  NoteOptionsScreen,
  NotesListScreen,
  PhoneFrame,
} from "./PhoneMockups";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { IconArrowRight } from "./Icons";

const TABS = [
  {
    id: "notes",
    label: "Notes list",
    emoji: "📒",
    title: "A home screen that feels calm",
    body: "Color-coded cards in a tidy grid, with filters for All, Pinned, Favorites and Archived. The big orange button is always there when a thought strikes.",
    screen: <NotesListScreen />,
  },
  {
    id: "editor",
    label: "Editor",
    emoji: "✍️",
    title: "Distraction-free writing",
    body: "A full-screen editor that saves as you type, shows live word and character counts, and puts pin, favorite and recolor right in the top bar.",
    screen: <EditorScreen />,
  },
  {
    id: "options",
    label: "Note options",
    emoji: "🎨",
    title: "Every action, two taps away",
    body: "Recolor, pin, favorite, duplicate, archive, share or delete — all from a single bottom sheet. Extra color palettes unlock with a quick rewarded ad.",
    screen: <NoteOptionsScreen />,
  },
];

export function Showcase() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId) ?? TABS[0];

  return (
    <section
      id="screenshots"
      className="scroll-mt-24 border-y border-ink/[0.06] bg-white/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Screenshots"
          title="Take a look inside"
          sub="Built to feel like paper, not like software. Tap through the screens below."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div>
            <div className="flex flex-col gap-2.5">
              {TABS.map((t) => {
                const isActive = t.id === active.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveId(t.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-300",
                      isActive
                        ? "border-ink/10 bg-white shadow-[0_14px_30px_-18px_rgba(22,25,35,0.35)]"
                        : "border-transparent bg-white/50 hover:bg-white",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-11 w-11 shrink-0 place-items-center rounded-xl text-xl transition-transform duration-300",
                        isActive ? "bg-orange-100" : "bg-cream",
                      )}
                    >
                      {t.emoji}
                    </span>
                    <span
                      className={cn(
                        "font-display text-base font-bold transition-colors",
                        isActive ? "text-ink" : "text-slate-500",
                      )}
                    >
                      {t.label}
                    </span>
                    {isActive && (
                      <IconArrowRight className="ml-auto h-4 w-4 shrink-0 text-orange-500" />
                    )}
                  </button>
                );
              })}
            </div>

            <div key={active.id} className="mt-8 animate-rise">
              <h3 className="font-display text-2xl font-bold text-ink">{active.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
                {active.body}
              </p>
            </div>
          </div>

          <Reveal className="flex justify-center">
            <PhoneFrame key={active.id} className="animate-pop">
              {active.screen}
            </PhoneFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
