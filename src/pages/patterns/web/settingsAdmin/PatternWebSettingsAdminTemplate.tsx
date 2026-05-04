'use client';

import { useState } from 'react';
import ButtonGroup from '@/components/action/ButtonGroup';
import SimpleTable from '@/components/data/SimpleTable';
import Typography from '@/components/foundation/Typography';
import CodeExample from '@/components/interaction/CodeExample';
import FlexWrapper from '@/components/layout/FlexWrapper';
import PatternGuideSection from '@/pages/patterns/common/PatternGuideSection';
import PatternDocsPageShell from '@/pages/patterns/common/PatternDocsPageShell';
import type {
  SettingsAdminPatternConfig,
  SettingsAdminPreviewMode,
  SettingsAdminPreviewState,
} from '@/pages/patterns/common/settingsAdminPatternConfigs';
import WebSettingsAdminPreview from '@/pages/patterns/web/settingsAdmin/WebSettingsAdminPreview';

const compositionColumns = [
  { label: 'Component', key: 'property' },
  { label: 'Role', key: 'type' },
  { label: 'Why It Matters', key: 'description' },
];

export default function PatternWebSettingsAdminTemplate({
  config,
}: {
  config: SettingsAdminPatternConfig;
}) {
  const [state, setState] = useState<SettingsAdminPreviewState>('default');
  const [mode, setMode] = useState<SettingsAdminPreviewMode>('standard');

  return (
    <PatternDocsPageShell
      platform="web"
      categoryId="settings-admin"
      categoryLabel="Settings / Admin"
      patternId={config.id}
      title={config.title}
      description={config.webDescription}
    >
      <div className="w-full rounded-[28px] border border-neutral-200 bg-white/80 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/70">
        <FlexWrapper direction="col" items="start" gap={4} classes="w-full">
          <Typography variant="H4">Controller</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-600 dark:!text-neutral-300"
          >
            {config.webControllerDescription}
          </Typography>

          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                State
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Default', value: 'default' },
                  { label: 'Attention', value: 'attention' },
                  { label: 'Loading', value: 'loading' },
                ]}
                value={state}
                onChange={(next) =>
                  setState(next as SettingsAdminPreviewState)
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="C1" classes="uppercase font-mono opacity-60">
                Flow
              </Typography>
              <ButtonGroup
                color="neutral"
                size="sm"
                items={[
                  { label: 'Standard', value: 'standard' },
                  { label: 'Guided', value: 'guided' },
                ]}
                value={mode}
                onChange={(next) =>
                  setMode(next as SettingsAdminPreviewMode)
                }
              />
            </div>
          </div>
        </FlexWrapper>
      </div>

      {config.guides.map((guide, index) => (
        <PatternGuideSection
          key={`${config.id}-${guide.title}`}
          title={guide.title}
          description={guide.description}
          example={
            <CodeExample code={guide.code} className="w-full">
              <WebSettingsAdminPreview
                patternId={config.id}
                state={index === 0 ? state : (guide.previewState ?? state)}
                mode={index === 0 ? mode : (guide.previewMode ?? mode)}
              />
            </CodeExample>
          }
        />
      ))}

      <div className="w-full rounded-[28px] border border-dashed border-primary-200 bg-primary-50/50 p-6 dark:border-primary-400/20 dark:bg-primary-400/5">
        <FlexWrapper direction="col" items="start" gap={3}>
          <Typography variant="H4">Pattern Checklist</Typography>
          <Typography
            variant="B1"
            classes="!font-normal !text-neutral-700 dark:!text-neutral-300"
          >
            {config.checklist}
          </Typography>
        </FlexWrapper>
      </div>

      <FlexWrapper classes="w-full" items="start" direction="col">
        <Typography variant="H3">Included Components</Typography>
        <SimpleTable columns={compositionColumns} data={config.webCompositionRows} />
      </FlexWrapper>
    </PatternDocsPageShell>
  );
}
