export const appCityOptions: App.AppSelectOption[] = [
  {
    label: 'Seoul, KR',
    value: 'seoul',
    description: 'Fastest shipping SLA',
    keywords: ['asia', 'korea'],
  },
  {
    label: 'Tokyo, JP',
    value: 'tokyo',
    description: 'Balanced latency profile',
    keywords: ['asia', 'japan'],
  },
  {
    label: 'San Francisco, US',
    value: 'sf',
    description: 'US West operations hub',
    keywords: ['america', 'west coast'],
  },
  {
    label: 'Berlin, DE',
    value: 'berlin',
    description: 'EU regional fallback',
    keywords: ['europe', 'germany'],
  },
];

export const appStatusOptions: App.AppSelectOption[] = [
  { label: 'Draft', value: 'draft', keywords: ['pending'] },
  { label: 'Review', value: 'review', keywords: ['qa'] },
  { label: 'Published', value: 'published', keywords: ['live', 'released'] },
  {
    label: 'Archived',
    value: 'archived',
    description: 'Hidden from end users',
    keywords: ['inactive'],
  },
];

export const appRadioOptions: App.AppRadioOption[] = [
  {
    id: 'push',
    label: 'Push notification',
    desc: 'Use device notifications for immediate updates.',
  },
  {
    id: 'email',
    label: 'Email digest',
    desc: 'Bundle updates into a single summary email.',
  },
  {
    id: 'none',
    label: 'Do not notify',
    desc: 'Only surface changes inside the inbox.',
  },
];

export const appUploadFiles: App.AppUploadFile[] = [
  { id: 'brief', name: 'product-brief.pdf', sizeLabel: '2.1 MB' },
  { id: 'cover', name: 'cover-shot.png', sizeLabel: '820 KB', status: 'uploading' },
];
