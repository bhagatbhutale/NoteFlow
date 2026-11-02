import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconSearch = (p: Props) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </Svg>
);

export const IconGrid = (p: Props) => (
  <Svg {...p}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </Svg>
);

export const IconSort = (p: Props) => (
  <Svg {...p}>
    <path d="M4 6h16" />
    <path d="M4 12h10" />
    <path d="M4 18h6" />
  </Svg>
);

export const IconSettings = (p: Props) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
);

export const IconMenu = (p: Props) => (
  <Svg {...p}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Svg>
);

export const IconX = (p: Props) => (
  <Svg {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Svg>
);

export const IconStar = ({ filled, ...p }: Props & { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45L2.6 9.45l6.5-.95z" />
  </svg>
);

export const IconPin = (p: Props) => (
  <Svg {...p}>
    <path d="M9 3h6l-1 6 3.5 3.5V15H6.5v-2.5L10 9z" />
    <path d="M12 15v6" />
  </Svg>
);

export const IconPlus = (p: Props) => (
  <Svg {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Svg>
);

export const IconTrash = (p: Props) => (
  <Svg {...p}>
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M10 6V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
  </Svg>
);

export const IconCopy = (p: Props) => (
  <Svg {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Svg>
);

export const IconDownload = (p: Props) => (
  <Svg {...p}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </Svg>
);

export const IconShare = (p: Props) => (
  <Svg {...p}>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="m16 6-4-4-4 4" />
    <path d="M12 2v13" />
  </Svg>
);

export const IconArrowRight = (p: Props) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const IconChevronDown = (p: Props) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const IconCheck = (p: Props) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const IconArrowUp = (p: Props) => (
  <Svg {...p}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </Svg>
);

export const IconMail = (p: Props) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2.5 6 9.5 7 9.5-7" />
  </Svg>
);

export const IconShield = (p: Props) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5.5L12 2.5 4 5.5V12c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconRocket = (p: Props) => (
  <Svg {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </Svg>
);

/** Google Play style triangle (single colour, used on the black badge). */
export function IconPlayTriangle(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M5 3.2v17.6c0 .9 1 1.45 1.7.92l14.6-8.8c.7-.42.7-1.42 0-1.84L6.7 2.28C6 1.75 5 2.3 5 3.2z" />
    </svg>
  );
}

/** Small "Product Hunt" style mark. */
export function IconProductHunt(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M13.6 6.5h-3.2v5.2h3.2a2.6 2.6 0 0 0 0-5.2z" />
      <path
        d="M12 2.6a9.4 9.4 0 1 0 0 18.8 9.4 9.4 0 0 0 0-18.8zm1.6 12.7h-4.8V6.5h4.4a4.3 4.3 0 0 1 0 8.6z"
        opacity="0.35"
      />
      <path d="M10.4 8.7h3.1a2.9 2.9 0 0 1 0 5.8h-3.1z" />
    </svg>
  );
}

/** X / Twitter mark. */
export function IconXSocial(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.4l-4.6-6-5.3 6H2.6l7.2-8.2L2 2h6.5l4.3 5.7zM17.4 20.2h1.7L7.7 3.7H5.9z" />
    </svg>
  );
}

/** Reddit mark. */
export function IconReddit(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M22 11.6c0-1.3-1-2.3-2.3-2.3-.6 0-1.1.2-1.5.6-1.5-1-3.5-1.6-5.7-1.7l1.1-3.4 3 .7a1.7 1.7 0 1 0 .3-1.4l-3.7-.8a.6.6 0 0 0-.7.4l-1.4 4.3c-2.5.1-4.7.7-6.3 1.8a2.2 2.2 0 0 0-3.8 1.6c0 .8.4 1.4 1 1.8v.5c0 3.4 3.9 6.1 8.7 6.1s8.7-2.7 8.7-6.1v-.5c.6-.4 1-1 1-1.8zM7.6 12.9a1.3 1.3 0 1 1 1.3-1.3 1.3 1.3 0 0 1-1.3 1.3zm8.3 3.6a5.4 5.4 0 0 1-3.9 1.2 5.4 5.4 0 0 1-3.9-1.2.5.5 0 0 1 .7-.7 4.5 4.5 0 0 0 3.2.9 4.5 4.5 0 0 0 3.2-.9.5.5 0 0 1 .7.7zm-.3-2.3a1.3 1.3 0 1 1 1.3-1.3 1.3 1.3 0 0 1-1.3 1.3z" />
    </svg>
  );
}

/** WhatsApp mark. */
export function IconWhatsApp(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2.2a9.6 9.6 0 0 0-8.3 14.4L2.2 22l5.5-1.4A9.6 9.6 0 1 0 12 2.2zm0 1.8a7.8 7.8 0 1 1-4.1 14.4l-.4-.2-3 .8.8-2.9-.2-.4A7.8 7.8 0 0 1 12 4zm4.4 9.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.6-.7c.2-.2.1-.4 0-.6l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.8.8-1 1.9-.6 3a11 11 0 0 0 5.5 5.6c1.2.5 2.3.4 3.1-.2.3-.3.5-.6.5-1v-.5c0-.2-.1-.4-.2-.5z" />
    </svg>
  );
}
