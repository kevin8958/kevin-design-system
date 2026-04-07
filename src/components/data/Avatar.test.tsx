import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('renders an image when src is provided', () => {
    render(<Avatar src="/avatar.png" name="Alice Kim" />);

    expect(screen.getByRole('img', { name: /alice kim/i })).toBeInTheDocument();
  });

  it('renders initials when src is not provided', () => {
    render(<Avatar name="Alice Kim" />);

    expect(screen.getByText('AK')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container } = render(<Avatar name="Alice Kim" size="lg" />);

    expect(container.firstChild).toHaveClass('size-16');
  });

  it('renders a status indicator when status is provided', () => {
    const { container } = render(<Avatar name="Alice Kim" status="online" />);

    expect(container.querySelector('.bg-success')).toBeInTheDocument();
  });

  it('keeps clipping on the avatar surface without clipping the status indicator', () => {
    const { container } = render(<Avatar name="Alice Kim" status="online" />);

    expect(container.firstChild).not.toHaveClass('overflow-hidden');
    expect(
      container.querySelector('.overflow-hidden.rounded-full'),
    ).toBeInTheDocument();
  });

  it('positions the status indicator on the bottom-right corner', () => {
    const { container } = render(
      <Avatar name="Alice Kim" status="online" size="sm" />,
    );

    expect(container.querySelector('.bottom-0.right-0')).toBeInTheDocument();
    expect(container.querySelector('.translate-x-1\\/4.translate-y-1\\/4')).toBeInTheDocument();
  });

  it('uses softer offsets for larger avatar sizes', () => {
    const { container: mdContainer } = render(
      <Avatar name="Alice Kim" status="online" size="md" />,
    );
    const { container: lgContainer } = render(
      <Avatar name="Alice Kim" status="online" size="lg" />,
    );

    expect(
      mdContainer.querySelector(
        '.bottom-px.right-px.translate-x-\\[12\\%\\].translate-y-\\[12\\%\\]',
      ),
    ).toBeInTheDocument();
    expect(
      lgContainer.querySelector(
        '.bottom-0\\.5.right-0\\.5.translate-x-\\[4\\%\\].translate-y-\\[4\\%\\]',
      ),
    ).toBeInTheDocument();
  });
});
