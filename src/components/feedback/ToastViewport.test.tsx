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
});
