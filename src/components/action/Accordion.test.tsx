import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Accordion from './Accordion';

const items: Action.AccordionItem[] = [
  {
    id: 'account',
    title: 'Account overview',
    content: 'Account content',
  },
  {
    id: 'billing',
    title: 'Billing',
    content: 'Billing content',
  },
  {
    id: 'notifications',
    title: 'Notifications',
    content: 'Notifications content',
    disabled: true,
  },
];

describe('Accordion', () => {
  it('opens the selected item in single mode', () => {
    render(<Accordion items={items} defaultValue={['account']} />);

    expect(screen.getByText('Account content')).toBeInTheDocument();
    expect(screen.queryByText('Billing content')).not.toBeInTheDocument();
  });

  it('switches to a different item in single mode', async () => {
    render(<Accordion items={items} defaultValue={['account']} />);

    fireEvent.click(screen.getByRole('button', { name: /billing/i }));

    await waitFor(() => {
      expect(screen.queryByText('Account content')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Billing content')).toBeInTheDocument();
  });

  it('allows multiple open items in multiple mode', () => {
    render(
      <Accordion
        items={items}
        type="multiple"
        defaultValue={['account']}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /billing/i }));

    expect(screen.getByText('Account content')).toBeInTheDocument();
    expect(screen.getByText('Billing content')).toBeInTheDocument();
  });

  it('does not open disabled items', () => {
    render(<Accordion items={items} />);

    fireEvent.click(screen.getByRole('button', { name: /notifications/i }));

    expect(screen.queryByText('Notifications content')).not.toBeInTheDocument();
  });
});
