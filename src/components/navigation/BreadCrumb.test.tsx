import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const renderWithRoute = (
  items: Navigation.BreadCrumbProps['items'],
  route = '/components/navigation/breadcrumb',
) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <BreadCrumb items={items} />
    </MemoryRouter>,
  );

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

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/',
    );
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
    expect(screen.getByText('Breadcrumb')).toHaveClass('text-primary-600');
  });

  it('applies custom className to the wrapper', () => {
    render(
      <MemoryRouter initialEntries={['/components/navigation/breadcrumb']}>
        <BreadCrumb items={items} className="mb-4" />
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation')).toHaveClass('mb-4');
  });
});
