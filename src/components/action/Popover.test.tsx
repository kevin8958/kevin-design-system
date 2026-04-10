import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Button from '@/components/action/Button';
import Popover from './Popover';

describe('Popover', () => {
  it('opens when the trigger is clicked', () => {
    render(
      <Popover
        trigger={<Button>Open</Button>}
        title="Popover title"
        description="Popover description"
      >
        Popover content
      </Popover>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open' }));

    expect(screen.getByText('Popover title')).toBeInTheDocument();
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('closes when clicking outside', async () => {
    render(
      <Popover trigger={<Button>Open</Button>} title="Popover title">
        Popover content
      </Popover>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('Popover content')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    fireEvent.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
    });
  });

  it('renders open content when defaultOpen is true', () => {
    render(
      <Popover
        trigger={<Button>Open</Button>}
        title="Popover title"
        defaultOpen
        portal={false}
      >
        Popover content
      </Popover>,
    );

    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('does not open when disabled', () => {
    render(
      <Popover
        trigger={<Button disabled>Open</Button>}
        title="Popover title"
        disabled
      >
        Popover content
      </Popover>,
    );

    fireEvent.click(screen.getByText('Open'));

    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
  });
});
