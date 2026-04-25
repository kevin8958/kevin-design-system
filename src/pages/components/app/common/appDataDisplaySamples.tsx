import AppBadge from '@/components/app/AppBadge';
import AppTag from '@/components/app/AppTag';

export const sampleAvatarImage =
  'data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112"%3E%3Crect width="112" height="112" rx="56" fill="%23BBD5FF"/%3E%3Ccircle cx="56" cy="42" r="20" fill="%230057C2"/%3E%3Cpath d="M24 94c8-18 23-28 32-28s24 10 32 28" fill="%230057C2"/%3E%3C/svg%3E';

export const appDescriptionItems: App.AppDescriptionListItem[] = [
  {
    label: 'Workspace',
    value: 'Design System Team',
    hint: 'Primary product org',
  },
  {
    label: 'Owner',
    value: 'Kevin Park',
    hint: 'Updated 2 hours ago',
  },
  {
    label: 'Region',
    value: 'Vancouver, CA',
    hint: 'Pacific time',
  },
  {
    label: 'Release',
    value: '2026.04',
    hint: 'Beta channel',
  },
];

export const appTableColumns: App.AppTableColumn[] = [
  { key: 'member', label: 'Member', width: 160 },
  { key: 'role', label: 'Role', width: 150 },
  { key: 'status', label: 'Status', width: 130 },
  { key: 'region', label: 'Region', width: 130 },
];

export const appTableRows: App.AppTableRow[] = [
  {
    id: 'kevin',
    member: 'Kevin Park',
    role: <AppTag label="Owner" variant="primary" />,
    status: <AppBadge label="Active" variant="success" />,
    region: 'Vancouver',
  },
  {
    id: 'maria',
    member: 'Maria Kim',
    role: <AppTag label="Designer" />,
    status: <AppBadge label="Review" variant="warning" />,
    region: 'Seoul',
  },
  {
    id: 'jordan',
    member: 'Jordan Lee',
    role: <AppTag label="Engineer" />,
    status: <AppBadge label="Offline" variant="neutral" />,
    region: 'Tokyo',
  },
];
