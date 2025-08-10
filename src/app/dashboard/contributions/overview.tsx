import { Card } from "@/components/ui/card";
import { ContributionCalendar } from "@/types/github-user";

export const Overview = ({ data }: { data: ContributionCalendar }) => {
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) || 0;
  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount
      )
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributions / totalContributionList.length;

  return (
    <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
      <OverviewItem label="Total" value={totalContributions} />
      <OverviewItem label="This Week" value={totalThisWeekContribution} />
      <OverviewItem label="Best Day" value={bestContribution} />
      <OverviewItem
        label="Average"
        value={parseFloat(Math.abs(averageContribution).toPrecision(5))}
        unit="/ day"
      />
    </div>
  );
};

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = "" }: OverviewItemProps) => (
  <Card className="flex flex-col gap-2 self-center rounded-xl border px-4 py-3">
    <span className="text-sm">{label}</span>
    <div>
      <span className="text-xl font-medium text-green-600 lg:text-2xl">
        {value}
      </span>
      {unit && <span className="text-sm"> {unit}</span>}
    </div>
  </Card>
);
