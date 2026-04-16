'use client';

import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useId, useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener('pageshow', onStoreChange);
  window.addEventListener('visibilitychange', onStoreChange);

  return () => {
    window.removeEventListener('pageshow', onStoreChange);
    window.removeEventListener('visibilitychange', onStoreChange);
  };
};

const getSnapshot = () => {
  return document.readyState !== 'loading';
};

const getServerSnapshot = () => {
  return false;
};

export function ModeToggle() {
  const id = useId();
  const isHydrated = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!isHydrated) {
    return null;
  }

  const checked = resolvedTheme === 'dark';

  const toggleSwitch = (nextChecked: boolean) => {
    setTheme(nextChecked ? 'dark' : 'light');
  };

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? 'checked' : 'unchecked'}
    >
      <span
        id={`${id}-light`}
        className="group-data-[state=checked]:text-muted-foreground/70 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme('light')}
      >
        <SunIcon className="size-4" aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-dark ${id}-light`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-dark`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="size-4" aria-hidden="true" />
      </span>
    </div>
  );
}
