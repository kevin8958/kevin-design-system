'use client';

import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Grid from '@/components/layout/Grid';
import { designSystemMenus } from '@/constants/common';
import ColorScalePreview from '@/pages/components/foundation/colors/ColorScalePreview';
import { Link, useParams } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';
import ImagePreview from './previews/ImagePreview';

type CategoryItem = {
  id: string;
  label: string;
  href: string;
};

type CategoryConfig = {
  id: string;
  label: string;
  description: string;
  items: CategoryItem[];
};

type PreviewConfig = {
  description: string;
  preview?: React.ReactNode;
  imagePreview?: {
    src: string;
    alt: string;
    minHeight?: number;
    darkSrc?: string;
  };
};

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

const foundationMenu = designSystemMenus.find(
  (menu) => menu.id === 'foundation',
);
const componentsMenu = designSystemMenus.find(
  (menu) => menu.id === 'components',
);
const interactionMenu = designSystemMenus.find(
  (menu) => menu.id === 'interaction',
);

const categoryConfigs: CategoryConfig[] = [
  {
    id: 'foundation',
    label: 'Foundation',
    description: categoryDescriptions.foundation,
    items: foundationMenu?.items ?? [],
  },
  ...(componentsMenu?.sections?.map((section) => ({
    id:
      section.group === 'Data Display'
        ? 'dataDisplay'
        : section.group.toLowerCase(),
    label: section.group,
    description:
      categoryDescriptions[
        section.group === 'Data Display'
          ? 'dataDisplay'
          : section.group.toLowerCase()
      ],
    items: section.items,
  })) ?? []),
  {
    id: 'interaction',
    label: 'Interaction',
    description: categoryDescriptions.interaction,
    items: interactionMenu?.items ?? [],
  },
];

const FoundationColorsPreview = () => (
  <Grid cols={1} gap={3} classes="w-full lg:grid-cols-3">
    {[
      { name: 'Primary', prefix: 'primary' },
      { name: 'Secondary', prefix: 'secondary' },
      { name: 'Neutral', prefix: 'neutral' },
    ].map((palette) => (
      <div
        key={palette.name}
        className="rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <ColorScalePreview
          title={palette.name}
          prefix={palette.prefix as 'primary' | 'secondary' | 'neutral'}
        />
      </div>
    ))}
  </Grid>
);

const FoundationTypographyPreview = () => (
  <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
    <Typography variant="H2">Design systems need strong hierarchy.</Typography>
    <Typography variant="H4">Section heading</Typography>
    <Typography
      variant="B1"
      classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
    >
      Body text establishes the default reading rhythm across pages and
      components.
    </Typography>
    <Typography variant="C1" classes="!text-neutral-500 dark:!text-neutral-400">
      Caption and supporting details
    </Typography>
  </FlexWrapper>
);

const previewExamples: Record<string, Record<string, PreviewConfig>> = {
  foundation: {
    colors: {
      description:
        'Colors establish hierarchy, emphasis, and semantic meaning across the system.',
      preview: <FoundationColorsPreview />,
    },
    typography: {
      description:
        'Typography defines readable hierarchy from hero messaging down to compact annotations.',
      preview: <FoundationTypographyPreview />,
    },
  },
  action: {
    button: {
      description:
        'Button drives primary, secondary, and lightweight actions with clear emphasis.',
      imagePreview: {
        src: '/category-previews/action/button.svg',
        darkSrc: '/category-previews/action/button-dark.svg',
        minHeight: 124,
        alt: 'Button mock preview',
      },
    },
    buttonGroup: {
      description:
        'ButtonGroup switches between a small set of equal-priority options in a single row.',
      imagePreview: {
        src: '/category-previews/action/button-group.svg',
        darkSrc: '/category-previews/action/button-group-dark.svg',
        minHeight: 140,
        alt: 'ButtonGroup mock preview',
      },
    },
    dropdown: {
      description:
        'Dropdown reveals grouped actions without leaving the current layout.',
      imagePreview: {
        src: '/category-previews/action/dropdown.svg',
        darkSrc: '/category-previews/action/dropdown-dark.svg',
        minHeight: 180,
        alt: 'Dropdown mock preview',
      },
    },
    modal: {
      description:
        'Modal interrupts the flow to confirm, review, or complete focused tasks.',
      imagePreview: {
        src: '/category-previews/action/modal.svg',
        darkSrc: '/category-previews/action/modal-dark.svg',
        minHeight: 180,
        alt: 'Modal mock preview',
      },
    },
    drawer: {
      description:
        'Drawer opens contextual tools from the edge of the screen while keeping the main page visible.',
      imagePreview: {
        src: '/category-previews/action/drawer.svg',
        darkSrc: '/category-previews/action/drawer-dark.svg',
        minHeight: 180,
        alt: 'Drawer mock preview',
      },
    },
  },
  input: {
    textinput: {
      description:
        'TextInput captures short form values with optional labels, prefixes, and validation states.',
      imagePreview: {
        src: '/category-previews/input/textinput.svg',
        alt: 'TextInput mock preview',
        minHeight: 160,
      },
    },
    select: {
      description:
        'Select presents a compact trigger with a focused list of predefined options.',
      imagePreview: {
        src: '/category-previews/input/select.svg',
        alt: 'Select mock preview',
        minHeight: 172,
      },
    },
    checkbox: {
      description:
        'Checkbox supports independent binary selection and compact preference lists.',
      imagePreview: {
        src: '/category-previews/input/checkbox.svg',
        alt: 'Checkbox mock preview',
        minHeight: 160,
      },
    },
    radio: {
      description:
        'Radio groups exclusive options with room for supporting descriptions.',
      imagePreview: {
        src: '/category-previews/input/radio.svg',
        alt: 'Radio mock preview',
        minHeight: 160,
      },
    },
    switch: {
      description:
        'Switch handles immediate on/off preferences and setting toggles.',
      imagePreview: {
        src: '/category-previews/input/switch.svg',
        alt: 'Switch mock preview',
        minHeight: 160,
      },
    },
    datepicker: {
      description:
        'DatePicker helps users choose dates through direct calendar interaction.',
      imagePreview: {
        src: '/category-previews/input/datepicker.svg',
        alt: 'DatePicker mock preview',
        minHeight: 180,
      },
    },
    uploadDropzone: {
      description:
        'UploadDropzone offers click or drag-and-drop file selection in a large target area.',
      imagePreview: {
        src: '/category-previews/input/upload-dropzone.svg',
        alt: 'UploadDropzone mock preview',
        minHeight: 180,
      },
    },
  },
  navigation: {
    pagination: {
      description:
        'Pagination helps users move through larger result sets one page at a time.',
      imagePreview: {
        src: '/category-previews/navigation/pagination.svg',
        alt: 'Pagination mock preview',
        minHeight: 140,
      },
    },
    tabs: {
      description:
        'Tabs switch between related content panels without leaving the current screen.',
      imagePreview: {
        src: '/category-previews/navigation/tabs.svg',
        alt: 'Tabs mock preview',
        minHeight: 150,
      },
    },
    breadcrumb: {
      description:
        'Breadcrumb reflects position in the hierarchy and gives quick access to parent levels.',
      imagePreview: {
        src: '/category-previews/navigation/breadcrumb.svg',
        alt: 'Breadcrumb mock preview',
        minHeight: 136,
      },
    },
  },
  dataDisplay: {
    avatar: {
      description:
        'Avatar previews identity with image, initials, and presence.',
      imagePreview: {
        src: '/category-previews/data-display/avatar.svg',
        alt: 'Avatar mock preview',
        minHeight: 148,
      },
    },
    badge: {
      description:
        'Badge surfaces compact status labels and semantic emphasis.',
      imagePreview: {
        src: '/category-previews/data-display/badge.svg',
        alt: 'Badge mock preview',
        minHeight: 148,
      },
    },
    table: {
      description:
        'Table organizes structured content in a readable, scannable format.',
      imagePreview: {
        src: '/category-previews/data-display/table.svg',
        alt: 'Table mock preview',
        minHeight: 186,
      },
    },
    tag: {
      description:
        'Tag highlights classification and filters with a stronger boundary.',
      imagePreview: {
        src: '/category-previews/data-display/tag.svg',
        alt: 'Tag mock preview',
        minHeight: 148,
      },
    },
    tooltip: {
      description:
        'Tooltip reveals lightweight supporting context on hover or focus.',
      imagePreview: {
        src: '/category-previews/data-display/tooltip.svg',
        alt: 'Tooltip mock preview',
        minHeight: 148,
      },
    },
  },
  feedback: {
    alert: {
      description:
        'Alert communicates inline status and attention states inside page content.',
      imagePreview: {
        src: '/category-previews/feedback/alert.svg',
        alt: 'Alert mock preview',
        minHeight: 148,
      },
    },
    progress: {
      description:
        'Progress communicates completion state for uploads, setup, and multistep flows.',
      imagePreview: {
        src: '/category-previews/feedback/progress.svg',
        alt: 'Progress mock preview',
        minHeight: 144,
      },
    },
    skeleton: {
      description:
        'Skeleton reserves layout while content is loading, reducing visual jumps.',
      imagePreview: {
        src: '/category-previews/feedback/skeleton.svg',
        alt: 'Skeleton mock preview',
        minHeight: 148,
      },
    },
    toast: {
      description:
        'Toast provides lightweight, temporary confirmation without interrupting the workflow.',
      imagePreview: {
        src: '/category-previews/feedback/toast.svg',
        alt: 'Toast mock preview',
        minHeight: 148,
      },
    },
  },
  layout: {
    grid: {
      description:
        'Grid provides repeatable column structure for cards, dashboards, and responsive compositions.',
      imagePreview: {
        src: '/category-previews/layout/grid.svg',
        alt: 'Grid mock preview',
        minHeight: 148,
      },
    },
    divider: {
      description:
        'Divider separates related groups while preserving a clean and lightweight layout rhythm.',
      imagePreview: {
        src: '/category-previews/layout/divider.svg',
        alt: 'Divider mock preview',
        minHeight: 132,
      },
    },
  },
  interaction: {
    splitText: {
      description:
        'SplitText reveals content character by character to add motion emphasis to key moments.',
      imagePreview: {
        src: '/category-previews/interaction/split-text.svg',
        alt: 'SplitText mock preview',
        minHeight: 148,
      },
    },
    sticker: {
      description:
        'Sticker creates a playful board where visual elements can be placed and arranged.',
      imagePreview: {
        src: '/category-previews/interaction/sticker.svg',
        alt: 'Sticker mock preview',
        minHeight: 172,
      },
    },
    countUp: {
      description:
        'CountUp draws attention to metrics and KPIs with animated number transitions.',
      imagePreview: {
        src: '/category-previews/interaction/count-up.svg',
        alt: 'CountUp mock preview',
        minHeight: 148,
      },
    },
  },
};

const gridCategoryIds = new Set([
  'action',
  'input',
  'navigation',
  'dataDisplay',
  'feedback',
  'layout',
  'interaction',
]);

const PreviewBlock = ({
  item,
  preview,
}: {
  item: CategoryItem;
  preview?: PreviewConfig;
}) => {
  return (
    <section className="w-full rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <FlexWrapper direction="col" items="start" gap={5} classes="w-full">
        <div className="relative w-full">
          <div className="max-w-2xl pr-14">
            <Typography variant="H3">{item.label}</Typography>
            <Typography
              variant="B2"
              classes="mt-2 !font-normal !text-neutral-600 dark:!text-neutral-300"
            >
              {preview?.description ??
                'Category preview layout is ready. A richer live example for this component can be added next.'}
            </Typography>
          </div>

          <Link
            to={item.href}
            aria-label={`View ${item.label}`}
            className="absolute right-0 top-0 inline-flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <LuArrowUpRight size={16} />
          </Link>
        </div>

        <div className="w-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950/60">
          {preview ? (
            <div className="w-full">
              {preview.preview ??
                (preview.imagePreview ? (
                  <ImagePreview {...preview.imagePreview} />
                ) : null)}
            </div>
          ) : (
            <FlexWrapper
              classes="w-full min-h-[160px]"
              justify="center"
              items="center"
            >
              <Typography
                variant="B1"
                classes="!font-normal !text-neutral-500 dark:!text-neutral-400"
              >
                Preview example coming soon
              </Typography>
            </FlexWrapper>
          )}
        </div>
      </FlexWrapper>
    </section>
  );
};

export default function ComponentCategoryPage() {
  const { categoryId } = useParams();

  const category = categoryConfigs.find((item) => item.id === categoryId);

  if (!category) {
    return (
      <FlexWrapper classes="w-full px-4 py-16" justify="center">
        <Typography variant="H3">Category not found</Typography>
      </FlexWrapper>
    );
  }

  const categoryPreviewMap = previewExamples[category.id] ?? {};

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" gap={8}>
      <section className="w-full rounded-[32px] border border-neutral-200 bg-gradient-to-br from-white via-neutral-50 to-secondary-50/60 px-6 py-10 shadow-sm dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 md:px-10 md:py-12">
        <FlexWrapper direction="col" items="start" gap={4}>
          <Typography variant="H1">{category.label}</Typography>
          <Typography
            variant="B1"
            classes="max-w-3xl !font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            {category.description}
          </Typography>
        </FlexWrapper>
      </section>

      <FlexWrapper direction="col" items="start" gap={6} classes="w-full">
        {gridCategoryIds.has(category.id) ? (
          <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
            {category.items.map((item) => (
              <PreviewBlock
                key={item.id}
                item={item}
                preview={categoryPreviewMap[item.id]}
              />
            ))}
          </div>
        ) : (
          category.items.map((item) => (
            <PreviewBlock
              key={item.id}
              item={item}
              preview={categoryPreviewMap[item.id]}
            />
          ))
        )}
      </FlexWrapper>
    </FlexWrapper>
  );
}
