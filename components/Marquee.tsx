import { toBanglaNumber } from "@/lib/toBanglaNumber";
import { IProduct } from "@/type";
import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";

const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const data = await res.json();
  return data;
};

const Marquee = async () => {
  const products = await fetchProducts();

  return (
    <MarqueeText direction="right" className="bg-white">
      <div className="py-2">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="px-4">
            {product.categoryIcon} {product.nameBn}{" "}
            {toBanglaNumber(product.today)}/কেজি{" "}
            <span
              className={`${product.change.dir === "up" ? "text-error" : "text-success"}`}
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {toBanglaNumber(product.change.pct)}%
            </span>
          </Link>
        ))}
      </div>
    </MarqueeText>
  );
};

export default Marquee;
