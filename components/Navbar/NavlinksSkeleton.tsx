import { Skeleton } from "@/components/ui/skeleton";

const NavLinksSkeleton = () => {
  return (
    <div className="px-4 py-2 gap-5 flex">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="flex items-center gap-1.5 shrink-0">
          <Skeleton className="h-5 w-5 rounded-md" />
          <Skeleton className="h-4 w-16" />
        </Skeleton>
      ))}
    </div>
  );
};

export default NavLinksSkeleton;