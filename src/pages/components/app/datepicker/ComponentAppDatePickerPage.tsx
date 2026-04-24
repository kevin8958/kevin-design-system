'use client';

import { useState } from 'react';
import AppDatePickerControllerGuide from '@/pages/components/app/datepicker/AppDatePickerControllerGuide';
import AppDatePickerStateGuide from '@/pages/components/app/datepicker/AppDatePickerStateGuide';
import AppDatePickerTypeGuide from '@/pages/components/app/datepicker/AppDatePickerTypeGuide';
import AppDocsPageShell from '@/pages/components/app/common/AppDocsPageShell';

const breadcrumbItems = [
  { label: 'Components', href: '/components' },
  { label: 'App' },
  { label: 'DatePicker', href: '/components/app/datepicker' },
];

const propsData = [
  { id: '1', property: 'value / defaultValue', type: 'Date | null', default: 'null', description: 'Single-date value in controlled or uncontrolled mode.' },
  { id: '2', property: 'isRange', type: 'boolean', default: 'false', description: 'Switches the picker into date-range selection.' },
  { id: '3', property: 'startDate / endDate', type: 'Date | null', default: 'null', description: 'Controlled range values when isRange is enabled.' },
  { id: '4', property: 'onChange', type: '(value: Date | null | [Date | null, Date | null]) => void', default: 'undefined', description: 'Called after selecting a date or range.' },
  { id: '5', property: 'variant', type: ['contain', 'outline', 'clear'], default: 'outline', description: 'Visual treatment of the trigger field.' },
  { id: '6', property: 'minDate / maxDate', type: 'Date', default: 'undefined', description: 'Restricts selectable calendar dates.' },
];

export default function ComponentAppDatePickerPage() {
  const [size, setSize] = useState<App.AppInputSize>('md');

  return (
    <AppDocsPageShell
      breadcrumbItems={breadcrumbItems}
      description="A lightweight React Native calendar field for single dates and short ranges."
      propsData={propsData}
      title="App DatePicker"
    >
      <AppDatePickerControllerGuide onSizeChange={setSize} size={size} />
      <AppDatePickerTypeGuide size={size} />
      <AppDatePickerStateGuide size={size} />
    </AppDocsPageShell>
  );
}
