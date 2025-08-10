export interface Contribution {
  date: string;
  contributionCount: number;
  color: string;
}

export interface Month {
  name: string;
  firstDay: string;
  totalWeeks: number;
  contributionsCount: number;
}

export interface Week {
  firstDay: string;
  contributionDays: Contribution[];
}

export interface ContributionCalendar {
  colors: string[];
  totalContributions: number;
  months: Month[];
  weeks: Week[];
}

export interface GithubUserType {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
}