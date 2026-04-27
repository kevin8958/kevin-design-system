'use client';

import MetricCard from '@/components/data/MetricCard';
import DescriptionList from '@/components/data/DescriptionList';
import Skeleton from '@/components/feedback/Skeleton';
import Typography from '@/components/foundation/Typography';

type WebLoadingPanelPreviewProps = {
  density?: 'summary' | 'detail';
  phase?: 'initial' | 'refresh';
};

export default function WebLoadingPanelPreview({
  density = 'summary',
  phase = 'initial',
}: WebLoadingPanelPreviewProps) {
  const isDetail = density === 'detail';
  const isRefresh = phase === 'refresh';

  return (
    <div className="w-full max-w-[760px] rounded-[32px] border border-neutral-200 bg-white p-7 shadow-[0_28px_100px_-36px_rgba(17,24,39,0.38)] dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col gap-5">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Typography variant="H3">Workspace health</Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Preserve layout while content is loading so the next state feels
              stable instead of rebuilt from scratch.
            </Typography>
          </div>
          {isRefresh ? (
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
              Refreshing
            </span>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="pointer-events-none opacity-85">
              <MetricCard title="Metric" value={0} animated={false} />
            </div>
          ))}
        </div>

        <div className="rounded-[24px] border border-neutral-200 bg-neutral-50/70 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
          <div className="flex flex-col gap-4">
            <Skeleton height={20} width={180} />
            <Skeleton height={14} width="68%" />

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {[0, 1].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <Skeleton height={14} width={120} />
                  <div className="mt-4 space-y-3">
                    <Skeleton height={12} width="100%" />
                    <Skeleton height={12} width="88%" />
                    <Skeleton height={12} width="74%" />
                  </div>
                </div>
              ))}
            </div>

            {isDetail ? (
              <DescriptionList
                columns={2}
                items={[
                  { label: 'Status', value: <Skeleton height={14} width={90} /> },
                  { label: 'Owner', value: <Skeleton height={14} width={110} /> },
                  { label: 'Updated', value: <Skeleton height={14} width={80} /> },
                  { label: 'Scope', value: <Skeleton height={14} width={130} /> },
                ]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
