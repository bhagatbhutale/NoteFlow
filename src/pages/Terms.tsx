import { APP_FULL_NAME, TERMS_EFFECTIVE_DATE } from "../config";
import { LegalPage, type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    title: "1. Acceptance of Terms",
    blocks: [
      {
        kind: "p",
        text: `Welcome to ${APP_FULL_NAME} ("NoteFlow", "we", "our", or "us").`,
      },
      {
        kind: "p",
        text: "By downloading, installing, or using NoteFlow, you agree to these Terms of Service.",
      },
      {
        kind: "p",
        text: "If you do not agree with these terms, please discontinue using the application.",
      },
    ],
  },
  {
    title: "2. About NoteFlow",
    blocks: [
      {
        kind: "p",
        text: "NoteFlow is a note-taking and notepad application designed to help users create, manage, and organize their personal notes.",
      },
      { kind: "p", text: "The application includes features such as:" },
      {
        kind: "list",
        items: [
          "Create, edit, and delete notes.",
          "Pin important notes.",
          "Mark notes as favorites.",
          "Archive notes.",
          "Search notes.",
          "Vertical and grid note layouts.",
          "Customize note card colors.",
          "Import and export notes.",
          "Optional Premium features.",
        ],
      },
      { kind: "p", text: "Features may change or be updated in future versions." },
    ],
  },
  {
    title: "3. User Responsibilities",
    blocks: [
      { kind: "p", text: "You agree to use NoteFlow only for lawful purposes." },
      { kind: "p", text: "You are responsible for:" },
      {
        kind: "list",
        items: [
          "The content you create and store.",
          "Maintaining backups of important notes.",
          "Protecting access to your device.",
          "Ensuring that imported and exported content is legally obtained and used.",
        ],
      },
      {
        kind: "p",
        text: "You must not use the application for unlawful activities or attempt to interfere with its normal operation.",
      },
    ],
  },
  {
    title: "4. Notes and User Content",
    blocks: [
      {
        kind: "p",
        text: "You retain ownership of the notes and content you create using NoteFlow.",
      },
      { kind: "p", text: "We do not claim ownership of your personal notes." },
      { kind: "p", text: "You are responsible for maintaining copies of important information." },
      {
        kind: "callout",
        text: "Because notes are stored locally, accidental deletion, device damage, application removal, or clearing application data may result in permanent data loss.",
      },
    ],
  },
  {
    title: "5. Premium Features and In-App Purchases",
    blocks: [
      {
        kind: "p",
        text: "NoteFlow offers optional Premium features through Google Play Billing.",
      },
      { kind: "p", text: "Depending on the available plans, Premium benefits may include:" },
      {
        kind: "list",
        items: [
          "Removal of advertisements.",
          "Access to Premium note colors.",
          "Additional Premium features where offered.",
        ],
      },
      {
        kind: "p",
        text: "Premium features and benefits will be displayed within the application.",
      },
      { kind: "p", text: "5.1 Subscription Plans" },
      {
        kind: "p",
        text: "Available subscription plans may include monthly and yearly options.",
      },
      {
        kind: "p",
        text: "The exact price, billing period, and applicable terms are displayed on the Google Play purchase screen before payment.",
      },
      { kind: "p", text: "5.2 Automatic Renewal" },
      {
        kind: "p",
        text: "Recurring subscriptions automatically renew at the end of each billing period unless canceled before the renewal date.",
      },
      {
        kind: "p",
        text: "Google Play may charge your payment method according to the subscription terms.",
      },
      { kind: "p", text: "5.3 Subscription Cancellation" },
      {
        kind: "p",
        text: "You can cancel your subscription at any time through Google Play subscription settings.",
      },
      {
        kind: "p",
        text: "Cancellation generally stops future renewals. Your Premium access normally continues until the end of the already-paid billing period.",
      },
      {
        kind: "callout",
        text: "Uninstalling the application does not cancel your subscription.",
      },
      { kind: "p", text: "Manage your subscriptions here:" },
      {
        kind: "p",
        text: "",
        link: {
          href: "https://play.google.com/store/account/subscriptions",
          label: "https://play.google.com/store/account/subscriptions",
        },
      },
      { kind: "p", text: "5.4 Lifetime and One-Time Purchases" },
      {
        kind: "p",
        text: "If NoteFlow offers a Lifetime Premium or another one-time purchase, it is a separate purchase and not a recurring subscription.",
      },
      {
        kind: "p",
        text: "Its benefits and limitations will be explained before purchase.",
      },
      { kind: "p", text: "5.5 Refund Policy" },
      { kind: "p", text: "All purchases are processed through Google Play Billing." },
      {
        kind: "p",
        text: "Refund requests are subject to Google's refund policies and applicable consumer protection laws.",
      },
      { kind: "p", text: "For eligible purchases, you may request a refund through Google Play." },
      { kind: "p", text: "Google Play Help:" },
      {
        kind: "p",
        text: "",
        link: {
          href: "https://support.google.com/googleplay/answer/2479637",
          label: "https://support.google.com/googleplay/answer/2479637",
        },
      },
      { kind: "p", text: "5.6 Premium Access" },
      {
        kind: "p",
        text: "Premium access is associated with the Google Play purchase and the applicable purchase entitlement.",
      },
      {
        kind: "p",
        text: "You may need to use the same Google account used for the original purchase to restore eligible purchases.",
      },
      {
        kind: "p",
        text: "Premium access may be affected by refunded, revoked, expired, or otherwise invalid purchases.",
      },
    ],
  },
  {
    title: "6. Advertisements",
    blocks: [
      {
        kind: "p",
        text: "The free version of NoteFlow may display advertisements through Google AdMob.",
      },
      {
        kind: "p",
        text: "Premium purchases that include ad removal provide an ad-free experience as described on the purchase screen.",
      },
      {
        kind: "p",
        text: "Advertisements are provided by third-party advertising services and may be subject to their own terms and privacy policies.",
      },
    ],
  },
  {
    title: "7. Intellectual Property",
    blocks: [
      {
        kind: "p",
        text: "All application software, branding, logos, visual designs, and original materials associated with NoteFlow belong to the developer or their respective owners.",
      },
      {
        kind: "p",
        text: "You may not copy, modify, distribute, reverse engineer, or commercially exploit the application without appropriate authorization, except where permitted by applicable law.",
      },
    ],
  },
  {
    title: "8. Application Availability and Updates",
    blocks: [
      {
        kind: "p",
        text: "We may update, improve, modify, or discontinue certain features of NoteFlow.",
      },
      {
        kind: "p",
        text: "We do not guarantee uninterrupted availability or compatibility with every device or operating system.",
      },
    ],
  },
  {
    title: "9. Limitation of Liability",
    blocks: [
      {
        kind: "p",
        text: `NoteFlow is provided on an "as is" and "as available" basis to the extent permitted by applicable law.`,
      },
      { kind: "p", text: "We are not responsible for:" },
      {
        kind: "list",
        items: [
          "Loss of locally stored notes caused by device failure or accidental deletion.",
          "Loss of data resulting from clearing application storage or uninstalling the app.",
          "Issues caused by third-party services.",
          "Temporary application interruptions or compatibility issues.",
        ],
      },
      {
        kind: "p",
        text: "Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.",
      },
    ],
  },
  {
    title: "10. Termination",
    blocks: [
      {
        kind: "p",
        text: "You may stop using NoteFlow at any time by uninstalling the application.",
      },
      {
        kind: "p",
        text: "We reserve the right to restrict access to the application where necessary to address misuse, security issues, or legal requirements.",
      },
      {
        kind: "callout",
        text: "Any active subscription must be canceled separately through Google Play.",
      },
    ],
  },
  {
    title: "11. Changes to These Terms",
    blocks: [
      { kind: "p", text: "We may update these Terms of Service when necessary." },
      {
        kind: "p",
        text: "Updated terms will be published on this page with a revised effective date.",
      },
      {
        kind: "p",
        text: "Continued use of NoteFlow after changes take effect constitutes acceptance of the updated terms, to the extent permitted by applicable law.",
      },
    ],
  },
  {
    title: "12. Governing Law",
    blocks: [
      {
        kind: "p",
        text: "These Terms shall be governed by the applicable laws of India, subject to mandatory consumer protection laws and other applicable legal requirements.",
      },
    ],
  },
  {
    title: "13. Contact Us",
    blocks: [
      {
        kind: "p",
        text: "For questions, concerns, or support regarding NoteFlow, contact:",
      },
      { kind: "contact" },
    ],
  },
];

export function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro={`These Terms of Service govern your use of ${APP_FULL_NAME}. Last updated ${TERMS_EFFECTIVE_DATE}.`}
      sections={SECTIONS}
    />
  );
}
