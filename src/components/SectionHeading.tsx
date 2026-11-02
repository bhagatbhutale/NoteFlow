import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] uppercase",
          tone === "dark"
            ? "border-white/15 bg-white/5 text-orange-300"
            : "border-ink/10 bg-white text-orange-600",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-[1.15] font-bold sm:text-4xl md:text-[2.6rem]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed sm:text-base",
            tone === "dark" ? "text-white/60" : "text-slate-500",
          )}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
