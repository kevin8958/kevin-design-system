'use client';

import { useState } from 'react';
import Button from '@/components/action/Button';
import Drawer from '@/components/action/Drawer';
import Dropdown from '@/components/action/Dropdown';
import Modal from '@/components/action/Modal';
import Avatar from '@/components/data/Avatar';
import Badge from '@/components/data/Badge';
import SimpleTable from '@/components/data/SimpleTable';
import Tag from '@/components/data/Tag';
import Tooltip from '@/components/data/Tooltip';
import Alert from '@/components/feedback/Alert';
import Progress from '@/components/feedback/Progress';
import Skeleton from '@/components/feedback/Skeleton';
import Toast from '@/components/feedback/Toast';
import Typography from '@/components/foundation/Typography';
import ColorScalePreview from '@/pages/components/foundation/colors/ColorScalePreview';
import CountUp from '@/components/interaction/CountUp';
import SplitText from '@/components/interaction/SplitText';
import Sticker from '@/components/interaction/Sticker';
import DatePicker from '@/components/input/DatePicker';
import Checkbox from '@/components/input/Checkbox';
import Radio from '@/components/input/Radio';
import Switch from '@/components/input/Switch';
import TextInput from '@/components/input/TextInput';
import UploadDropzone from '@/components/input/UploadDropzone';
import Divider from '@/components/layout/Divider';
import FlexWrapper from '@/components/layout/FlexWrapper';
import Grid from '@/components/layout/Grid';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Pagination from '@/components/navigation/Pagination';
import Tabs from '@/components/navigation/Tabs';
import { designSystemMenus } from '@/constants/common';
import { Link, useParams } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';

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
  preview: React.ReactNode;
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

const tableColumns = [
  { label: 'Name', key: 'name' },
  { label: 'Role', key: 'role' },
  { label: 'Status', key: 'status' },
];

const tableData = [
  { id: '1', name: 'Alice Kim', role: 'Designer', status: 'Active' },
  { id: '2', name: 'Bob Lee', role: 'Engineer', status: 'Reviewing' },
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
        <ColorScalePreview title={palette.name} prefix={palette.prefix as 'primary' | 'secondary' | 'neutral'} />
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

const ActionDropdownPreview = () => (
  <Dropdown
    label="Open menu"
    items={[
      { type: 'item', id: 'edit', label: 'Edit' },
      { type: 'item', id: 'duplicate', label: 'Duplicate' },
      {
        type: 'submenu',
        id: 'share',
        label: 'Share',
        items: [
          { type: 'item', id: 'copy-link', label: 'Copy link' },
          { type: 'item', id: 'email', label: 'Email invite' },
        ],
      },
    ]}
  />
);

const ActionModalPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Share design review"
        confirmText="Send"
      >
        Invite collaborators and collect feedback in one place.
      </Modal>
    </>
  );
};

const ActionDrawerPreview = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" color="neutral" onClick={() => setIsOpen(true)}>
        Open drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Inspector"
      >
        <FlexWrapper direction="col" items="start" gap={3}>
          <Typography variant="B1">Spacing</Typography>
          <Typography
            variant="B2"
            classes="!font-normal !text-neutral-500 dark:!text-neutral-400"
          >
            Adjust padding, layout, and section structure from a contextual side
            panel.
          </Typography>
        </FlexWrapper>
      </Drawer>
    </>
  );
};

const InputTextPreview = () => {
  const [value, setValue] = useState('Design system');

  return (
    <TextInput
      label="Project name"
      value={value}
      placeholder="Enter a name"
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

const InputCheckboxPreview = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      label="Enable notifications"
      checked={checked}
      onChange={({ checked: nextChecked }) => setChecked(nextChecked)}
      size="md"
    />
  );
};

const InputRadioPreview = () => {
  const [value, setValue] = useState('team');

  return (
    <Radio
      title="Audience"
      value={value}
      onChange={setValue}
      options={[
        {
          id: 'team',
          label: 'Team',
          desc: 'Share internally with the product team.',
        },
        {
          id: 'client',
          label: 'Client',
          desc: 'Prepare a presentation-friendly version.',
        },
      ]}
    />
  );
};

const InputSwitchPreview = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      label="Auto save"
      description="Save changes automatically while editing."
      checked={checked}
      onChange={setChecked}
    />
  );
};

const InputDatePickerPreview = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <DatePicker
      value={value}
      onChange={(nextValue) => setValue(nextValue as Date | null)}
    />
  );
};

const InputUploadDropzonePreview = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <UploadDropzone
      files={files}
      onChange={setFiles}
      multiple
      helperText="Drop files here or browse from your device."
    />
  );
};

const NavigationPaginationPreview = () => {
  const [page, setPage] = useState(3);

  return (
    <Pagination
      currentPage={page}
      totalPages={8}
      siblingCount={1}
      onPageChange={setPage}
    />
  );
};

const NavigationTabsPreview = () => {
  const [value, setValue] = useState('overview');

  return (
    <Tabs
      value={value}
      onChange={setValue}
      items={[
        {
          id: 'overview',
          label: 'Overview',
          content: 'Overview content for the selected tab.',
        },
        {
          id: 'activity',
          label: 'Activity',
          content: 'Recent updates, history, and collaboration notes.',
        },
        {
          id: 'settings',
          label: 'Settings',
          content: 'Configuration and behavior options for this workspace.',
        },
      ]}
    />
  );
};

const FeedbackSkeletonPreview = () => (
  <FlexWrapper direction="col" items="start" gap={3} classes="w-full">
    <Skeleton width="40%" height={18} />
    <Skeleton width="100%" height={16} />
    <Skeleton width="82%" height={16} />
    <Skeleton variant="rect" width="100%" height={120} />
  </FlexWrapper>
);

const LayoutGridPreview = () => (
  <Grid cols={3} gap={3} classes="w-full">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <div
        key={item}
        className="flex h-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
      >
        Cell {item}
      </div>
    ))}
  </Grid>
);

const LayoutDividerPreview = () => (
  <FlexWrapper classes="w-full" justify="center" items="center" gap={4}>
    <Typography variant="B1">Content</Typography>
    <Divider orientation="vertical" classes="!min-h-8" />
    <Typography variant="B1">Details</Typography>
    <Divider orientation="vertical" classes="!min-h-8" />
    <Typography variant="B1">Actions</Typography>
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
      preview: (
        <FlexWrapper classes="w-full" justify="center" gap={3}>
          <Button>Primary</Button>
          <Button variant="outline" color="neutral">
            Secondary
          </Button>
          <Button variant="clear" color="danger">
            Destructive
          </Button>
        </FlexWrapper>
      ),
    },
    dropdown: {
      description:
        'Dropdown reveals grouped actions without leaving the current layout.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <ActionDropdownPreview />
        </FlexWrapper>
      ),
    },
    modal: {
      description:
        'Modal interrupts the flow to confirm, review, or complete focused tasks.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <ActionModalPreview />
        </FlexWrapper>
      ),
    },
    drawer: {
      description:
        'Drawer opens contextual tools from the edge of the screen while keeping the main page visible.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <ActionDrawerPreview />
        </FlexWrapper>
      ),
    },
  },
  input: {
    textinput: {
      description:
        'TextInput captures short form values with optional labels, prefixes, and validation states.',
      preview: <InputTextPreview />,
    },
    checkbox: {
      description:
        'Checkbox supports independent binary selection and compact preference lists.',
      preview: <InputCheckboxPreview />,
    },
    radio: {
      description:
        'Radio groups exclusive options with room for supporting descriptions.',
      preview: <InputRadioPreview />,
    },
    switch: {
      description:
        'Switch handles immediate on/off preferences and setting toggles.',
      preview: <InputSwitchPreview />,
    },
    datepicker: {
      description:
        'DatePicker helps users choose dates through direct calendar interaction.',
      preview: (
        <FlexWrapper classes="w-full max-w-sm" justify="center">
          <InputDatePickerPreview />
        </FlexWrapper>
      ),
    },
    uploadDropzone: {
      description:
        'UploadDropzone offers click or drag-and-drop file selection in a large target area.',
      preview: <InputUploadDropzonePreview />,
    },
  },
  navigation: {
    pagination: {
      description:
        'Pagination helps users move through larger result sets one page at a time.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <NavigationPaginationPreview />
        </FlexWrapper>
      ),
    },
    tabs: {
      description:
        'Tabs switch between related content panels without leaving the current screen.',
      preview: <NavigationTabsPreview />,
    },
    breadcrumb: {
      description:
        'Breadcrumb reflects position in the hierarchy and gives quick access to parent levels.',
      preview: (
        <BreadCrumb
          items={[
            { label: 'Home' },
            { label: 'Components' },
            { label: 'Navigation', href: '/components/navigation' },
          ]}
        />
      ),
    },
  },
  dataDisplay: {
    avatar: {
      description:
        'Avatar previews identity with image, initials, and presence.',
      preview: (
        <FlexWrapper classes="w-full" justify="center" gap={4}>
          <Avatar src="/sticker/alice.png" name="Alice Kim" status="online" />
          <Avatar src="/sticker/bob.png" name="Bob Lee" status="busy" />
          <Avatar name="Charlie Park" status="offline" />
        </FlexWrapper>
      ),
    },
    badge: {
      description:
        'Badge surfaces compact status labels and semantic emphasis.',
      preview: (
        <FlexWrapper classes="w-full" justify="center" gap={3}>
          <Badge label="Neutral" />
          <Badge label="Primary" variant="primary" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
        </FlexWrapper>
      ),
    },
    table: {
      description:
        'Table organizes structured content in a readable, scannable format.',
      preview: <SimpleTable columns={tableColumns} data={tableData} />,
    },
    tag: {
      description:
        'Tag highlights classification and filters with a stronger boundary.',
      preview: (
        <FlexWrapper classes="w-full" justify="center" gap={3}>
          <Tag label="Design System" />
          <Tag label="Featured" variant="primary" />
          <Tag label="Preview" size="lg" />
        </FlexWrapper>
      ),
    },
    tooltip: {
      description:
        'Tooltip reveals lightweight supporting context on hover or focus.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <Tooltip content="Helpful supporting information appears here.">
            <Button variant="outline" color="neutral">
              Hover target
            </Button>
          </Tooltip>
        </FlexWrapper>
      ),
    },
  },
  feedback: {
    alert: {
      description:
        'Alert communicates inline status and attention states inside page content.',
      preview: (
        <Alert
          title="Workspace updated"
          description="All team members now see the latest navigation changes."
          variant="success"
        />
      ),
    },
    progress: {
      description:
        'Progress communicates completion state for uploads, setup, and multistep flows.',
      preview: <Progress value={68} showValue />,
    },
    skeleton: {
      description:
        'Skeleton reserves layout while content is loading, reducing visual jumps.',
      preview: <FeedbackSkeletonPreview />,
    },
    toast: {
      description:
        'Toast provides lightweight, temporary confirmation without interrupting the workflow.',
      preview: (
        <FlexWrapper classes="w-full" justify="center">
          <Toast
            title="Changes saved"
            description="The page layout has been updated successfully."
            variant="success"
          />
        </FlexWrapper>
      ),
    },
  },
  layout: {
    grid: {
      description:
        'Grid provides repeatable column structure for cards, dashboards, and responsive compositions.',
      preview: <LayoutGridPreview />,
    },
    divider: {
      description:
        'Divider separates related groups while preserving a clean and lightweight layout rhythm.',
      preview: <LayoutDividerPreview />,
    },
  },
  interaction: {
    splitText: {
      description:
        'SplitText reveals content character by character to add motion emphasis to key moments.',
      preview: (
        <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-8 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
          <SplitText
            text="Animate a headline as it comes into view."
            variant="H3"
            replayOnView
          />
        </div>
      ),
    },
    sticker: {
      description:
        'Sticker creates a playful board where visual elements can be placed and arranged.',
      preview: <Sticker boardWidth={520} boardHeight={280} />,
    },
    countUp: {
      description:
        'CountUp draws attention to metrics and KPIs with animated number transitions.',
      preview: (
        <FlexWrapper classes="w-full" justify="center" gap={8}>
          <CountUp
            from={0}
            to={1280}
            duration={2}
            className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
          />
          <CountUp
            from={0}
            to={98.6}
            duration={2}
            className="text-4xl font-bold text-neutral-900 dark:text-neutral-50"
          />
        </FlexWrapper>
      ),
    },
  },
};

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
            <div className="w-full">{preview.preview}</div>
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
        {category.items.map((item) => (
          <PreviewBlock
            key={item.id}
            item={item}
            preview={categoryPreviewMap[item.id]}
          />
        ))}
      </FlexWrapper>
    </FlexWrapper>
  );
}
