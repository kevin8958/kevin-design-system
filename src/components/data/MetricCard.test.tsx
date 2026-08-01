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

  it('renders the change label alongside the change badge', () => {
    render(
      <MetricCard
        title="Revenue"
        value={12430}
        change={12.4}
        changeSuffix="%"
        changeLabel="vs last week"
        animated={false}
      />,
    );

    expect(screen.getByTestId('metric-card-change-label')).toHaveTextContent(
      'vs last week',
    );
  });

  it('does not render a change label without a change value', () => {
    render(
      <MetricCard
        title="Revenue"
        value={12430}
        changeLabel="vs last week"
        animated={false}
      />,
    );

    expect(
      screen.queryByTestId('metric-card-change-label'),
    ).not.toBeInTheDocument();
  });

  it('renders skeleton placeholders instead of content while loading', () => {
    render(
      <MetricCard
        title="Revenue"
        value={12430}
        change={12.4}
        changeSuffix="%"
        loading
      />,
    );

    const card = screen.getByTestId('metric-card');
    expect(card).toHaveAttribute('aria-busy', 'true');
    expect(screen.queryByText('Revenue')).not.toBeInTheDocument();
    expect(screen.queryByTestId('metric-card-value')).not.toBeInTheDocument();
    expect(screen.queryByTestId('metric-card-change')).not.toBeInTheDocument();
    expect(card.querySelectorAll('.animate-pulse')).toHaveLength(3);
  });
});
