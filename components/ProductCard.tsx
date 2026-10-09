import { toBanglaNumber } from "@/lib/toBanglaNumber";
import { IProduct } from "@/type";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link href={`/product/${product.id}`} className="bg-white flex flex-col gap-3 px-4 py-3 rounded-2xl hover:scale-105 transition-all">
      <div className="flex gap-3">
        <p className="bg-base-300 p-2 rounded-lg w-max">{product.image}</p>
        <div>
          <h1 className="font-bold text-[16px]">{product.nameBn}</h1>
          <p className="text-[12px]">প্রতি কেজি</p>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-[12px]">আজকের দাম</p>
          <h1><span className="font-extrabold text-[20px]">{toBanglaNumber(product.today)}</span> টাকা</h1>
        </div>
        <p
          className={`${product.change.dir === "up" ? "text-error" : "text-success"} bg-base-300 px-2 py-1 rounded-lg`}
        >
          {product.change.dir === "up" ? "▲" : "▼"}{" "}
          {toBanglaNumber(product.change.pct)} %
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
