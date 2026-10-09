import AllProducts from "@/components/AllProducts";
import Fallers from "@/components/Fallers";
import Hero from "@/components/Hero";
import Risers from "@/components/Risers";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <div className="w-full h-px bg-primary/20"></div>
      <Hero />
      <Suspense fallback={"Loading..."}>
        <Risers />
        <Fallers />
        <AllProducts />
      </Suspense>
    </div>
  );
}
