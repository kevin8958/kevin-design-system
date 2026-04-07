namespace Navigation {
  /** BreadCrumb */
  interface BreadCrumbProps {
    items: Array<{ label: string; href?: string }>;
    className?: string;
  }

  /** Pagination */
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    // Number of visible pages shown on each side of the current page.
    siblingCount?: number;
    disabled?: boolean;
    classes?: string;
    onPageChange?: (page: number) => void;
  }

  /** Tabs */
  type TabsItem = {
    id: string;
    label: string;
    disabled?: boolean;
    content?: React.ReactNode;
  };

  type TabsSize = 'sm' | 'md' | 'lg';

  interface TabsProps {
    items: TabsItem[];
    value: string;
    onChange?: (id: string) => void;
    disabled?: boolean;
    size?: TabsSize;
    classes?: string;
  }
}
