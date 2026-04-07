import { fireEvent, render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';
import Button from '@/components/action/Button';

describe('Tooltip', () => {
  it('shows content on hover', async () => {
    render(
      <Tooltip content="Helpful text">
        <Button>Hover me</Button>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByText('Hover me').closest('span')!);

    expect(await screen.findByText('Helpful text')).toBeInTheDocument();
    expect(screen.getByTestId('tooltip-arrow')).toBeInTheDocument();
  });

  it('shows content on focus', async () => {
    render(
      <Tooltip content="Focused text">
        <button type="button">Focus me</button>
      </Tooltip>,
    );

    fireEvent.focus(screen.getByRole('button', { name: /focus me/i }));

    expect(await screen.findByText('Focused text')).toBeInTheDocument();
  });

  it('applies primary color styles when requested', async () => {
    render(
      <Tooltip content="Primary tooltip" color="primary">
        <button type="button">Open tooltip</button>
      </Tooltip>,
    );

    fireEvent.focus(screen.getByRole('button', { name: /open tooltip/i }));

    const tooltip = await screen.findByText('Primary tooltip');
    expect(tooltip).toHaveClass('bg-secondary-500');
    expect(screen.getByTestId('tooltip-arrow')).toHaveClass('bg-secondary-500');
  });
});
