export interface ItemProps {
  name: string;
  hours: number;
  minutes: number;
}

export interface DataProps {
  lastUpdate: string,
  startDate: string,
  endDate: string,
  categories: ItemProps[],
  bestDay: { date: string, text: string },
  humanReadableDailyAverage: string,
  humanReadableTotal: string,
  languages: ItemProps[],
  editors: ItemProps[],
  allTimeSinceToday: {
    text: string;
    total_seconds: string;
  } | null,
  todayCodetime: {
    text: string;
    total_seconds: string;
  } | null,
};