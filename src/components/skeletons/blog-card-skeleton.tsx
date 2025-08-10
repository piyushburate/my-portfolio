import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function BlogCardSkeleton({ featured = false }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border bg-card shadow-sm p-2 min-w-[300px]", featured && "p-4"
      )}
    >
      {/* Image Placeholder */}
      <div className={cn("h-44 w-full", featured && "h-56")} />

      <div className="p-4 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-4 w-24" /> {/* Date */}
          <Skeleton className="h-4 w-16" /> {/* Views */}
        </div>
      </div>
    </div>
  );
}
