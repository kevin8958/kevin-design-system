import { fireEvent, render, screen } from '@testing-library/react';
import {
  LuBell,
  LuHouse,
  LuSearch,
  LuUserRound,
} from 'react-icons/lu';
import BottomNavigation from './BottomNavigation';

const items = [
  { id: 'home', label: 'Home', icon: <LuHouse /> },
  { id: 'search', label: 'Search', icon: <LuSearch /> },
  { id: 'alerts', label: 'Alerts', icon: <LuBell />, badge: 3 },
  { id: 'profile', label: 'Profile', icon: <LuUserRound /> },
];

describe('BottomNavigation', () => {
  it('marks the active item with aria-current', () => {
    render(<BottomNavigation items={items} value="search" />);

    expect(screen.getByRole('button', { name: /search/i })).toHaveAttribute(
      'aria-current',
      'page',
    );
  });

  it('calls onChange when tapping another item', () => {
    const handleChange = jest.fn();
    render(
      <BottomNavigation items={items} value="home" onChange={handleChange} />,
    );

    fireEvent.click(screen.getByRole('button', { name: /alerts/i }));

    expect(handleChange).toHaveBeenCalledWith('alerts');
  });

  it('does not trigger changes for disabled items', () => {
    const handleChange = jest.fn();
    render(
      <BottomNavigation
        items={[...items.slice(0, 3), { ...items[3], disabled: true }]}
        value="home"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /profile/i }));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('keeps badge highlighted even when the item is not active', () => {
    render(<BottomNavigation items={items} value="home" />);

    expect(screen.getByText('3')).toHaveClass('bg-secondary-500');
  });
});
