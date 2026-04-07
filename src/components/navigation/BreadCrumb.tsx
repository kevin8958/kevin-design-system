import classNames from 'classnames';
import { cva } from 'class-variance-authority';
import { FaChevronRight } from 'react-icons/fa';

const breadcrumbVariants = cva(
  'flex items-center gap-1.5 text-sm transition-all duration-200 ease-in-out',
  {
    variants: {
      status: {
        active: 'font-bold text-secondary-500 dark:text-primary-400',
        inactive: 'text-neutral-600! font-semibold dark:text-neutral-500!',
      },
    },
    defaultVariants: {
      status: 'inactive',
    },
  },
);

const BreadCrumb = ({ items, className }: Navigation.BreadCrumbProps) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <nav aria-label="Breadcrumb" className={classNames('py-2', className)}>
      <ol className="flex items-center gap-1.5">
        {items.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5"
            >
              {item.href && !isActive ? (
                <a
                  href={item.href}
                  className={breadcrumbVariants({ status: 'inactive' })}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={breadcrumbVariants({
                    status: isActive ? 'active' : 'inactive',
                  })}
                >
                  {item.label}
                </span>
              )}

              {!isActive && (
                <FaChevronRight
                  className="text-[10px] text-neutral-600 dark:text-neutral-600"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
