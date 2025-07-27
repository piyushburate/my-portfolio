export interface ItemProps {
  name: string;
  hours: number;
  minutes: number;
}

export interface DataProps {
  last_update: Date,
  start_date: Date,
  end_date: Date,
  categories: ItemProps[],
  best_day: { date: Date, text: string },
  human_readable_daily_average : string,
  human_readable_total: string,
  languages: ItemProps[],
  editors: ItemProps[],
};