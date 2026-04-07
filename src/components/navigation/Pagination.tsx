import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { LuChevronLeft, LuChevronRight, LuEllipsis } from 'react-icons/lu';

const paginationButtonVariants = cva(
  'inline-flex size-9 items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      state: {
        default:
          'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
        active:
          'border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200',
        ghost:
          'border-transparent bg-transparent text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const getPageRange = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
) => {
  const totalPageNumbers = siblingCount * 2 + 3;

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);
  const pages: Array<number | 'dots'> = [1];

  if (leftSiblingIndex > 2) {
    pages.push('dots');
  } else {
    for (let page = 2; page < leftSiblingIndex; page += 1) {
      pages.push(page);
    }
  }

  for (let page = leftSiblingIndex; page <= rightSiblingIndex; page += 1) {
    pages.push(page);
  }

  if (rightSiblingIndex < totalPages - 1) {
    pages.push('dots');
  } else {
    for (let page = rightSiblingIndex + 1; page < totalPages; page += 1) {
      pages.push(page);
    }
  }

  pages.push(totalPages);

  return pages;
};

const Pagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  disabled = false,
  classes,
  onPageChange,
}: Navigation.PaginationProps) => {
  const safeTotalPages = Math.max(1, totalPages);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const pages = getPageRange(safeCurrentPage, safeTotalPages, siblingCount);

  const movePage = (page: number) => {
    if (disabled) return;
    if (page < 1 || page > safeTotalPages || page === safeCurrentPage) return;
    onPageChange?.(page);
  };

  return (
    <nav
      aria-label="Pagination"
      className={classNames(
        'flex flex-wrap items-center justify-center gap-2',
        classes,
      )}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={disabled || safeCurrentPage === 1}
        onClick={() => movePage(safeCurrentPage - 1)}
        className={paginationButtonVariants({ state: 'ghost' })}
      >
        <LuChevronLeft size={16} />
      </button>

      {pages.map((page, index) =>
        page === 'dots' ? (
          <span
            key={`dots-${index}`}
            className="inline-flex size-9 items-center justify-center text-neutral-400 dark:text-neutral-500"
            aria-hidden="true"
          >
            <LuEllipsis size={16} />
          </span>
        ) : (
          <button
            key={page}
            type="button"
            aria-label={`Page ${page}`}
            aria-current={page === safeCurrentPage ? 'page' : undefined}
            disabled={disabled}
            onClick={() => movePage(Number(page))}
            className={paginationButtonVariants({
              state: page === safeCurrentPage ? 'active' : 'default',
            })}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        aria-label="Next page"
        disabled={disabled || safeCurrentPage === safeTotalPages}
        onClick={() => movePage(safeCurrentPage + 1)}
        className={paginationButtonVariants({ state: 'ghost' })}
      >
        <LuChevronRight size={16} />
      </button>
    </nav>
  );
};

export default Pagination;
