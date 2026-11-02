import { APP_FULL_NAME, PRIVACY_EFFECTIVE_DATE } from "../config";
import { LegalPage, type LegalSection } from "../components/LegalPage";

const SECTIONS: LegalSection[] = [
  {
    title: "1. Introduction",
    blocks: [
      {
        kind: "p",
        text: `Welcome to ${APP_FULL_NAME} ("NoteFlow", "we", "our", or "us").`,
      },
      {
        kind: "p",
        text: "We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how our application handles information when you use NoteFlow, including its free features, Premium features, advertisements, and in-app purchases.",
      },
      {
        kind: "p",
        text: "By using NoteFlow, you agree to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    title: "2. Information We Collect",
    blocks: [
      {
        kind: "p",
        text: "2.1 Notes and User Content",
      },
      {
        kind: "p",
        text: "NoteFlow allows users to create, edit, delete, pin, favorite, archive, search, customize, import, and export notes.",
      },
      {
        kind: "p",
        text: "Your notes and related information, including note colors and preferences, are stored locally on your device, unless a feature or third-party service explicitly indicates otherwise.",
      },
      {
        kind: "p",
        text: "We do not operate a cloud-based notes synchronization service as part of the standard local note-taking functionality.",
      },
      { kind: "p", text: "2.2 Device and Advertising Information" },
      { kind: "p", text: "Our application may use Google AdMob to display advertisements." },
      { kind: "p", text: "Google AdMob may collect certain information, including:" },
      {
        kind: "list",
        items: [
          "Advertising ID",
          "Device information",
          "IP address",
          "App interaction and advertising data",
          "Approximate location derived from IP address, where applicable",
        ],
      },
      {
        kind: "p",
        text: "This information may be used for advertising, ad measurement, fraud prevention, and related purposes, subject to Google's policies and applicable consent requirements.",
      },
      { kind: "p", text: "2.3 Payment and Subscription Information" },
      {
        kind: "p",
        text: "NoteFlow offers optional Premium features through Google Play Billing.",
      },
      { kind: "p", text: "When you purchase a Premium subscription or one-time Premium product:" },
      {
        kind: "list",
        items: [
          "Payments are processed securely by Google Play.",
          "We do not directly collect or store your credit card, debit card, UPI PIN, or banking passwords.",
          "Google Play manages payment processing and purchase records.",
          "We may receive purchase-related information, such as product ID, purchase status, transaction token, and subscription entitlement status, to verify and provide Premium access.",
        ],
      },
      {
        kind: "p",
        text: "Your payment information is handled according to Google's applicable policies.",
      },
    ],
  },
  {
    title: "3. How We Use Information",
    blocks: [
      { kind: "p", text: "Information is used to:" },
      {
        kind: "list",
        items: [
          "Provide note creation and management features.",
          "Save and organize notes.",
          "Provide Premium functionality.",
          "Verify purchases and subscription status.",
          "Display advertisements in the free version.",
          "Improve application stability and performance.",
          "Prevent fraudulent purchases and misuse.",
        ],
      },
    ],
  },
  {
    title: "4. Data Storage and Security",
    blocks: [
      { kind: "p", text: "NoteFlow primarily stores notes locally on your device." },
      { kind: "p", text: "We do not sell your personal information or your notes." },
      {
        kind: "p",
        text: "We take reasonable steps to protect information handled by our application. However, no electronic storage method can guarantee absolute security.",
      },
      { kind: "p", text: "Users are responsible for maintaining backups of important notes." },
    ],
  },
  {
    title: "5. Import and Export",
    blocks: [
      { kind: "p", text: "NoteFlow provides note import and export functionality." },
      {
        kind: "p",
        text: "When exporting notes, the selected data may be saved to a location chosen by you on your device.",
      },
      {
        kind: "p",
        text: "When importing notes, the selected files are accessed for the purpose of importing their contents into the application.",
      },
      {
        kind: "p",
        text: "You are responsible for choosing and managing the files you import and export.",
      },
    ],
  },
  {
    title: "6. Premium Subscription and Payments",
    blocks: [
      {
        kind: "p",
        text: "NoteFlow offers optional Premium features through Google Play Billing.",
      },
      { kind: "p", text: "Depending on the available purchase options, Premium may include:" },
      {
        kind: "list",
        items: [
          "Ad-free experience.",
          "Access to Premium note colors.",
          "Additional Premium functionality where offered.",
        ],
      },
      {
        kind: "p",
        text: "Subscription prices, billing periods, and available offers are displayed on the purchase screen before you complete a transaction.",
      },
      {
        kind: "p",
        text: "Recurring subscriptions may automatically renew unless canceled before the next renewal date.",
      },
      { kind: "p", text: "You can manage or cancel your subscription through Google Play." },
      {
        kind: "callout",
        text: "Uninstalling NoteFlow does not automatically cancel an active subscription.",
      },
      {
        kind: "p",
        text: "One-time purchases, including lifetime access where offered, are different from recurring subscriptions and are subject to their displayed purchase terms.",
      },
    ],
  },
  {
    title: "7. Third-Party Services",
    blocks: [
      { kind: "p", text: "NoteFlow may integrate the following third-party services:" },
      {
        kind: "list",
        items: [
          "Google AdMob: Used to display and measure advertisements.",
          "Google Play Billing: Used to process in-app purchases and subscriptions.",
        ],
      },
      {
        kind: "p",
        text: "AdMob privacy policy:",
        link: { href: "https://policies.google.com/privacy", label: "https://policies.google.com/privacy" },
      },
      {
        kind: "p",
        text: "Google Play terms:",
        link: {
          href: "https://play.google.com/about/play-terms/",
          label: "https://play.google.com/about/play-terms/",
        },
      },
      {
        kind: "p",
        text: "These third-party services may process information according to their respective privacy policies.",
      },
    ],
  },
  {
    title: "8. Data Sharing",
    blocks: [
      { kind: "p", text: "We do not sell or rent users' personal information." },
      {
        kind: "p",
        text: "Information may be processed by third-party service providers when necessary to provide advertising, payment processing, purchase verification, and related functionality.",
      },
      {
        kind: "p",
        text: "We may also disclose information when required by applicable law.",
      },
    ],
  },
  {
    title: "9. Data Retention and Deletion",
    blocks: [
      {
        kind: "p",
        text: "Notes stored locally remain on your device until you delete them or remove the application's data.",
      },
      {
        kind: "p",
        text: "Uninstalling the application or clearing its data may permanently remove locally stored notes.",
      },
      { kind: "p", text: "Exported files may remain on your device until you delete them." },
      {
        kind: "p",
        text: "Purchase records may be retained by Google Play according to Google's policies and applicable requirements.",
      },
      {
        kind: "callout",
        text: "Deleting the application does not automatically cancel an active subscription.",
      },
    ],
  },
  {
    title: "10. Children's Privacy",
    blocks: [
      {
        kind: "p",
        text: "NoteFlow is not specifically designed to collect personal information from children.",
      },
      { kind: "p", text: "We do not knowingly collect personal information from children." },
    ],
  },
  {
    title: "11. Your Privacy Choices",
    blocks: [
      { kind: "p", text: "You can:" },
      {
        kind: "list",
        items: [
          "Delete notes whenever you choose.",
          "Export important notes for backup.",
          "Manage advertising preferences through available Google settings.",
          "Cancel subscriptions through Google Play.",
          "Uninstall the application at any time.",
        ],
      },
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: "We may update this Privacy Policy from time to time to reflect changes in our application, services, or legal requirements.",
      },
      {
        kind: "p",
        text: "Any updated version will be published on this page with a revised effective date.",
      },
    ],
  },
  {
    title: "13. Contact Us",
    blocks: [
      {
        kind: "p",
        text: "If you have questions about this Privacy Policy or how NoteFlow handles information, contact us:",
      },
      { kind: "contact" },
    ],
  },
];

export function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`This Privacy Policy applies to ${APP_FULL_NAME} and explains how your information is handled. Last updated ${PRIVACY_EFFECTIVE_DATE}.`}
      sections={SECTIONS}
    />
  );
}
