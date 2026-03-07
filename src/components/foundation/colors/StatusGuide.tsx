import React from 'react';
import FlexWrapper from '@/design-system/layout/FlexWrapper';
import Typography from '@/design-system/foundation/Typography';

const STATUS_DATA = [
  {
    id: 'danger',
    label: 'Danger',
    bgClass: 'bg-danger',
    textClass: 'text-danger',
    description: 'Errors, failures, or destructive actions (e.g., deleting data).',
  },
  {
    id: 'warning',
    label: 'Warning',
    bgClass: 'bg-warning',
    textClass: 'text-warning',
    description: 'Caution or potential issues that require user attention.',
  },
  {
    id: 'info',
    label: 'Info',
    bgClass: 'bg-info',
    textClass: 'text-info',
    description: 'Neutral feedback or informational guidance (e.g., updates).',
  },
  {
    id: 'success',
    label: 'Success',
    bgClass: 'bg-success',
    textClass: 'text-success',
    description: 'Positive outcomes or successful operations (e.g., completed).',
  },
];

const StatusGuide = () => {
  return (
    <FlexWrapper classes="w-full" direction="col" items="start" gap={8}>
      {/* Header Section */}
      <section className="space-y-2">
        <Typography variant="H3">Status Colors</Typography>
        <Typography variant="B1" classes="max-w-2xl">
          These colors communicate system state and feedback. Each status has a specific semantic
          meaning to help users navigate the interface intuitively.
        </Typography>
      </section>

      {/* Grid Layout for Status Cards */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATUS_DATA.map((status) => (
          <div
            key={status.id}
            className={`rounded-2xl bg-neutral-900 p-5 shadow-sm transition-all hover:shadow-md`}
          >
            <FlexWrapper direction="col" gap={4} items="start">
              {/* Visual Preview Area */}
              <div className="flex h-24 w-full items-center justify-center rounded-lg bg-neutral-800">
                {/* 컬러칩과 실제 텍스트 적용 사례를 동시에 보여줌 */}
                <div className={`${status.bgClass} flex items-center gap-2 rounded-full px-4 py-2`}>
                  <div className="size-2 animate-pulse rounded-full bg-white" />
                  <span className="text-xs font-bold tracking-wider text-white uppercase">
                    {status.id}
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="space-y-1">
                <Typography variant="H4" classes={status.textClass}>
                  {status.label}
                </Typography>
                <Typography variant="C1" classes="line-clamp-2 min-h-[32px]">
                  {status.description}
                </Typography>
              </div>
            </FlexWrapper>
          </div>
        ))}
      </div>
    </FlexWrapper>
  );
};

export default StatusGuide;
