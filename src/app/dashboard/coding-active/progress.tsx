import { cn } from "@/lib/utils";

interface ProgressProps {
  data: { name: string; percent?: number };
  className?: string;
}

const Progress = ({ data, className }: ProgressProps) => {
  const { name, percent = 0 } = data;

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="w-24">{name}</div>
      <div className="relative flex h-3 flex-1 justify-center rounded-full">
        <span
          className={cn(
            "absolute left-0 top-0 h-3 rounded-full px-3",
            className
          )}
          style={{
            width: `${percent}%`,
          }}
        >
          &ensp;
        </span>
      </div>
      <div className="w-8 text-right">{percent.toFixed(0)}%</div>
    </div>
  );
};

export default Progress;
