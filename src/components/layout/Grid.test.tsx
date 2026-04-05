import { render, screen } from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
  it('renders children', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies column and gap classes', () => {
    const { container } = render(
      <Grid cols={4} gap={6}>
        <div>Cell</div>
      </Grid>,
    );

    expect(container.firstChild).toHaveClass('grid-cols-4');
    expect(container.firstChild).toHaveClass('gap-6');
  });
});
