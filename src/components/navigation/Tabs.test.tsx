import { fireEvent, render, screen } from '@testing-library/react';
import Tabs from './Tabs';

const mockItems: Navigation.TabsItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: 'Overview panel',
  },
  {
    id: 'activity',
    label: 'Activity',
    content: 'Activity panel',
  },
  {
    id: 'settings',
    label: 'Settings',
    disabled: true,
    content: 'Settings panel',
  },
];

describe('Tabs', () => {
  it('renders the active tab and panel content', () => {
    render(<Tabs items={mockItems} value="activity" />);

    expect(screen.getByRole('tab', { name: /activity/i })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Activity panel');
  });

  it('calls onChange when another tab is clicked', () => {
    const handleChange = jest.fn();
    render(<Tabs items={mockItems} value="overview" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('tab', { name: /activity/i }));

    expect(handleChange).toHaveBeenCalledWith('activity');
  });

  it('does not call onChange for a disabled tab', () => {
    const handleChange = jest.fn();
    render(<Tabs items={mockItems} value="overview" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('tab', { name: /settings/i }));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('disables all tabs when disabled is true', () => {
    render(<Tabs items={mockItems} value="overview" disabled />);

    expect(screen.getByRole('tab', { name: /overview/i })).toBeDisabled();
    expect(screen.getByRole('tab', { name: /activity/i })).toBeDisabled();
  });

  it('applies size classes to the selected tab', () => {
    render(<Tabs items={mockItems} value="overview" size="lg" />);

    expect(screen.getByRole('tab', { name: /overview/i })).toHaveClass('py-3');
  });
});
