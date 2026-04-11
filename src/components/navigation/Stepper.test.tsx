import { fireEvent, render, screen } from '@testing-library/react';
import Stepper from './Stepper';

const items: Navigation.StepperItem[] = [
  {
    id: 'details',
    label: 'Details',
    description: 'Project basics and ownership',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Plan and payment method',
  },
  {
    id: 'review',
    label: 'Review',
    description: 'Double-check before launch',
  },
];

describe('Stepper', () => {
  it('renders the current step with aria-current', () => {
    render(<Stepper items={items} value="billing" />);

    expect(screen.getByRole('button', { name: /billing/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
  });

  it('calls onChange when a clickable step is selected', () => {
    const handleChange = jest.fn();
    render(<Stepper items={items} value="details" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: /review/i }));

    expect(handleChange).toHaveBeenCalledWith('review');
  });

  it('does not call onChange for disabled steps', () => {
    const handleChange = jest.fn();
    render(
      <Stepper
        items={[items[0], { ...items[1], disabled: true }, items[2]]}
        value="details"
        onChange={handleChange}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /billing/i }));

    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies vertical layout classes', () => {
    render(<Stepper items={items} value="billing" orientation="vertical" />);

    expect(screen.getByTestId('stepper')).toHaveClass('flex-col');
  });
});
