import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dropdown from './Dropdown';

const mockItems: Action.DropdownItem[] = [
  { type: 'item', id: 'item1', label: 'Item 1' },
  { type: 'item', id: 'item2', label: 'Item 2' },
  {
    type: 'group',
    id: 'group1',
    label: 'Group Label',
    items: [{ type: 'item', id: 'item3', label: 'Item 3' }],
  },
];

describe('Dropdown Component', () => {
  it('should render the trigger button with the label', () => {
    render(<Dropdown label="Menu" items={mockItems} />);
    const triggerButton = screen.getByRole('button', { name: /menu/i });
    expect(triggerButton).toBeInTheDocument();
  });

  it('should not show the menu by default', () => {
    render(<Dropdown label="Menu" items={mockItems} />);
    const menuItem = screen.queryByText('Item 1');
    expect(menuItem).not.toBeInTheDocument();
  });

  it('should open the menu when the trigger button is clicked', () => {
    render(<Dropdown label="Menu" items={mockItems} />);
    const triggerButton = screen.getByRole('button', { name: /menu/i });

    fireEvent.click(triggerButton);

    const menuItem = screen.getByText('Item 1');
    expect(menuItem).toBeInTheDocument();
  });

  it('should call onChange and close the menu when an item is clicked', async () => {
    const handleChange = jest.fn();
    render(<Dropdown label="Menu" items={mockItems} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: /menu/i }));

    const menuItem = screen.getByText('Item 1');
    fireEvent.click(menuItem);

    expect(handleChange).toHaveBeenCalledWith('item1');

    await waitFor(() => {
      expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });
  });

  it('should render group labels correctly', () => {
    render(<Dropdown label="Menu" items={mockItems} />);
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));

    const groupLabel = screen.getByText(/group label/i);
    expect(groupLabel).toBeInTheDocument();
  });

  it('should apply custom button classes', () => {
    const customClass = 'test-custom-class';
    render(
      <Dropdown label="Menu" items={mockItems} buttonClasses={customClass} />,
    );

    const triggerButton = screen.getByRole('button', { name: /menu/i });
    expect(triggerButton).toHaveClass(customClass);
  });

  it('should toggle the menu when the trigger is clicked multiple times', async () => {
    render(<Dropdown label="Menu" items={mockItems} />);
    const triggerButton = screen.getByRole('button', { name: /menu/i });

    // 열기
    fireEvent.click(triggerButton);
    expect(screen.getByText('Item 1')).toBeInTheDocument();

    // 닫기
    fireEvent.click(triggerButton);

    await waitFor(() => {
      expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });
  });
});
