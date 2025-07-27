import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

interface OverviewProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}

export const Overview = ({ data }: OverviewProps) => {
  const dailyTotal = data?.human_readable_total || "N/A";
  const dailyAverage = data?.human_readable_daily_average || "N/A";
  const bestDayText = data?.best_day?.text || "N/A";
  const bestDayDate = data?.best_day?.date;
  const allTimeSinceToday = data?.all_time_since_today?.text || "N/A";
  const startDate = data?.start_date ? formatDate(data.start_date) : "";
  const endDate = data?.end_date ? formatDate(data.end_date) : "";
  const bestDay = bestDayDate
    ? `${formatDate(bestDayDate)} (${bestDayText})`
    : "N/A";

  return (
    <div className="mb-1 grid gap-3 py-2 md:grid-cols-2">
      <OverviewItem label="Start Date" value={startDate} />
      <OverviewItem label="End Date" value={endDate} />
      <OverviewItem label="Daily Coding Average" value={dailyAverage} />
      <OverviewItem label="This Week Coding Time" value={dailyTotal} />
      <OverviewItem label="Best Day Coding Time" value={bestDay} />
      <OverviewItem label="All Time Since Today" value={allTimeSinceToday} />
    </div>
  );
};

const OverviewItem = ({ label, value }: { label: string; value: string }) => (
  <Card className="flex flex-col gap-2 rounded-xl border px-4 py-3 sm:col-span-1">
    <span className="text-sm dark:text-neutral-400">{label}</span>
    <span>{value || "-"}</span>
  </Card>
);
