import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white flex flex-col gap-3 px-4 py-3 rounded-2xl">
      <div className="flex gap-3">
        <Skeleton className="w-12 h-12 rounded-lg shrink-0" />

        <div className="flex flex-col gap-2 flex-1 py-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-7 w-28" />
        </div>

        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;