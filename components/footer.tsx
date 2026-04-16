'use client';

import NumberFlow from '@number-flow/react';
import { useEffect, useState } from 'react';
import { ModeToggle } from './mode-toggle';

export function Footer() {
  return (
    <div className="stagger-item flex items-center justify-between">
      <WarsawTimer />
      <ModeToggle />
    </div>
  );
}

const warsawTimeFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Europe/Warsaw',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

function getWarsawTimeValue() {
  const parts = warsawTimeFormatter.formatToParts(new Date());
  const hour = parts.find((part) => part.type === 'hour')?.value ?? '12';
  const minute = parts.find((part) => part.type === 'minute')?.value ?? '00';
  const second = parts.find((part) => part.type === 'second')?.value ?? '00';
  const dayPeriod =
    parts.find((part) => part.type === 'dayPeriod')?.value ?? 'AM';

  return {
    hour: Number(hour),
    minute: Number(minute),
    second: Number(second),
    dayPeriod: dayPeriod.toUpperCase(),
  };
}

function WarsawTimer() {
  const [warsawTime, setWarsawTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
    dayPeriod: 'AM',
  });

  useEffect(() => {
    const updateWarsawTime = () => {
      setWarsawTime(getWarsawTimeValue());
    };

    updateWarsawTime();

    const intervalId = window.setInterval(updateWarsawTime, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const onShow = (e: PageTransitionEvent) =>
      console.log('pageshow', e.persisted);
    const onHide = (e: PageTransitionEvent) =>
      console.log('pagehide', e.persisted);
    const onVis = () => console.log('visibility', document.visibilityState);
    window.addEventListener('pageshow', onShow);
    window.addEventListener('pagehide', onHide);
    document.addEventListener('visibilitychange', onVis);
  }, []);

  return (
    <p className="text-sm tabular-nums">
      <NumberFlow
        value={warsawTime.hour}
        format={{ minimumIntegerDigits: 2, useGrouping: false }}
      />
      <span>:</span>
      <NumberFlow
        value={warsawTime.minute}
        format={{ minimumIntegerDigits: 2, useGrouping: false }}
      />
      <span>:</span>
      <NumberFlow
        value={warsawTime.second}
        format={{ minimumIntegerDigits: 2, useGrouping: false }}
      />{' '}
      {warsawTime.dayPeriod} in Warsaw, Poland
    </p>
  );
}
