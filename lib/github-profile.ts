export const GITHUB_LOGIN = 'bartoszrajchert';
export const GITHUB_PROFILE_CACHE_MS = 10 * 60 * 1000;
export const GITHUB_PROFILE_WEEK_COUNT = 18;

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export interface GithubProfile {
  source: 'live';
  avatarUrl: string;
  name: string;
  login: string;
  bioText: string;
  followersCount: string;
  publicReposCount: string;
  weeks: ContributionDay[][];
  updatedAt: string;
}
