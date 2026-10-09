import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-px bg-primary/20"></div>
      <Suspense fallback={"Loading..."}>
        <Marquee />
      </Suspense>
      <Hero />
    </div>
  );
}
