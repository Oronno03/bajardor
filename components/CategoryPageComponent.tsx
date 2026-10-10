"use client";
import { ICategory, IProduct } from "@/type";
import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

interface Props {
  catData: ICategory;
  products: IProduct[];
}

const CategoryPageComponent = ({ catData, products }: Props) => {
  const [sortMode, setSortMode] = useState("default");
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMode(e.target.value);
  };

  const sortedProds = useMemo(() => {
    if (sortMode === "descending") {
      return products.toSorted((a, b) => b.today - a.today);
    }
    if (sortMode === "ascending") {
      return products.toSorted((a, b) => a.today - b.today);
    }
    return products;
  }, [sortMode, products]);

  return (
    <div className="container mx-auto flex flex-col my-10 gap-10">
      <div className="flex gap-3 bg-white items-center rounded-lg px-2 py-8">
        <h1 className="text-[50px]">{catData.icon}</h1>
        <div>
          <h1 className="font-bold text-[24px]">{catData.nameBn}</h1>
          <p className="text-base-content text-[12px]">
            {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg px-2 py-8 flex gap-2 justify-end items-center">
        <p>সাজান</p>
        <select
          name="sort"
          id="sort"
          className="border border-solid border-base-300 px-4 py-2 rounded-md"
          onChange={onChange}
        >
          <option value="default">ডিফল্ট</option>
          <option value="ascending">দাম: কম থেকে বেশি</option>
          <option value="descending">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <h1>মোট {products.length}টি পণ্য দেখানো হচ্ছে</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          {sortedProds.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;
