import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { DataProps } from "@/types/wakatime";

interface OverviewProps {
  data: DataProps | null;
}

export const Overview = ({ data }: OverviewProps) => {
  const dailyTotal = data?.humanReadableTotal || "N/A";
  const dailyAverage = data?.humanReadableDailyAverage || "N/A";
  const bestDayText = data?.bestDay?.text || "N/A";
  const bestDayDate = data?.bestDay?.date;
  const allTimeSinceToday = data?.allTimeSinceToday?.text || "N/A";
  const startDate = data?.startDate
    ? formatDate(data.startDate)
    : "";
  const endDate = data?.endDate ? formatDate(data.endDate) : "";
  const bestDay = bestDayDate
    ? `${formatDate(bestDayDate)} (${bestDayText})`
    : "N/A";
  const today = data?.todayCodetime?.text ?? 'N/A';

  return (
    <div className="mb-1 grid gap-3 py-2 md:grid-cols-2">
      <OverviewItem label="Range" value={`${startDate} - ${endDate}`} />
      <OverviewItem label="Today&apos;s Coding Time" value={today} />
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
