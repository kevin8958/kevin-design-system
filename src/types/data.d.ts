namespace Data {
  type AvatarSize = 'sm' | 'md' | 'lg';
  type AvatarStatus = 'online' | 'offline' | 'busy';
  type BadgeSize = 'sm' | 'md' | 'lg';
  type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  type TagSize = 'sm' | 'md' | 'lg';
  type TagVariant = 'neutral' | 'primary';

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

  interface TableProps {
    columns: Column[];
    data: Row[];
  }

  interface SimpleTableProps {
    columns: Column[];
    data: Row[];
  }
}
