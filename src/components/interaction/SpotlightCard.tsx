import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
  href?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
  href,
}) => {
  // 1. HTMLDivElement 대신 포괄적인 HTMLElement를 사용하여 <a>와 <div> 모두 수용합니다.
  const cardRef = useRef<HTMLElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  // 2. MouseEventHandler 제네릭 대신 파라미터(e)에 직접 HTMLElement를 지정합니다.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current || isFocused) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(0.6);
  const handleMouseLeave = () => setOpacity(0);

  const commonProps = {
    onMouseMove: handleMouseMove,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `relative block overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-4 ${className}`,
  };

  const renderContent = () => (
    <>
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 pointer-events-none"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </>
  );

  if (href) {
    return (
      // Link는 HTMLAnchorElement를 기대하므로 타입 단언(Type Assertion)으로 에러를 방지합니다.
      <Link
        to={href}
        ref={cardRef as React.RefObject<HTMLAnchorElement>}
        {...commonProps}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <div ref={cardRef as React.RefObject<HTMLDivElement>} {...commonProps}>
      {renderContent()}
    </div>
  );
};

export default SpotlightCard;
