import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import {
  IconGrid,
  IconPin,
  IconPlus,
  IconSearch,
  IconSettings,
  IconSort,
  IconStar,
} from "./Icons";

/* ─────────────────────────── shared bits ─────────────────────────── */

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[266px] shrink-0 rounded-[2.5rem] bg-ink p-[11px] shadow-[0_35px_70px_-30px_rgba(22,25,35,.6)] ring-1 ring-white/10",
        className,
      )}
    >
      <div className="absolute -left-[3px] top-[70px] h-9 w-[3px] rounded-full bg-ink/80" />
      <div className="absolute -right-[3px] top-[92px] h-14 w-[3px] rounded-full bg-ink/80" />
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] bg-[#EDF0F5]">
        {children}
      </div>
      <div className="absolute left-1/2 top-[23px] h-[17px] w-[68px] -translate-x-1/2 rounded-full bg-ink" />
    </div>
  );
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pt-[9px] pb-1 text-[8px] font-bold",
        dark ? "text-white/90" : "text-ink/70",
      )}
    >
      <span>22:19</span>
      <div className="flex items-center gap-1">
        <span className="tracking-tighter">34.3 KB/s</span>
        <svg viewBox="0 0 18 12" className="h-2 w-3" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="0.6" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="0.6" />
          <rect x="10" y="3" width="3" height="9" rx="0.6" />
          <rect x="15" y="0" width="3" height="12" rx="0.6" opacity="0.35" />
        </svg>
        <svg viewBox="0 0 16 12" className="h-2 w-2.5" fill="currentColor" aria-hidden="true">
          <path d="M8 11.2 0.4 3.6A10.6 10.6 0 0 1 15.6 3.6z" opacity="0.9" />
        </svg>
        <svg viewBox="0 0 22 12" className="h-2.5 w-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <rect x="0.7" y="1.7" width="17" height="8.6" rx="2" />
          <rect x="2.7" y="3.7" width="11" height="4.6" rx="1" fill="currentColor" stroke="none" />
          <path d="M19.4 4.6v3.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────── notes list ─────────────────────────── */

type NoteTone = "white" | "pink" | "yellow" | "green" | "blue";

const toneCard: Record<NoteTone, string> = {
  white: "border-slate-200 bg-white",
  pink: "border-[#F2B3CC] bg-[#FCE1EC]",
  yellow: "border-[#EFD687] bg-[#FDF3C7]",
  green: "border-[#A4E2B7] bg-[#DDF6E2]",
  blue: "border-[#A6CCF1] bg-[#DEEEFB]",
};

const toneDot: Record<NoteTone, string> = {
  white: "bg-white ring-slate-300",
  pink: "bg-pink-400 ring-pink-200",
  yellow: "bg-amber-500 ring-amber-200",
  green: "bg-emerald-400 ring-emerald-200",
  blue: "bg-sky-400 ring-sky-200",
};

const NOTES: {
  title: string;
  body: string;
  time: string;
  tone: NoteTone;
  star?: boolean;
}[] = [
  {
    title: "Expense Tracker - October",
    body: "Rent: $1500\nGroceries: $400…",
    time: "1m ago",
    tone: "white",
  },
  {
    title: "Welcome to NoteFlow 📝",
    body: "Your thoughts. Your device.…",
    time: "Yesterday",
    tone: "pink",
    star: true,
  },
  {
    title: "Grocery List",
    body: "- Milk\n- Eggs\n- Bread…",
    time: "Yesterday",
    tone: "yellow",
  },
  {
    title: "Wi-Fi Passwords",
    body: "Home:\nSuperSecretNetwork_5G…",
    time: "Yesterday",
    tone: "yellow",
  },
  {
    title: "Recipes to Try",
    body: "- Garlic Butter Steak Bites\n- Creamy Tuscan Chi…",
    time: "Yesterday",
    tone: "green",
  },
  {
    title: "Favorite Quotes",
    body: "\"The only limit to our realization of tomorrow will be our …",
    time: "Yesterday",
    tone: "blue",
  },
];

function NoteCard({
  title,
  body,
  time,
  tone,
  star,
}: (typeof NOTES)[number]) {
  return (
    <div className={cn("rounded-xl border p-2 shadow-sm", toneCard[tone])}>
      <div className="flex h-3 items-start">
        {star ? (
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-amber-400/90 text-[6px]">
            ★
          </span>
        ) : null}
        <span className="ml-auto text-[9px] leading-none text-slate-400">⋮</span>
      </div>
      <p className="mt-1 text-[9.5px] font-extrabold leading-tight text-ink">{title}</p>
      <p className="mt-0.5 whitespace-pre-line text-[7.5px] leading-snug text-slate-500">
        {body}
      </p>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[7px] font-bold text-slate-400">{time}</span>
        <span className={cn("h-2 w-2 rounded-full ring-2", toneDot[tone])} />
      </div>
    </div>
  );
}

function Chip({ active, children }: { active?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-full border px-2 py-[3px] text-[8px] font-extrabold whitespace-nowrap",
        active
          ? "border-[#E6B54B] bg-[#FCEFCB] text-amber-800"
          : "border-slate-200 bg-white text-slate-500",
      )}
    >
      {children}
    </span>
  );
}

export function NotesListScreen() {
  return (
    <div className="relative flex h-full flex-col">
      <StatusBar />
      <div className="flex items-center gap-2 px-3 pb-1.5">
        <img src="/images/app-icon.png" alt="" className="h-8 w-8 rounded-lg shadow-sm" />
        <div>
          <p className="text-[13px] leading-none font-extrabold text-ink">NoteFlow</p>
          <p className="mt-1 text-[8px] font-semibold text-slate-500">20 notes</p>
        </div>
        <div className="ml-auto flex items-center gap-2 text-slate-600">
          <IconSearch className="h-3.5 w-3.5" />
          <IconGrid className="h-3.5 w-3.5" />
          <IconSort className="h-3.5 w-3.5" />
          <IconSettings className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="no-scrollbar flex gap-1.5 overflow-hidden px-3 pb-2">
        <Chip active>All (20)</Chip>
        <Chip>Pinned</Chip>
        <Chip>Favorites (4)</Chip>
        <Chip>Archived</Chip>
      </div>

      <div className="grid grid-cols-2 items-start gap-2 px-3">
        {NOTES.map((n) => (
          <NoteCard key={n.title} {...n} />
        ))}
      </div>

      <div className="absolute right-3 bottom-[58px] grid h-10 w-10 place-items-center rounded-full bg-[#F59E0B] text-white shadow-lg shadow-amber-500/40">
        <IconPlus className="h-5 w-5" strokeWidth={3} />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-[42px] items-center gap-2 border-t border-slate-200 bg-white px-2.5">
        <div className="grid h-6 w-9 place-items-center rounded bg-slate-100 text-[6px] font-bold text-slate-400">
          AD
        </div>
        <div>
          <p className="text-[7.5px] leading-none font-bold text-blue-600">Nice job!</p>
          <p className="mt-1 text-[6.5px] leading-none text-slate-500">
            This is a 468x60 test ad.
          </p>
        </div>
        <div className="ml-auto grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-red-500 via-green-500 to-blue-500 text-[6px] font-bold text-white">
          G
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── editor ─────────────────────────── */

export function EditorScreen() {
  return (
    <div className="flex h-full flex-col bg-[#FBDCEA]">
      <StatusBar />
      <div className="flex items-center gap-2 px-3 pb-2">
        <span className="text-[13px] leading-none text-ink/70">←</span>
        <div>
          <p className="text-[13px] leading-none font-extrabold text-ink">Edit Note</p>
          <p className="mt-1 text-[7.5px] font-semibold text-slate-500">Saved just now</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <IconPin className="h-3.5 w-3.5 text-ink/60" />
          <IconStar className="h-3.5 w-3.5 text-amber-400" filled />
          <span className="h-3.5 w-3.5 rounded-full ring-2 ring-pink-400 bg-pink-400/60" />
          <span className="text-[11px] leading-none text-ink/60">⋮</span>
        </div>
      </div>

      <div className="flex-1 px-3.5 pt-2">
        <p className="text-[16px] leading-tight font-extrabold text-ink">
          Welcome to NoteFlow 📝
        </p>
        <p className="mt-2.5 text-[9px] leading-[1.6] font-semibold text-slate-700">
          Your thoughts. Your device.
          <br />
          NoteFlow is a premium, privacy-first offline notes app built just for you.
          <br />
          <br />• Real SQLite database: All your notes persist safely on your device.
          <br />• Instant search &amp; sort: Easily organize your thoughts.
          <br />• Colors &amp; Pins: Pin your top thoughts and color-code your notes.
          <br />• Data export: Backup and restore notes anytime as JSON files in Settings.
          <br />
          <br />
          Enjoy distraction-free writing!
        </p>
      </div>

      <div className="flex items-center justify-between px-3.5 py-3 text-[8px] font-bold text-slate-500">
        <span>65 words · 401 characters</span>
        <span className="flex items-center gap-1.5">
          Edited Yesterday
          <span className="h-2.5 w-2.5 rounded-full bg-pink-400 ring-2 ring-pink-200" />
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────── note options sheet ─────────────────────────── */

const SHEET_COLORS = [
  { c: "bg-white ring-slate-300", ad: false },
  { c: "bg-amber-500", ad: false },
  { c: "bg-sky-500", ad: false },
  { c: "bg-emerald-500", ad: false },
  { c: "bg-violet-500", ad: true },
  { c: "bg-pink-500", ad: true },
  { c: "bg-orange-600", ad: true },
  { c: "bg-rose-500", ad: true },
];

const SHEET_OPTIONS = [
  { icon: "📌", label: "Pin to Top" },
  { icon: "⭐", label: "Add to Favorites" },
  { icon: "⧉", label: "Duplicate Note" },
  { icon: "🗂", label: "Archive Note" },
  { icon: "🔗", label: "Share Note" },
];

export function NoteOptionsScreen() {
  return (
    <div className="relative h-full w-full">
      {/* dimmed app behind the sheet */}
      <div className="absolute inset-0 bg-[#EDF0F5]">
        <StatusBar />
        <div className="grid grid-cols-2 gap-2 p-3 opacity-70">
          {NOTES.slice(0, 4).map((n) => (
            <div key={n.title} className={cn("h-20 rounded-xl border", toneCard[n.tone])} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-ink/35" />

      <div className="absolute inset-x-0 bottom-0 rounded-t-[1.6rem] bg-white px-3.5 pt-2.5 pb-5 shadow-[0_-10px_40px_rgba(22,25,35,.25)]">
        <div className="mx-auto h-1 w-9 rounded-full bg-slate-300" />
        <p className="mt-3 text-[12px] leading-tight font-extrabold text-ink">
          Expense Tracker - October
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[7.5px] font-extrabold tracking-[0.14em] text-slate-400">
            NOTE COLOR
          </p>
          <span className="rounded-full bg-[#FCEFCB] px-2 py-[3px] text-[7px] font-extrabold text-amber-800">
            ▶ Last 4 colors require Ad
          </span>
        </div>

        <div className="mt-2.5 flex gap-2">
          {SHEET_COLORS.map((col, i) => (
            <span
              key={i}
              className={cn(
                "relative grid h-7 w-7 place-items-center rounded-full ring-2 ring-white",
                col.c,
                i === 0 && "ring-amber-500",
              )}
            >
              {i === 0 && (
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
              {col.ad && (
                <span className="absolute -right-0.5 -bottom-0.5 grid h-3 w-3 place-items-center rounded-full bg-ink text-[5px] text-white">
                  ▶
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="my-3 h-px bg-slate-100" />

        <ul className="space-y-0.5">
          {SHEET_OPTIONS.map((o) => (
            <li key={o.label} className="flex items-center gap-3 py-[7px]">
              <span className="w-4 text-center text-[12px] leading-none">{o.icon}</span>
              <span className="text-[11.5px] font-bold text-ink">{o.label}</span>
            </li>
          ))}
        </ul>

        <div className="my-2 h-px bg-slate-100" />

        <div className="flex items-center gap-3 py-1">
          <span className="w-4 text-center text-[12px] leading-none">🗑</span>
          <span className="text-[11.5px] font-bold text-red-500">Delete Note</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── floating mini cards ─────────────────────────── */

export function MiniNoteCard({
  className,
  tone = "yellow",
  title,
  lines,
  rotate = -6,
}: {
  className?: string;
  tone?: NoteTone;
  title: string;
  lines: string[];
  rotate?: number;
}) {
  return (
    <div
      className={cn(
        "absolute hidden w-40 rounded-2xl border p-3 shadow-xl shadow-ink/10 lg:block",
        toneCard[tone],
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="text-[11px] leading-tight font-extrabold text-ink">{title}</p>
      <div className="mt-1.5 space-y-1">
        {lines.map((l) => (
          <div key={l} className="h-1.5 rounded-full bg-ink/10" style={{ width: l }} />
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="text-[8px] font-bold text-slate-400">Yesterday</span>
        <span className={cn("h-2 w-2 rounded-full ring-2", toneDot[tone])} />
      </div>
    </div>
  );
}
