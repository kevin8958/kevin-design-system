import { render } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('renders with default line variant', () => {
    const { container } = render(<Skeleton />);

    expect(container.firstChild).toHaveClass('rounded-md');
  });

  it('renders circle variant', () => {
    const { container } = render(<Skeleton variant="circle" />);

    expect(container.firstChild).toHaveClass('rounded-full');
  });
});
