const ITEMS = [
  "Pinned notes",
  "Favorites",
  "Archive",
  "10 note colors",
  "Instant search",
  "Smart sorting",
  "JSON backup",
  "Offline first",
  "SQLite storage",
  "No account",
  "Word & character count",
  "Privacy by design",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-white py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="flex items-center gap-8 font-display text-sm font-semibold tracking-wide text-ink/45 uppercase"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
