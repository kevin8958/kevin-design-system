import { fireEvent, render, screen } from '@testing-library/react';
import {
  LuBell,
  LuHouse,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu';
import NavDrawer from './MobileNavDrawer';

const items = [
  { id: 'home', label: 'Home', description: 'Overview', icon: <LuHouse />, active: true },
  { id: 'activity', label: 'Activity', description: 'Recent actions', icon: <LuBell />, badge: 8 },
  { id: 'settings', label: 'Settings', description: 'Preferences', icon: <LuSettings2 /> },
  { id: 'profile', label: 'Profile', description: 'Account', icon: <LuUserRound />, disabled: true },
];

describe('NavDrawer', () => {
  it('renders title and items', () => {
    render(
      <NavDrawer
        isOpen
        title="Workspace"
        subtitle="Open sections quickly"
        items={items}
        contained
      />,
    );

    expect(screen.getByText('Workspace')).toBeInTheDocument();
    expect(screen.getByText('Activity')).toBeInTheDocument();
  });

  it('calls onChange when selecting an enabled item', () => {
    const handleChange = jest.fn();
    render(
      <NavDrawer isOpen items={items} onChange={handleChange} contained />,
    );

    fireEvent.click(screen.getByRole('button', { name: /activity/i }));

    expect(handleChange).toHaveBeenCalledWith('activity');
  });

  it('does not trigger change for disabled items', () => {
    const handleChange = jest.fn();
    render(
      <NavDrawer isOpen items={items} onChange={handleChange} contained />,
    );

    fireEvent.click(screen.getByRole('button', { name: /profile/i }));

    expect(handleChange).not.toHaveBeenCalled();
  });
});
