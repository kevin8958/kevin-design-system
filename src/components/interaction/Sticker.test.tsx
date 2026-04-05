import { fireEvent, render, screen } from '@testing-library/react';
import Sticker from './Sticker';

describe('Sticker', () => {
  it('adds a sticker to the board when an option is clicked', () => {
    render(<Sticker />);

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(
      screen.getByRole('button', { name: 'Move Sticker 1' }),
    ).toBeInTheDocument();
  });

  it('removes a sticker from the board', () => {
    render(<Sticker />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getByRole('button', { name: 'Remove Sticker 1' }));

    expect(
      screen.queryByRole('button', { name: 'Move Sticker 1' }),
    ).not.toBeInTheDocument();
  });

  it('clears all stickers from the board', () => {
    render(<Sticker />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getAllByRole('button')[1]);
    fireEvent.click(screen.getByRole('button', { name: /clear all/i }));

    expect(
      screen.getByText(/add some stickers to get started/i),
    ).toBeInTheDocument();
  });
});
