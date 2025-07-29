import React, { type JSX } from 'react';

export type TimelineRecordProps = {
  title: string | JSX.Element;
  description: string | JSX.Element;
  date: string;
};

const TimelineRecord = ({ title, description, date }: TimelineRecordProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
      <div>
        <p className="inline whitespace-nowrap rounded-8px bg-grey-1 py-1 px-3 text-white">
          {date}
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="text-header-sm">{title}</h2>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  );
};

export default TimelineRecord;
