import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { LuMinus, LuTrendingDown, LuTrendingUp } from 'react-icons/lu';
import CountUp from '@/components/interaction/CountUp';

const metricCardVariants = cva(
  'flex w-full flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 ease-in-out dark:border-neutral-800 dark:bg-neutral-900',
  {
    variants: {
      size: {
        sm: 'gap-3 p-4',
        md: 'gap-4 p-5',
        lg: 'gap-5 p-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const titleVariants = cva(
  'font-medium text-neutral-500 dark:text-neutral-400',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const valueVariants = cva(
  'inline-flex items-baseline gap-1 font-semibold tracking-tight text-neutral-900 dark:text-neutral-50',
  {
    variants: {
      size: {
        sm: 'text-2xl',
        md: 'text-3xl',
        lg: 'text-4xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const changeVariants = cva(
  'inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold',
  {
    variants: {
      trend: {
        up: 'bg-success/15 text-success dark:bg-success/20 dark:text-success-light',
        down: 'bg-danger/15 text-danger dark:bg-danger/20 dark:text-danger',
        neutral:
          'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300',
      },
    },
    defaultVariants: {
      trend: 'neutral',
    },
  },
);

const roundToDecimals = (value: number, decimals: number) =>
  Number(value.toFixed(decimals));

const formatNumber = (value: number, decimals: number) =>
  new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(roundToDecimals(value, decimals));

const resolveTrend = (
  trend: Data.MetricCardTrend | undefined,
  change: number | undefined,
): Data.MetricCardTrend => {
  if (trend) return trend;
  if (typeof change !== 'number') return 'neutral';
  if (change > 0) return 'up';
  if (change < 0) return 'down';
  return 'neutral';
};

const trendIconMap = {
  up: LuTrendingUp,
  down: LuTrendingDown,
  neutral: LuMinus,
};

const MetricCard = ({
  title,
  value,
  change,
  size = 'md',
  trend,
  prefix = '',
  suffix = '',
  changeSuffix = '',
  decimals = 0,
  changeDecimals = 1,
  animated = true,
  duration = 1.6,
  classes,
}: Data.MetricCardProps) => {
  const resolvedTrend = resolveTrend(trend, change);
  const TrendIcon = trendIconMap[resolvedTrend];
  const roundedValue = roundToDecimals(value, decimals);
  const formattedValue = `${prefix}${formatNumber(value, decimals)}${suffix}`;
  const formattedChange =
    typeof change === 'number'
      ? `${change > 0 ? '+' : change < 0 ? '-' : ''}${formatNumber(
          Math.abs(change),
          changeDecimals,
        )}${changeSuffix}`
      : null;

  return (
    <article
      data-testid="metric-card"
      className={classNames(metricCardVariants({ size }), classes)}
    >
      <p className={titleVariants({ size })}>{title}</p>

      <div className="flex items-end justify-between gap-4">
        <div data-testid="metric-card-value" className={valueVariants({ size })}>
          {!animated ? (
            formattedValue
          ) : (
            <>
              {prefix && <span>{prefix}</span>}
              <CountUp
                to={roundedValue}
                duration={duration}
                separator=","
                className="tabular-nums"
              />
              {suffix && <span>{suffix}</span>}
            </>
          )}
        </div>

        {formattedChange && (
          <div
            data-testid="metric-card-change"
            className={changeVariants({ trend: resolvedTrend })}
          >
            <TrendIcon size={14} />
            <span>{formattedChange}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default MetricCard;
