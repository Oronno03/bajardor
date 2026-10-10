import { Skeleton } from "@/components/ui/skeleton";

const MarqueeSkeleton = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="py-2 flex items-center gap-5 whitespace-nowrap">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="px-4 flex items-center gap-2 shrink-0">
            <Skeleton className="h-4 w-4 rounded-sm" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-12 rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSkeleton;