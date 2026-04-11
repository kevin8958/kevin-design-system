import { fireEvent, render, screen } from '@testing-library/react';
import { LuBell, LuShare2, LuTrash2 } from 'react-icons/lu';
import ActionSheet from './ActionSheet';

const items: Action.ActionSheetItem[] = [
  { id: 'share', label: 'Share', description: 'Send this item to another app', icon: <LuShare2 /> },
  { id: 'notify', label: 'Notify me', description: 'Create a reminder for later', icon: <LuBell /> },
  { id: 'delete', label: 'Delete', description: 'Remove this item permanently', icon: <LuTrash2 />, tone: 'danger' },
];

describe('ActionSheet', () => {
  it('renders items when open', () => {
    render(<ActionSheet isOpen title="Quick actions" items={items} contained />);

    expect(screen.getByText('Quick actions')).toBeInTheDocument();
    expect(screen.getAllByText('Share').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0);
  });

  it('calls onSelect and onClose when choosing an action', () => {
    const handleSelect = jest.fn();
    const handleClose = jest.fn();

    render(
      <ActionSheet
        isOpen
        items={items}
        contained
        onSelect={handleSelect}
        onClose={handleClose}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /share send this item to another app/i }));

    expect(handleSelect).toHaveBeenCalledWith('share');
    expect(handleClose).toHaveBeenCalled();
  });
});
