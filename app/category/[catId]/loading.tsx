import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import ProductCardsSkeleton from "@/components/ProductCardsSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryPageSkeleton = () => {
  return (
    <div className="container mx-auto flex flex-col my-10 gap-10">
      <div className="flex gap-3 bg-white items-center rounded-lg px-2 py-8">
        <Skeleton className="h-[50px] w-[50px] rounded-md" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>

      <div className="bg-white rounded-lg px-2 py-8 flex gap-2 justify-end items-center">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-10 w-48 rounded-md" />
      </div>

      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-56" />

        <ProductCardsSkeleton amount={9}/>
      </div>
    </div>
  );
};

export default CategoryPageSkeleton;