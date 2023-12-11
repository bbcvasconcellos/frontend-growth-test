import Hero from "./hero/page";
import Features from "./features/page";
import Modules from "./modules/page";
import Cta from "./cta/page";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero /> 
      <Features />
      <Modules />
      <Cta />
      <Footer />
    </main>
  );
}
