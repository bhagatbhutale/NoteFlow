import { cn } from "../utils/cn";
import { PLAY_STORE_URL } from "../config";
import { IconPlayTriangle } from "./Icons";

type Props = {
  className?: string;
  /** Small line above "Google Play" */
  eyebrow?: string;
};

/** Black Google Play badge-style button. */
export function PlayStoreButton({ className, eyebrow = "Get it on" }: Props) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl bg-ink px-4 py-2.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/25",
        className,
      )}
    >
      <IconPlayTriangle className="h-6 w-6 shrink-0" />
      <span className="leading-none">
        <span className="block text-[9px] font-bold tracking-[0.2em] text-white/55 uppercase">
          {eyebrow}
        </span>
        <span className="mt-1.5 block font-display text-[15px] font-semibold">Google Play</span>
      </span>
    </a>
  );
}
