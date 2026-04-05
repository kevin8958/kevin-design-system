import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('Divider', () => {
  it('renders with separator role', () => {
    render(<Divider />);

    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('applies horizontal orientation', () => {
    render(<Divider orientation="horizontal" />);

    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'horizontal',
    );
    expect(screen.getByRole('separator')).toHaveClass('border-t');
  });

  it('applies vertical orientation', () => {
    render(<Divider orientation="vertical" />);

    expect(screen.getByRole('separator')).toHaveAttribute(
      'aria-orientation',
      'vertical',
    );
    expect(screen.getByRole('separator')).toHaveClass('border-l');
  });
});
