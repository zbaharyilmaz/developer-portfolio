import Hero from "@/components/Hero";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
