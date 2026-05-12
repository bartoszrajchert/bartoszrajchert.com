import {
  GITHUB_LOGIN,
  GITHUB_PROFILE_WEEK_COUNT,
  type ContributionDay,
  type ContributionLevel,
  type GithubProfile,
} from '@/lib/github-profile';
import { graphql } from '@octokit/graphql';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const cacheHeaders = {
  'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=86400',
};

const errorHeaders = {
  'Cache-Control': 'no-store',
};

const contributionLevelMap: Record<string, ContributionLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const githubProfileQuery = `
  query GithubProfile($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      avatarUrl(size: 80)
      bio
      followers {
        totalCount
      }
      login
      name
      repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`;

interface GithubContributionDay {
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

interface GithubContributionWeek {
  contributionDays: GithubContributionDay[];
}

interface GithubProfileQueryResponse {
  user?: {
    avatarUrl?: string;
    bio?: string | null;
    followers?: {
      totalCount?: number;
    };
    login?: string;
    name?: string | null;
    repositories?: {
      totalCount?: number;
    };
    contributionsCollection?: {
      contributionCalendar?: {
        weeks?: GithubContributionWeek[];
      };
    };
  };
}

function getContributionRange() {
  const now = new Date();
  const end = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      23,
      59,
      59,
    ),
  );
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  );

  start.setUTCDate(
    start.getUTCDate() -
      start.getUTCDay() -
      (GITHUB_PROFILE_WEEK_COUNT - 1) * 7,
  );

  return {
    from: start.toISOString(),
    to: end.toISOString(),
  };
}

function normalizeText(value: string | null | undefined, fallback: string) {
  return value?.trim() || fallback;
}

function normalizeCount(value: number | undefined) {
  return typeof value === 'number'
    ? new Intl.NumberFormat('en-US').format(value)
    : '';
}

function normalizeWeeks(weeks: GithubContributionWeek[] | undefined) {
  return (weeks ?? []).slice(-GITHUB_PROFILE_WEEK_COUNT).map((week) =>
    week.contributionDays.map((day) => {
      const contributionDay: ContributionDay = {
        date: day.date,
        count: day.contributionCount,
        level: contributionLevelMap[day.contributionLevel] ?? 0,
      };

      return contributionDay;
    }),
  );
}

function errorResponse() {
  return NextResponse.json(
    { error: 'GitHub profile is unavailable.' },
    {
      headers: errorHeaders,
      status: 503,
    },
  );
}

async function fetchGithubProfile(token: string): Promise<GithubProfile> {
  const range = getContributionRange();
  const graphqlWithAuth = graphql.defaults({
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': 'bartoszrajchert-website',
    },
  });

  const payload = await graphqlWithAuth<GithubProfileQueryResponse>(
    githubProfileQuery,
    {
      login: GITHUB_LOGIN,
      from: range.from,
      to: range.to,
    },
  );
  const user = payload.user;

  if (!user) {
    throw new Error('GitHub profile response was invalid.');
  }

  const weeks = normalizeWeeks(
    user.contributionsCollection?.contributionCalendar?.weeks,
  );

  if (!weeks.length) {
    throw new Error('GitHub contribution data was unavailable.');
  }

  return {
    source: 'live',
    avatarUrl: normalizeText(user.avatarUrl, ''),
    name: normalizeText(user.name, normalizeText(user.login, GITHUB_LOGIN)),
    login: normalizeText(user.login, GITHUB_LOGIN),
    bioText: normalizeText(user.bio, ''),
    followersCount: normalizeCount(user.followers?.totalCount),
    publicReposCount: normalizeCount(user.repositories?.totalCount),
    weeks,
    updatedAt: new Date().toISOString(),
  };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return errorResponse();
  }

  try {
    const profile = await fetchGithubProfile(token);

    return NextResponse.json(profile, { headers: cacheHeaders });
  } catch {
    return errorResponse();
  }
}
