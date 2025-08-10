import { Skeleton } from "@/components/ui/skeleton";

export function CodingStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Top 6 cards */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg border bg-card p-4 flex flex-col gap-2"
        >
          <Skeleton className="h-4 w-28" /> {/* Label */}
          <Skeleton className="h-6 w-40" /> {/* Value */}
        </div>
      ))}

      {/* Languages */}
      <div className="rounded-lg border bg-card p-4 space-y-3 col-span-1">
        <Skeleton className="h-4 w-24" /> {/* Title */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-20" /> {/* Language name */}
            <Skeleton className="h-3 w-32 rounded-full" /> {/* Bar */}
            <Skeleton className="h-4 w-10" /> {/* % */}
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="rounded-lg border bg-card p-4 space-y-3 col-span-1">
        <Skeleton className="h-4 w-24" /> {/* Title */}
        {Array.from({ length: 1 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-4 w-20" /> {/* Category name */}
            <Skeleton className="h-3 w-32 rounded-full" /> {/* Bar */}
            <Skeleton className="h-4 w-10" /> {/* % */}
          </div>
        ))}
      </div>
    </div>
  );
}
