import { DataProps } from '@/types/wakatime';
import axios from 'axios';

const API_KEY = process.env.WAKATIME_API_KEY;

const API_ENDPOINT = 'https://wakatime.com/api/v1/users/current';


const getALLTimeSinceToday = async (): Promise<{ text: string, total_seconds: string } | null> => {
  const response = await axios.get(`${API_ENDPOINT}/all_time_since_today`, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
    },
  });

  const status = response.status;

  if (status >= 400) return null;

  const getData = response.data;

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds,
  };

  return data;
};

const getTodayCodeTime = async (): Promise<{
  text: string;
  total_seconds: string;
} | null> => {
  const response = await axios.get(`${API_ENDPOINT}/summaries?range=Today`, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
    },
  });

  if (response.status >= 400) return null;

  const getData = response.data;

  return {
    text: getData?.data?.[0].grand_total?.text,
    total_seconds: getData?.data?.[0].grand_total?.total_seconds,
  };
};

export const getReadStats = async (): Promise<DataProps | null> => {
  const response = await axios.get(`${API_ENDPOINT}/stats/last_7_days`, {
    headers: {
      Authorization: `Basic ${API_KEY}`,
      cache: 'no-cache',
    },
  });

  const status = response.status;

  if (status >= 400) return null;

  const getData = response.data;

  const lastUpdate = getData?.data?.modified_at;
  const startDate = getData?.data?.start;
  const endDate = getData?.data?.end;

  const categories = getData?.data?.categories;

  const bestDay = {
    date: getData?.data?.best_day?.date,
    text: getData?.data?.best_day?.text,
  };
  const humanReadableDailyAverage =
    getData?.data?.human_readable_daily_average_including_other_language;
  const humanReadableTotal =
    getData?.data?.human_readable_total_including_other_language;

  const languages = getData?.data?.languages?.slice(0, 3);
  const editors = getData?.data?.editors;

  const allTimeSinceToday = await getALLTimeSinceToday();

  const todayCodetime = await getTodayCodeTime();

  return {
    lastUpdate,
    startDate,
    endDate,
    categories,
    bestDay,
    humanReadableDailyAverage,
    humanReadableTotal,
    languages,
    editors,
    allTimeSinceToday,
    todayCodetime,
  };
};