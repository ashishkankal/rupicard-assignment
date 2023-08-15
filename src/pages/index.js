import Image from "next/image";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/hero";
import Feature1 from "@/components/feature1";
import { Feature2 } from "@/components/feature2";
import { Feature3 } from "@/components/feature3";
import { Feature4 } from "@/components/feature4";
import { Disclaimer } from "@/components/disclaimer";
import { CTA } from "@/components/cta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <MainNav />
      <HeroSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Disclaimer />
      <CTA />
    </main>
  );
}
