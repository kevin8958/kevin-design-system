import { cva } from 'class-variance-authority';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/libs/utils';

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

const BreadCrumb = ({ items, classes }: Navigation.BreadCrumbProps) => {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Breadcrumb" className={cn('py-2', classes)}>
      <ol className="flex items-center gap-1.5">
        {items.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1.5"
            >
              {item.href && !isActive ? (
                <Link
                  to={item.href}
                  className={breadcrumbVariants({ status: 'inactive' })}
                >
                  {item.label}
                </Link>
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
                  className="text-[10px] text-neutral-600 dark:text-neutral-500"
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
