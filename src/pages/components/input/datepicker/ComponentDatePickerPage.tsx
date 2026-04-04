'use client';

import DatePickerSizeGuide from '@/pages/components/input/datepicker/DatePickerSizeGuide';
import DatePickerStateGuide from '@/pages/components/input/datepicker/DatePickerStateGuide';
import DatePickerTypeGuide from '@/pages/components/input/datepicker/DatePickerTypeGuide';
import BreadCrumb from '@/components/navigation/BreadCrumb';
import Typography from '@/components/foundation/Typography';
import FlexWrapper from '@/components/layout/FlexWrapper';
import SimpleTable from '@/components/data/SimpleTable';
import Button from '@/components/action/Button';
import { propsColumn, STORYBOOK_URL } from '@/constants/common';
import { LuExternalLink } from 'react-icons/lu';

export default function ComponentDatePickerPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Input', href: '/components/input' },
    { label: 'DatePicker', href: '/components/input/datepicker' },
  ];

  const handleOpenStorybook = () => {
    window.open(
      `${STORYBOOK_URL}?path=/docs/components-input-datepicker--docs`,
      '_blank',
    );
  };

  return (
    <FlexWrapper classes="w-full pb-20 px-4" direction="col" justify="start">
      <BreadCrumb items={breadcrumbItems} />

      <FlexWrapper justify="center">
        <FlexWrapper classes="w-full !gap-10" items="start" direction="col">
          <FlexWrapper justify="start" items="end" classes="w-full">
            <Typography variant="H1">DatePicker</Typography>
            <Button
              classes="mb-2"
              variant="outline"
              color="neutral"
              size="sm"
              icon={<LuExternalLink size={14} />}
              iconPosition="right"
              onClick={handleOpenStorybook}
            >
              Storybook
            </Button>
          </FlexWrapper>
          {/* 주요 기능 가이드 섹션 */}
          <DatePickerTypeGuide /> {/* Single & Range 선택 모드 설명 */}
          <DatePickerSizeGuide />
          <DatePickerStateGuide />
          <FlexWrapper classes="w-full" items="start" direction="col">
            <Typography variant="H3">Props</Typography>
            <SimpleTable columns={propsColumn} data={propsData} />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
}

const propsData = [
  {
    id: '1',
    property: 'value',
    type: 'Date | null',
    default: 'null',
    description: 'The selected date object for single selection mode.',
  },
  {
    id: '2',
    property: 'onChange',
    type: '(date: Date | null | [Date | null, Date | null]) => void',
    default: 'undefined',
    description:
      'Callback function triggered when a date or range is selected.',
  },
  {
    id: '3',
    property: 'isRange',
    type: 'boolean',
    default: 'false',
    description: 'If true, enables date range selection (start and end date).',
  },
  {
    id: '4',
    property: 'startDate / endDate',
    type: 'Date | null',
    default: 'null',
    description:
      'Required props when isRange is true to manage the selected interval.',
  },
  {
    id: '5',
    property: 'variant',
    type: ["'contain'", "'outline'", "'clear'"],
    default: "'contain'",
    description: 'Visual style of the input field.',
  },
  {
    id: '6',
    property: 'size',
    type: ["'sm'", "'md'", "'lg'"],
    default: "'md'",
    description: 'Height and internal padding of the input field.',
  },
  {
    id: '7',
    property: 'isError',
    type: 'boolean',
    default: 'false',
    description: 'Triggers the error state styling (danger border).',
  },
  {
    id: '8',
    property: 'minDate / maxDate',
    type: 'Date',
    default: 'undefined',
    description: 'Restricts the selectable date range in the calendar.',
  },
  {
    id: '9',
    property: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents user interaction with the input and calendar.',
  },
  {
    id: '10',
    property: 'placeholder',
    type: 'string',
    default: "'Select date'",
    description: 'Text displayed when no date is selected.',
  },
];
