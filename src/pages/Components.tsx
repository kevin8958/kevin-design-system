import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import InlinePlatformSwitch from '@/components/layout/InlinePlatformSwitch';
import { designSystemMenus } from '@/constants/common';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

const categoryHighlights: Record<string, string> = {
  foundation: 'Build visual consistency from the base.',
  action: 'Start the flows users interact with most.',
  input: 'Collect user intent clearly and consistently.',
  navigation: 'Guide movement through the product.',
  dataDisplay: 'Show identity, structure, and context.',
  feedback: 'Respond to state changes with clarity.',
  layout: 'Compose screens with reusable structure.',
  interaction: 'Add motion and character to the experience.',
  mobile: 'Build mobile-first navigation and overlay patterns.',
};

const appCategoryHighlights: Record<string, string> = {
  action: 'Touch-first actions for flows, overlays, and compact surfaces.',
  input: 'Native form controls for text, selection, dates, files, and state.',
  navigation: 'Mobile navigation patterns for steps, tabs, and hierarchy.',
  dataDisplay: 'Present status, identity, and structured content in app views.',
  feedback: 'Surface loading, alerts, progress, and transient system messages.',
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
const mobileMenu = designSystemMenus.find((menu) => menu.id === 'mobile');

const foundationCategory = {
  id: 'foundation',
  label: 'Foundation',
  href: '/components/foundation',
  items: foundationMenu?.items ?? [],
};

const webCategories = [
  ...(componentsMenu?.sections?.map((section) => ({
    id:
      section.group === 'Data Display'
        ? 'dataDisplay'
        : section.group.toLowerCase(),
    label: section.group,
    href:
      section.group === 'Data Display'
        ? '/components/dataDisplay'
        : `/components/${section.group.toLowerCase()}`,
    items: section.items,
  })) ?? []),
  {
    id: 'mobile',
    label: 'Mobile',
    href: '/components/mobile',
    items: mobileMenu?.items ?? [],
  },
  {
    id: 'interaction',
    label: 'Interaction',
    href: '/components/interaction',
    items: interactionMenu?.items ?? [],
  },
];

const appCategories = [
  {
    id: 'action',
    label: 'Action',
    href: '/components/app/accordion',
    items: [
      { id: 'accordion', label: 'Accordion' },
      { id: 'button', label: 'Button' },
      { id: 'buttonGroup', label: 'ButtonGroup' },
      { id: 'dropdown', label: 'Dropdown' },
      { id: 'popover', label: 'Popover' },
      { id: 'actionSheet', label: 'ActionSheet' },
      { id: 'modal', label: 'Modal' },
      { id: 'drawer', label: 'Drawer' },
    ],
  },
  {
    id: 'input',
    label: 'Input',
    href: '/components/app/textInput',
    items: [
      { id: 'textInput', label: 'TextInput' },
      { id: 'textarea', label: 'Textarea' },
      { id: 'select', label: 'Select' },
      { id: 'combobox', label: 'Combobox' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'radio', label: 'Radio' },
      { id: 'switch', label: 'Switch' },
      { id: 'datepicker', label: 'DatePicker' },
      { id: 'uploadDropzone', label: 'UploadDropzone' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    href: '/components/app/pagination',
    items: [
      { id: 'pagination', label: 'Pagination' },
      { id: 'stepper', label: 'Stepper' },
      { id: 'tabs', label: 'Tabs' },
      { id: 'breadcrumb', label: 'Breadcrumb' },
    ],
  },
  {
    id: 'dataDisplay',
    label: 'Data Display',
    href: '/components/app/avatar',
    items: [
      { id: 'avatar', label: 'Avatar' },
      { id: 'badge', label: 'Badge' },
      { id: 'descriptionList', label: 'DescriptionList' },
      { id: 'emptyState', label: 'EmptyState' },
      { id: 'metricCard', label: 'MetricCard' },
      { id: 'table', label: 'Table' },
      { id: 'tag', label: 'Tag' },
      { id: 'tooltip', label: 'Tooltip' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    href: '/components/app/alert',
    items: [
      { id: 'alert', label: 'Alert' },
      { id: 'progress', label: 'Progress' },
      { id: 'skeleton', label: 'Skeleton' },
      { id: 'toast', label: 'Toast' },
    ],
  },
];

export default function Components() {
  const [platform, setPlatform] = useState<'web' | 'app'>('web');
  const categories = platform === 'web' ? webCategories : appCategories;
  const platformLabel = platform === 'web' ? 'Web' : 'App';

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
          gap={10}
          classes="relative z-10"
        >
          <FlexWrapper
            direction="col"
            items="start"
            gap={6}
            classes="max-w-3xl"
          >
            <Typography
              variant="H1"
              classes="text-balance !text-neutral-900 dark:!text-neutral-50"
            >
              Components
            </Typography>
            <Typography
              variant="B1"
              classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              Start from the area you need, then dive into the {platformLabel.toLowerCase()}{' '}
              components already available in that category.
            </Typography>
          </FlexWrapper>

          <div className="grid w-full grid-cols-1 gap-4 md:max-w-md">
            <Link
              to={foundationCategory.href}
              className="group relative rounded-3xl border border-neutral-200/80 bg-white/90 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-primary-400/50"
            >
              <span className="absolute right-5 top-5 flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition duration-200 group-hover:translate-x-1 group-hover:bg-primary-50 group-hover:text-primary-700 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-primary-400/10 dark:group-hover:text-primary-300">
                <LuArrowUpRight size={18} />
              </span>
              <FlexWrapper direction="col" items="start" gap={4} classes="h-full">
                <div className="w-full pr-14">
                  <Typography
                    variant="H4"
                    classes="!text-neutral-900 dark:!text-neutral-50"
                  >
                    {foundationCategory.label}
                  </Typography>
                  <Typography
                    variant="C1"
                    classes="mt-2 !text-neutral-500 dark:!text-neutral-400"
                  >
                    {categoryHighlights.foundation}
                  </Typography>
                </div>

                <div className="flex max-h-[56px] flex-wrap gap-2 overflow-hidden">
                  {foundationCategory.items.slice(0, 4).map((item) => (
                    <span
                      key={item.id}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </FlexWrapper>
            </Link>
          </div>

          <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
            <InlinePlatformSwitch
              activeValue={platform}
              options={[
                { value: 'web', onSelect: setPlatform },
                { value: 'app', onSelect: setPlatform },
              ]}
            />
            <Typography
              variant="C1"
              classes="!text-neutral-500 dark:!text-neutral-400"
            >
              {platform === 'web'
                ? 'Browse web-specific categories, including mobile web and interaction patterns.'
                : 'Browse app-focused React Native component categories and jump into the first available doc in each group.'}
            </Typography>
          </FlexWrapper>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group relative rounded-3xl border border-neutral-200/80 bg-white/90 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:hover:border-primary-400/50"
              >
                <span className="absolute right-5 top-5 flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition duration-200 group-hover:translate-x-1 group-hover:bg-primary-50 group-hover:text-primary-700 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-primary-400/10 dark:group-hover:text-primary-300">
                  <LuArrowUpRight size={18} />
                </span>
                <FlexWrapper
                  direction="col"
                  items="start"
                  gap={4}
                  classes="h-full"
                >
                  <div className="w-full pr-14">
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
                      {platform === 'web'
                        ? categoryHighlights[category.id]
                        : appCategoryHighlights[category.id]}
                    </Typography>
                  </div>

                  <div className="flex max-h-[56px] flex-wrap gap-2 overflow-hidden">
                    {category.items.slice(0, 4).map((item) => (
                      <span
                        key={item.id}
                        className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                      >
                        {item.label}
                      </span>
                    ))}
                    {category.items.length > 4 && (
                      <span className="px-1 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        +{category.items.length - 4} more
                      </span>
                    )}
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
