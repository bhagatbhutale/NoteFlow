import { useEffect, useState } from "react";
import { CtaBand } from "./components/CtaBand";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Launch } from "./components/Launch";
import { Marquee } from "./components/Marquee";
import { Nav } from "./components/Nav";
import { Privacy } from "./components/Privacy";
import { Showcase } from "./components/Showcase";
import { Story } from "./components/Story";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Terms } from "./pages/Terms";

type Route = "home" | "privacy" | "terms";

function readRoute(): Route {
  if (typeof window === "undefined") return "home";
  const hash = window.location.hash;
  if (hash.startsWith("#/privacy")) return "privacy";
  if (hash.startsWith("#/terms")) return "terms";
  return "home";
}

function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(readRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    if (route !== "home") window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      <Nav />
      {route === "home" && (
        <main>
          <Hero />
          <Marquee />
          <Features />
          <Showcase />
          <Story />
          <Privacy />
          <Launch />
          <Faq />
          <CtaBand />
        </main>
      )}
      {route === "privacy" && (
        <main>
          <PrivacyPolicy />
        </main>
      )}
      {route === "terms" && (
        <main>
          <Terms />
        </main>
      )}
      <Footer />
    </div>
  );
}
