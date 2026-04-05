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
});
