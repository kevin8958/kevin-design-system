import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import { designSystemMenus } from '@/constants/common';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

const categoryDescriptions: Record<string, string> = {
  foundation:
    'Design tokens and visual principles that define the baseline language of the system.',
  action:
    'Buttons, dropdowns, modals, and drawers for initiating user actions.',
  input:
    'Form controls for collecting text, selection, dates, files, and binary state.',
  navigation:
    'Patterns that help people move between pages, sections, and UI states.',
  dataDisplay:
    'Components for presenting identity, status, structured data, and contextual details.',
  feedback:
    'Visual responses that communicate progress, alerts, loading, and system status.',
  layout: 'Primitives for spacing, separation, and responsive composition.',
  interaction:
    'Motion-driven and playful UI elements that add behavior and expression.',
};

const categoryHighlights: Record<string, string> = {
  foundation: 'Build visual consistency from the base.',
  action: 'Start the flows users interact with most.',
  input: 'Collect user intent clearly and consistently.',
  navigation: 'Guide movement through the product.',
  dataDisplay: 'Show identity, structure, and context.',
  feedback: 'Respond to state changes with clarity.',
  layout: 'Compose screens with reusable structure.',
  interaction: 'Add motion and character to the experience.',
};

const foundationMenu = designSystemMenus.find(
  (menu) => menu.id === 'foundation',
);
const componentsMenu = designSystemMenus.find(
  (menu) => menu.id === 'components',
);
const interactionMenu = designSystemMenus.find(
  (menu) => menu.id === 'interaction',
);

const categories = [
  {
    id: 'foundation',
    label: 'Foundation',
    items: foundationMenu?.items ?? [],
  },
  ...(componentsMenu?.sections?.map((section) => ({
    id:
      section.group === 'Data Display'
        ? 'dataDisplay'
        : section.group.toLowerCase(),
    label: section.group,
    items: section.items,
  })) ?? []),
  {
    id: 'interaction',
    label: 'Interaction',
    items: interactionMenu?.items ?? [],
  },
];

export default function Components() {
  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={10}>
      <section
        id="top"
        className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-br from-white via-secondary-50/60 to-secondary-100/70 px-6 py-10 shadow-sm dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 md:px-10 md:py-14"
      >
        <div className="pointer-events-none absolute -right-16 top-0 size-56 rounded-full bg-secondary-300/25 blur-3xl dark:bg-primary-400/10" />
        <div className="pointer-events-none absolute left-0 top-1/2 size-40 -translate-y-1/2 rounded-full bg-secondary-400/20 blur-3xl dark:bg-secondary-400/10" />

        <FlexWrapper
          direction="col"
          items="start"
          gap={6}
          classes="relative z-10"
        >
          <div className="inline-flex rounded-full border border-neutral-300/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-200">
            Component Index
          </div>

          <FlexWrapper
            direction="col"
            items="start"
            gap={3}
            classes="max-w-3xl"
          >
            <Typography
              variant="H1"
              classes="text-balance !text-neutral-900 dark:!text-neutral-50"
            >
              Explore the design system by category
            </Typography>
            <Typography
              variant="B1"
              classes="max-w-2xl !font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Start from the area you need, then dive into the components
              already available in that category.
            </Typography>
          </FlexWrapper>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.id}
                className="group rounded-3xl border border-neutral-200/80 bg-white/90 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-primary-400/50"
              >
                <FlexWrapper
                  direction="col"
                  items="start"
                  gap={4}
                  classes="h-full"
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <div>
                      <Typography
                        variant="H4"
                        classes="!text-neutral-900 dark:!text-neutral-50"
                      >
                        {category.label}
                      </Typography>
                      <Typography
                        variant="C1"
                        classes="mt-2 !text-neutral-500 dark:!text-neutral-400"
                      >
                        {categoryHighlights[category.id]}
                      </Typography>
                    </div>
                    <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                      {category.items.length}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.slice(0, 4).map((item) => (
                      <span
                        key={item.id}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                      >
                        {item.label}
                      </span>
                    ))}
                    {category.items.length > 4 && (
                      <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-400/10 dark:text-primary-300">
                        +{category.items.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex w-full items-center justify-between pt-2">
                    <Typography
                      variant="C1"
                      classes="!text-neutral-500 dark:!text-neutral-400"
                    >
                      {categoryDescriptions[category.id]}
                    </Typography>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition duration-200 group-hover:translate-x-1 group-hover:bg-primary-50 group-hover:text-primary-700 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-primary-400/10 dark:group-hover:text-primary-300">
                      <LuArrowUpRight size={18} />
                    </span>
                  </div>
                </FlexWrapper>
              </Link>
            ))}
          </div>
        </FlexWrapper>
      </section>
    </FlexWrapper>
  );
}
