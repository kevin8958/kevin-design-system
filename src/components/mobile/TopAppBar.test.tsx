import { render, screen } from '@testing-library/react';
import Button from '@/components/action/Button';
import { LuArrowLeft, LuSearch } from 'react-icons/lu';
import TopAppBar from './TopAppBar';

describe('TopAppBar', () => {
  it('renders title and subtitle', () => {
    render(<TopAppBar title="Dashboard" subtitle="April overview" />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('April overview')).toBeInTheDocument();
  });

  it('renders leading and trailing actions', () => {
    render(
      <TopAppBar
        title="Inbox"
        leading={
          <Button aria-label="Go back" variant="clear" color="neutral" size="sm">
            <LuArrowLeft />
          </Button>
        }
        actions={
          <Button aria-label="Search" variant="clear" color="neutral" size="sm">
            <LuSearch />
          </Button>
        }
      />,
    );

    expect(screen.getByRole('button', { name: /go back/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('applies centered alignment classes', () => {
    render(<TopAppBar title="Explore" align="center" />);

    expect(screen.getByText('Explore').parentElement).toHaveClass('items-center');
  });
});
