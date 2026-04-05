import { render, screen } from '@testing-library/react';
import SplitText from './SplitText';

describe('SplitText', () => {
  beforeAll(() => {
    class MockIntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    Object.defineProperty(window, 'IntersectionObserver', {
      writable: true,
      configurable: true,
      value: MockIntersectionObserver,
    });
  });

  it('renders the provided text content', () => {
    render(<SplitText text="Hello world" />);

    expect(screen.getByText('H')).toBeInTheDocument();
    expect(screen.getByText('w')).toBeInTheDocument();
  });

  it('applies the selected typography variant class', () => {
    const { container } = render(<SplitText text="Headline" variant="H2" />);

    expect(container.querySelector('p')).toHaveClass('text-[40px]');
  });
});
