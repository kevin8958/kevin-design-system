import { render, screen } from '@testing-library/react';
import MetricCard from './MetricCard';

describe('MetricCard', () => {
  it('renders title and formatted value', () => {
    render(
      <MetricCard
        title="Revenue"
        value={12430}
        prefix="$"
        change={12.4}
        changeSuffix="%"
        animated={false}
      />,
    );

    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByTestId('metric-card-value')).toHaveTextContent('$12,430');
    expect(screen.getByTestId('metric-card-change')).toHaveTextContent(
      '+12.4%',
    );
  });

  it('infers success trend for positive change', () => {
    render(
      <MetricCard title="Revenue" value={12430} change={8.2} animated={false} />,
    );

    expect(screen.getByTestId('metric-card-change')).toHaveClass('text-success');
  });

  it('renders danger trend styling for negative change', () => {
    render(
      <MetricCard
        title="Churn"
        value={184}
        change={-3.1}
        animated={false}
      />,
    );

    expect(screen.getByTestId('metric-card-change')).toHaveClass('text-danger');
  });

  it('applies larger spacing and typography for lg size', () => {
    render(
      <MetricCard title="Revenue" value={12430} size="lg" animated={false} />,
    );

    expect(screen.getByTestId('metric-card')).toHaveClass('p-6');
    expect(screen.getByTestId('metric-card-value')).toHaveClass('text-4xl');
  });
});
