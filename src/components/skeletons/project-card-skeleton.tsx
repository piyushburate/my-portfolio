import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border bg-card shadow-sm">
      {/* Image Placeholder */}
      <Skeleton className="h-48 w-full" />

      <div className="p-4 space-y-4">

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
        </div>

        {/* Tech Stacks */}
        <div className="flex items-center gap-2">
          <Skeleton className="size-6" />
          <Skeleton className="size-6" />
          <Skeleton className="size-6" />
        </div>
      </div>
    </div>
  );
}
