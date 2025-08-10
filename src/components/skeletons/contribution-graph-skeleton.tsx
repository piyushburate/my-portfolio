import { Skeleton } from "@/components/ui/skeleton";

export function ContributionGraphSkeleton() {
  return (
    <div className="space-y-4">
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card p-4 flex flex-col gap-2"
          >
            <Skeleton className="h-4 w-20" /> {/* Label */}
            <Skeleton className="h-6 w-12" /> {/* Value */}
          </div>
        ))}
      </div>

      {/* Contribution grid */}
      <div className="flex flex-col gap-2">
        {/* Month labels */}
        <div className="flex gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-8" />
          ))}
        </div>

        {/* Squares */}
        <div className="flex justify-start gap-[3.5px] overflow-hidden">
          {Array.from({ length: 52 }).map((_, index) => (
            <div key={index}>
              {Array.from({ length: 7 }).map((_, index2) => {
                return (
                  <span
                    key={index2}
                    className="my-[2px] block h-[12px] w-[12px] rounded-xs bg-muted"
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 overflow-hidden">
        <Skeleton className="h-4 w-10" /> {/* Less label */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="size-[10px] rounded-xs" />
          ))}
        </div>
        <Skeleton className="h-4 w-12" /> {/* More label */}
      </div>
    </div>
  );
}
