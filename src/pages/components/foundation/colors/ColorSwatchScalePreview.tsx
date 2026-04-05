import FlexWrapper from '@/components/layout/FlexWrapper';
import Typography from '@/components/foundation/Typography';

const scaleClassMap: Record<'primary' | 'secondary' | 'neutral', Record<string, string>> = {
  primary: {
    '50': 'bg-primary-50',
    '100': 'bg-primary-100',
    '200': 'bg-primary-200',
    '300': 'bg-primary-300',
    '400': 'bg-primary-400',
    '500': 'bg-primary-500',
    '600': 'bg-primary-600',
    '700': 'bg-primary-700',
    '800': 'bg-primary-800',
    '900': 'bg-primary-900',
  },
  secondary: {
    '50': 'bg-secondary-50',
    '100': 'bg-secondary-100',
    '200': 'bg-secondary-200',
    '300': 'bg-secondary-300',
    '400': 'bg-secondary-400',
    '500': 'bg-secondary-500',
    '600': 'bg-secondary-600',
    '700': 'bg-secondary-700',
    '800': 'bg-secondary-800',
    '900': 'bg-secondary-900',
  },
  neutral: {
    '50': 'bg-neutral-50',
    '100': 'bg-neutral-100',
    '200': 'bg-neutral-200',
    '300': 'bg-neutral-300',
    '400': 'bg-neutral-400',
    '500': 'bg-neutral-500',
    '600': 'bg-neutral-600',
    '700': 'bg-neutral-700',
    '800': 'bg-neutral-800',
    '900': 'bg-neutral-900',
  },
};

const steps = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

const ColorSwatchScalePreview = ({
  prefix,
}: {
  prefix: 'primary' | 'secondary' | 'neutral';
}) => {
  return (
    <FlexWrapper items="start" justify="start" classes="w-full flex-wrap" gap={3}>
      {steps.map((step) => (
        <FlexWrapper
          key={`${prefix}-${step}`}
          classes="!gap-3 min-w-[44px]"
          items="center"
          direction="col"
        >
          <span
            className={`size-7 rounded-md border border-black/5 dark:border-white/10 ${scaleClassMap[prefix][step]}`}
          />
          <Typography variant="C1" classes="!text-neutral-500 dark:!text-neutral-400">
            {step}
          </Typography>
        </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};

export default ColorSwatchScalePreview;
