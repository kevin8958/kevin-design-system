import { render, screen } from '@testing-library/react';
import BreadCrumb from './BreadCrumb';

const renderWithRoute = (
  items: Navigation.BreadCrumbProps['items'],
  route = '/components/navigation/breadcrumb',
) => {
  window.history.pushState({}, '', route);
  return render(<BreadCrumb items={items} />);
};

describe('BreadCrumb', () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Navigation', href: '/components/navigation' },
    { label: 'Breadcrumb', href: '/components/navigation/breadcrumb' },
  ];

  it('renders breadcrumb navigation with all items', () => {
    renderWithRoute(items);

    expect(
      screen.getByRole('navigation', { name: /breadcrumb/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('renders previous items as links', () => {
    renderWithRoute(items);

    expect(screen.getByRole('link', { name: /navigation/i })).toHaveAttribute(
      'href',
      '/components/navigation',
    );
  });

  it('renders current item as text instead of a link', () => {
    renderWithRoute(items);

    expect(
      screen.queryByRole('link', { name: /breadcrumb/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toHaveClass('text-secondary-500');
    expect(screen.getByText('Breadcrumb')).toHaveClass('dark:text-primary-400');
  });

  it('applies custom className to the wrapper', () => {
    window.history.pushState({}, '', '/components/navigation/breadcrumb');
    render(<BreadCrumb items={items} className="mb-4" />);

    expect(screen.getByRole('navigation')).toHaveClass('mb-4');
  });
});
