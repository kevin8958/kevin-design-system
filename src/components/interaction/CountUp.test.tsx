import { render, screen } from '@testing-library/react';
import CountUp from './CountUp';

describe('CountUp', () => {
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

  it('renders the initial value', () => {
    render(<CountUp from={12} to={24} startWhen={false} />);

    expect(screen.getByText('12')).toBeInTheDocument();
  });

  it('formats decimals based on input values', () => {
    render(<CountUp from={0} to={12.5} startWhen={false} />);

    expect(screen.getByText('0.0')).toBeInTheDocument();
  });

  it('supports down direction start value', () => {
    render(<CountUp from={10} to={50} direction="down" startWhen={false} />);

    expect(screen.getByText('50')).toBeInTheDocument();
  });
});
