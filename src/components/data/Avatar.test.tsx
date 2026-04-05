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
});
