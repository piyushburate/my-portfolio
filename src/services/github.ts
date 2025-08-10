import { GithubUserType } from '@/types/github-user';
import axios from 'axios';

const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql';

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`;

export const fetchGithubData = async (
  username: string,
  token: string | undefined,
) : Promise<GithubUserType | null> => {
  const response = await axios.post(
    GITHUB_USER_ENDPOINT,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  );

  const status: number = response.status;
  const responseJson = response.data;

  if (status > 400) {
    return null;
  }

  return responseJson.data.user;
};

export const getGithubUser = async () : Promise<GithubUserType | null> => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_ACCESS_TOKEN;
  if (!username || !token) {
    throw new Error('Invalid user type');
  }
  return await fetchGithubData(username, token);
};