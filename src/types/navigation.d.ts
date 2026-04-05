namespace Navigation {
  /** BreadCrumb */
  interface BreadCrumbProps {
    items: Array<{ label: string; href?: string }>;
  }

  /** Pagination */
  interface PaginationProps {
    currentPage: number;
    totalPages: number;
    siblingCount?: number;
    disabled?: boolean;
    classes?: string;
    onPageChange?: (page: number) => void;
  }
}
