import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';

const defaultSteps = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const ColorScalePreview = ({
  title,
  prefix,
  steps = defaultSteps,
}: {
  title: string;
  prefix: 'primary' | 'secondary' | 'neutral';
  steps?: string[];
}) => {
  const gradient = `linear-gradient(90deg, ${steps
    .map((step) => `var(--color-${prefix}-${step})`)
    .join(', ')})`;

  return (
    <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
      <Typography variant="H4" classes="!text-neutral-700 dark:!text-neutral-100">
        {title}
      </Typography>
      <div
        className="h-28 w-full rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800"
        style={{ background: gradient }}
      />
    </FlexWrapper>
  );
};

export default ColorScalePreview;
