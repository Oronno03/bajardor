import AllProducts from "@/components/AllProducts";
import Fallers from "@/components/Fallers";
import Hero from "@/components/Hero";
import ProductCardsSkeleton from "@/components/ProductCardsSkeleton";
import Risers from "@/components/Risers";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <div className="w-full h-px bg-primary/20"></div>
      <Hero />
      <Suspense fallback={<ProductCardsSkeleton amount={9}/>}>
        <Risers />
      </Suspense>
      <Suspense fallback={<ProductCardsSkeleton amount={9}/>}>
        <Fallers />
      </Suspense>
      <Suspense fallback={<ProductCardsSkeleton amount={9}/>}>
        <AllProducts />
      </Suspense>
      
    </div>
  );
}
