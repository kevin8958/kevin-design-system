import { render, screen } from '@testing-library/react';
import ToastViewport from './ToastViewport';

describe('ToastViewport', () => {
  it('renders stacked toasts inside the viewport', () => {
    render(
      <ToastViewport
        placement="bottom-right"
        toasts={[
          { id: '1', title: 'Toast', description: 'First item', variant: 'info' },
          { id: '2', title: 'Toast', description: 'Second item', variant: 'success' },
        ]}
      />,
    );

    expect(screen.getByTestId('toast-viewport')).toBeInTheDocument();
    expect(screen.getByText('First item')).toBeInTheDocument();
    expect(screen.getByText('Second item')).toBeInTheDocument();
  });

  it('lays the viewport out as a column so items-*/justify-* map to the correct axis', () => {
    render(<ToastViewport placement="top-center" toasts={[]} />);

    const viewport = screen.getByTestId('toast-viewport');
    expect(viewport).toHaveClass('flex', 'flex-col');
    expect(viewport).toHaveClass('items-center', 'justify-start');
  });
});
