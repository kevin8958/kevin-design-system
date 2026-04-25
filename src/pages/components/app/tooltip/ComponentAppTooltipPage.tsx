'use client';

import { useState } from 'react';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';
import AppTooltipControllerGuide from '@/pages/components/app/tooltip/AppTooltipControllerGuide';
import AppTooltipPositionGuide from '@/pages/components/app/tooltip/AppTooltipPositionGuide';
import AppTooltipTypeGuide from '@/pages/components/app/tooltip/AppTooltipTypeGuide';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'Tooltip', href: '/components/app/tooltip' },
];

const propsData = [
  { id: '1', property: 'content', type: 'ReactNode', default: 'undefined', description: 'Tooltip content rendered inside the floating surface.' },
  { id: '2', property: 'children', type: 'ReactNode', default: 'undefined', description: 'Trigger element that toggles the tooltip.' },
  { id: '3', property: 'position', type: ['top', 'right', 'bottom', 'left'], default: 'top', description: 'Preferred placement relative to the trigger.' },
  { id: '4', property: 'color', type: ['neutral', 'primary', 'info', 'success', 'warning', 'danger'], default: 'neutral', description: 'Tooltip surface color treatment.' },
  { id: '5', property: 'open / defaultOpen', type: 'boolean', default: 'false', description: 'Controlled or uncontrolled tooltip visibility.' },
];

export default function ComponentAppTooltipPage() {
  const [color, setColor] = useState<App.AppSemanticColor>('neutral');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A React Native tooltip for short explanatory hints attached to a nearby trigger."
      propsData={propsData}
      title="App Tooltip"
    >
      <AppTooltipControllerGuide color={color} onColorChange={setColor} />
      <AppTooltipTypeGuide color={color} />
      <AppTooltipPositionGuide color={color} />
    </AppDocsPageShell>
  );
}
