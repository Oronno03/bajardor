import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductCardsSkeleton = ({ amount }: { amount: number }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: amount }).map((_, index) => (
        <div key={index}>
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default ProductCardsSkeleton;
