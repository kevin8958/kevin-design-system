import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Snb from './Snb';

describe('Snb', () => {
  it('scrolls the current page link into view on load', async () => {
    let scrolledText = '';

    Object.defineProperty(window, 'requestAnimationFrame', {
      configurable: true,
      writable: true,
      value: (callback: FrameRequestCallback) => {
        callback(0);
        return 1;
      },
    });

    Object.defineProperty(window, 'cancelAnimationFrame', {
      configurable: true,
      writable: true,
      value: () => {},
    });

    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      writable: true,
      value: function scrollIntoView() {
        scrolledText = this.textContent ?? '';
      },
    });

    render(
      <MemoryRouter initialEntries={['/components/action/button']}>
        <Snb isOpen={false} />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(scrolledText).not.toBe('');
    });

    expect(scrolledText).toContain('Button');
  });
});
