namespace Data {
  type Column = {
    key: string;
    label: string;
  };

  type Row = {
    id: string;
    [key: string]: React.ReactNode;
  };

  type AvatarSize = 'sm' | 'md' | 'lg';
  type AvatarStatus = 'online' | 'offline' | 'busy';
  type BadgeSize = 'sm' | 'md' | 'lg';
  type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  type TagSize = 'sm' | 'md' | 'lg';
  type TagVariant = 'neutral' | 'primary';
  type MetricCardSize = 'sm' | 'md' | 'lg';
  type MetricCardTrend = 'up' | 'down' | 'neutral';
  type EmptyStateSize = 'sm' | 'md' | 'lg';
  type DescriptionListSize = 'sm' | 'md' | 'lg';
  type DescriptionListColumns = 1 | 2;
  type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
  type TooltipColor =
    | 'primary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  interface AvatarProps {
    src?: string;
    name?: string;
    alt?: string;
    size?: AvatarSize;
    status?: AvatarStatus;
    classes?: string;
  }

  interface BadgeProps {
    label: string;
    size?: BadgeSize;
    variant?: BadgeVariant;
    classes?: string;
  }

  interface TagProps {
    label: string;
    size?: TagSize;
    variant?: TagVariant;
    classes?: string;
  }

  interface MetricCardProps {
    title: string;
    value: number;
    change?: number;
    size?: MetricCardSize;
    trend?: MetricCardTrend;
    prefix?: string;
    suffix?: string;
    changeSuffix?: string;
    decimals?: number;
    changeDecimals?: number;
    animated?: boolean;
    duration?: number;
    classes?: string;
  }

  interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction?: React.ReactNode;
    size?: EmptyStateSize;
    classes?: string;
  }

  type DescriptionListItem = {
    label: string;
    value: React.ReactNode;
    hint?: React.ReactNode;
  };

  interface DescriptionListProps {
    items: DescriptionListItem[];
    size?: DescriptionListSize;
    columns?: DescriptionListColumns;
    classes?: string;
  }

  interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: TooltipPosition;
    color?: TooltipColor;
    classes?: string;
  }

  interface TableProps {
    columns: Column[];
    data: Row[];
  }

  interface SimpleTableProps {
    columns: Column[];
    data: Row[];
  }
}
