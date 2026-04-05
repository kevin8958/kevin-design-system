namespace Data {
  type AvatarSize = 'sm' | 'md' | 'lg';
  type AvatarStatus = 'online' | 'offline' | 'busy';
  type BadgeSize = 'sm' | 'md' | 'lg';
  type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

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

  interface TableProps {
    columns: Column[];
    data: Row[];
  }

  interface SimpleTableProps {
    columns: Column[];
    data: Row[];
  }
}
