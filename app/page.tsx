import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Dashboards from "@/components/Dashboards";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import DownloadCta from "@/components/DownloadCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Dashboards />
      <Pricing />
      <Faq />
      <DownloadCta />
      <Footer />
    </main>
  );
}
