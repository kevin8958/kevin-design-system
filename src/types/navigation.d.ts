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

  type StepperSize = 'sm' | 'md' | 'lg';
  type StepperOrientation = 'horizontal' | 'vertical';

  type StepperItem = {
    id: string;
    label: string;
    description?: string;
    disabled?: boolean;
  };

  interface TabsProps {
    items: TabsItem[];
    value: string;
    onChange?: (id: string) => void;
    disabled?: boolean;
    size?: TabsSize;
    classes?: string;
  }

  interface StepperProps {
    items: StepperItem[];
    value: string;
    onChange?: (id: string) => void;
    size?: StepperSize;
    orientation?: StepperOrientation;
    allowStepClick?: boolean;
    classes?: string;
  }
}
