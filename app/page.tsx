import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import PreviousWorks from "@/components/PreviousWorks";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <About />
      <Services />
      <Process />
      <PreviousWorks />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
  );
}
