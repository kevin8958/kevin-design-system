import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';
import Box from '@/components/layout/Box';

const STATUS_DATA = [
  {
    id: 'danger',
    label: 'Danger',
    bgClass: 'bg-danger',
    textClass: 'text-danger',
    description:
      'Errors, failures, or destructive actions (e.g., deleting data).',
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
    description:
      'Positive outcomes or successful operations (e.g., completed).',
  },
];

const StatusGuide = () => {
  return (
    <FlexWrapper classes="w-full" direction="col" items="start" gap={8}>
      <section className="space-y-2">
        <Typography variant="H3">Status Colors</Typography>
        <Typography
          variant="B1"
          classes="max-w-2xl text-neutral-600 dark:text-neutral-400"
        >
          These colors communicate system state and feedback. Each status has a
          specific semantic meaning to help users navigate the interface
          intuitively.
        </Typography>
      </section>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATUS_DATA.map((status) => (
          <Box key={status.id} type="guide" classes="flex justify-center">
            <FlexWrapper direction="col" gap={4} items="start">
              <div className="flex h-24 w-full items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-950">
                <div
                  className={`${status.bgClass} flex items-center gap-2 rounded-full px-4 py-2 shadow-lg shadow-black/5`}
                >
                  <div className="size-2 animate-pulse rounded-full bg-white" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                    {status.id}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <Typography variant="H4" classes={status.textClass}>
                  {status.label}
                </Typography>
                <Typography
                  variant="C1"
                  classes="line-clamp-2 min-h-[32px] text-neutral-500 dark:text-neutral-400"
                >
                  {status.description}
                </Typography>
              </div>
            </FlexWrapper>
          </Box>
        ))}
      </div>
    </FlexWrapper>
  );
};

export default StatusGuide;
