import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('should render children correctly', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when loading is true', () => {
    render(<Button loading>Submit</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('should have type="button" by default', () => {
    render(<Button>Default</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'button');
  });

  it('should support "submit" type', () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('should apply custom className from props', () => {
    const customClass = 'mt-4 mx-auto';
    render(<Button className={customClass}>Custom Class</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass(customClass);
  });

  it('should render a link when href is provided', () => {
    render(<Button href="/components">Read Docs</Button>);
    const linkElement = screen.getByRole('link', { name: /read docs/i });
    expect(linkElement).toHaveAttribute('href', '/components');
  });

  it('should apply full width classes when fullWidth is true', () => {
    render(<Button fullWidth>Wide Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /wide button/i });
    expect(buttonElement).toHaveClass('w-full');
  });

  it('should use neutral color by default', () => {
    render(<Button>Default Color</Button>);
    const buttonElement = screen.getByRole('button', { name: /default color/i });
    expect(buttonElement.className).toContain('bg-neutral-800');
  });
});
