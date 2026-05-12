'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  GITHUB_PROFILE_CACHE_MS,
  type ContributionDay,
  type ContributionLevel,
  type GithubProfile,
} from '@/lib/github-profile';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

interface GitHubHoverCardProps {
  children: ReactNode;
  className?: string;
}

interface MonthLabel {
  label: string;
  left: string;
}

interface ContributionTooltip {
  label: string;
  left: number;
  top: number;
}

type ProfileStatus = 'idle' | 'loading' | 'loaded' | 'error';

let cachedProfile: GithubProfile | null = null;
let cachedProfileAt = 0;
let pendingProfileRequest: Promise<GithubProfile> | null = null;

const githubUrl = 'https://github.com/bartoszrajchert';
const contentEase = [0.19, 1, 0.22, 1] as const;
const cellEase = [0.32, 0.72, 0, 1] as const;

const contributionLevelClasses: Record<ContributionLevel, string> = {
  0: 'bg-primary/5 dark:bg-primary/10',
  1: 'bg-[#9be9a8] dark:bg-[#0e4429]',
  2: 'bg-[#40c463] dark:bg-[#006d32]',
  3: 'bg-[#30a14e] dark:bg-[#26a641]',
  4: 'bg-[#216e39] dark:bg-[#39d353]',
};

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
});

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
  year: 'numeric',
});

function parseIsoDate(date: string) {
  const [year = 0, month = 1, day = 1] = date.split('-').map(Number);

  return new Date(Date.UTC(year, month - 1, day));
}

function getMonthLabels(weeks: ContributionDay[][]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  const weekCount = Math.max(weeks.length - 1, 1);
  let previousMonth = '';

  weeks.forEach((week, weekIndex) => {
    const firstDay = week[0];

    if (!firstDay) {
      return;
    }

    const date = parseIsoDate(firstDay.date);
    const monthKey = `${date.getUTCFullYear()}-${date.getUTCMonth()}`;

    if (monthKey === previousMonth) {
      return;
    }

    previousMonth = monthKey;

    labels.push({
      label: monthFormatter.format(date),
      left: `${(weekIndex / weekCount) * 100}%`,
    });
  });

  return labels;
}

function getContributionLabel(day: ContributionDay) {
  const contributionLabel =
    day.count === 1 ? '1 contribution' : `${day.count} contributions`;

  return `${contributionLabel} on ${dayFormatter.format(parseIsoDate(day.date))}`;
}

function isGithubProfile(profile: unknown): profile is GithubProfile {
  if (!profile || typeof profile !== 'object') {
    return false;
  }

  const candidate = profile as Partial<GithubProfile>;

  return (
    candidate.source === 'live' &&
    Array.isArray(candidate.weeks) &&
    candidate.weeks.length > 0 &&
    typeof candidate.login === 'string'
  );
}

function hasFreshCachedProfile() {
  return (
    cachedProfile !== null &&
    Date.now() - cachedProfileAt < GITHUB_PROFILE_CACHE_MS
  );
}

function getFreshCachedProfile() {
  return hasFreshCachedProfile() ? cachedProfile : null;
}

async function loadGithubProfile(): Promise<GithubProfile> {
  const freshProfile = getFreshCachedProfile();

  if (freshProfile) {
    return freshProfile;
  }

  if (pendingProfileRequest) {
    return pendingProfileRequest;
  }

  pendingProfileRequest = fetch('/api/github/profile', { cache: 'no-store' })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('GitHub profile request failed.');
      }

      const nextProfile = await response.json();

      if (!isGithubProfile(nextProfile)) {
        throw new Error('GitHub profile response was invalid.');
      }

      cachedProfile = nextProfile;
      cachedProfileAt = Date.now();

      return nextProfile;
    })
    .finally(() => {
      pendingProfileRequest = null;
    });

  return pendingProfileRequest;
}

function ContributionGraph({
  animationKey,
  weeks,
}: {
  animationKey: number;
  weeks: ContributionDay[][];
}) {
  const shouldReduceMotion = useReducedMotion();
  const graphRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<ContributionTooltip | null>(null);
  const today = new Date().toISOString().slice(0, 10);
  const monthLabels = getMonthLabels(weeks);

  function showTooltip(day: ContributionDay, target: HTMLElement) {
    const graph = graphRef.current;

    if (!graph) {
      return;
    }

    const graphRect = graph.getBoundingClientRect();
    const cellRect = target.getBoundingClientRect();

    setTooltip({
      label: getContributionLabel(day),
      left: cellRect.left - graphRect.left + cellRect.width / 2,
      top: cellRect.top - graphRect.top - 6,
    });
  }

  return (
    <div
      ref={graphRef}
      className="relative mx-auto w-max max-w-full overflow-visible"
      onMouseLeave={() => setTooltip(null)}
    >
      <div
        className="text-muted-foreground relative mb-1 h-3 text-[10px] leading-none"
        aria-hidden="true"
      >
        {monthLabels.map((monthLabel) => (
          <span
            key={`${monthLabel.label}-${monthLabel.left}`}
            className="absolute top-0 whitespace-nowrap"
            style={{ left: monthLabel.left }}
          >
            {monthLabel.label}
          </span>
        ))}
      </div>
      <div
        className="flex gap-[3px]"
        role="grid"
        aria-label="GitHub contribution activity"
      >
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-[3px]" role="row">
            {week.map((day) => {
              const isFutureDay = day.date > today;

              return (
                <motion.div
                  key={`${animationKey}-${day.date}`}
                  className={cn(
                    'border-primary/5 size-2.5 shrink-0 rounded-[3px] border will-change-transform',
                    isFutureDay
                      ? 'invisible'
                      : contributionLevelClasses[day.level],
                  )}
                  role="gridcell"
                  aria-label={getContributionLabel(day)}
                  onMouseEnter={(event) => {
                    if (!isFutureDay) {
                      showTooltip(day, event.currentTarget);
                    }
                  }}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 3, scale: 0.9, filter: 'blur(1px)' }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          delay: 0.04 + weekIndex * 0.012,
                          duration: 0.32,
                          ease: cellEase,
                        }
                  }
                />
              );
            })}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {tooltip ? (
          <motion.div
            key="contribution-tooltip"
            className="bg-popover text-popover-foreground ring-foreground/10 pointer-events-none absolute z-10 rounded-md px-1.5 py-0.5 text-xs leading-5 font-[500] whitespace-nowrap shadow-md ring-1"
            style={{
              left: tooltip.left,
              top: tooltip.top,
              transformOrigin: 'bottom center',
              x: '-50%',
              y: '-100%',
            }}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.98, filter: 'blur(2px)' }
            }
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.98, filter: 'blur(2px)' }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.14, ease: contentEase }
            }
          >
            {tooltip.label}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function LoadingCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="loading"
      className="space-y-3"
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 3, scale: 0.985, filter: 'blur(4px)' }
      }
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -1, scale: 0.99, filter: 'blur(3px)' }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.22, ease: contentEase }
      }
    >
      <div className="bg-primary/5 h-[82px] rounded-lg" />
      <div className="flex items-start gap-2.5 pt-1">
        <div className="bg-primary/10 size-10 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2 pt-1">
          <div className="bg-primary/10 h-3 w-24 rounded-full" />
          <div className="bg-primary/5 h-3 w-32 rounded-full" />
          <div className="bg-primary/5 h-3 w-20 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}

function ErrorCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key="error"
      className="space-y-2 p-1"
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 3, scale: 0.985, filter: 'blur(4px)' }
      }
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.22, ease: contentEase }
      }
    >
      <p className="text-primary text-sm leading-tight font-[500]">
        GitHub data unavailable
      </p>
      <p className="text-primary/70 text-sm leading-5">
        The profile card could not load right now.
      </p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary/80 hover:text-primary inline-flex text-sm underline underline-offset-4 transition-colors"
      >
        Open GitHub profile
      </a>
    </motion.div>
  );
}

function ProfileCard({
  animationKey,
  profile,
}: {
  animationKey: number;
  profile: GithubProfile;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={`profile-${profile.updatedAt}`}
      className="space-y-3"
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 3, scale: 0.985, filter: 'blur(10px)' }
      }
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: -1, scale: 0.99, filter: 'blur(3px)' }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.24, ease: contentEase }
      }
    >
      <ContributionGraph animationKey={animationKey} weeks={profile.weeks} />
      <div className="flex items-start gap-2.5 pt-1">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt=""
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="bg-primary/10 size-10 shrink-0 rounded-full" />
        )}
        <div className="flex min-h-10 flex-1 items-center">
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm leading-tight font-[500] transition-colors hover:opacity-80"
            >
              {profile.name}
            </a>
            <span className="text-muted-foreground text-xs leading-tight">
              @{profile.login}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function GitHubHoverCard({ children, className }: GitHubHoverCardProps) {
  const initialProfile = getFreshCachedProfile();
  const [profile, setProfile] = useState<GithubProfile | null>(initialProfile);
  const [status, setStatus] = useState<ProfileStatus>(
    initialProfile ? 'loaded' : 'idle',
  );
  const [animationKey, setAnimationKey] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const isMounted = useRef(false);

  const fetchProfile = useCallback(async (showLoading: boolean) => {
    const freshProfile = getFreshCachedProfile();

    if (freshProfile) {
      if (!isMounted.current) {
        return;
      }

      setProfile(freshProfile);
      setStatus('loaded');
      return;
    }

    if (showLoading) {
      setStatus('loading');
    }

    try {
      const nextProfile = await loadGithubProfile();

      if (!isMounted.current) {
        return;
      }

      setProfile(nextProfile);
      setStatus('loaded');
      setAnimationKey((currentKey) => currentKey + 1);
    } catch {
      if (!isMounted.current) {
        return;
      }

      setProfile(null);
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;

    if (getFreshCachedProfile()) {
      return () => {
        isMounted.current = false;
      };
    }

    const prefetchProfile = () => {
      void fetchProfile(false);
    };

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(prefetchProfile, {
        timeout: 2500,
      });

      return () => {
        isMounted.current = false;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = setTimeout(prefetchProfile, 800);

    return () => {
      isMounted.current = false;
      clearTimeout(timeoutId);
    };
  }, [fetchProfile]);

  return (
    <HoverCard
      openDelay={0}
      closeDelay={130}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          setOpenCount((currentCount) => currentCount + 1);
        }

        if (isOpen && status !== 'loaded') {
          void fetchProfile(true);
        }
      }}
    >
      <HoverCardTrigger asChild>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'decoration-primary/40 hover:text-primary hover:decoration-primary underline underline-offset-4 transition-colors',
            className,
          )}
        >
          {children}
        </a>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        sideOffset={8}
        className="w-[256px] overflow-visible p-2"
      >
        <AnimatePresence mode="wait">
          {status === 'loaded' && profile ? (
            <ProfileCard
              key={`profile-${openCount}-${profile.updatedAt}`}
              animationKey={animationKey + openCount}
              profile={profile}
            />
          ) : status === 'error' ? (
            <ErrorCard key="error" />
          ) : (
            <LoadingCard key="loading" />
          )}
        </AnimatePresence>
      </HoverCardContent>
    </HoverCard>
  );
}
