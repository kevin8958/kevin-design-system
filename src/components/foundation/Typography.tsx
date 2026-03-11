import React from 'react';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const typographyVariants = cva(
  'tracking-wide transition-all duration-200 ease-in-out',
  {
    variants: {
      variant: {
        H1: 'text-[64px] leading-[1.2] font-bold',
        H2: 'text-[40px] leading-[1.3] font-bold',
        H3: 'text-[24px] leading-[1.4] font-bold',
        H4: 'text-[16px] leading-[1.5] font-semibold',
        B1: 'text-[16px] leading-[1.6] font-thin',
        B2: 'text-[14px] leading-[1.6] font-thin',
        C1: 'text-[12px] leading-[1.6]',
      },
      color: {
        primary: 'text-primary-400!',
        secondary: 'text-secondary-400!',
        neutral: 'text-neutral-900! dark:text-neutral-100!',
      },
    },
    defaultVariants: {
      variant: 'B1',
      color: 'neutral',
    },
  },
);

/** 시맨틱 마크업을 위한 기본 태그 매핑 */
const variantTagMap: Record<Foundation.TypographyVariant, React.ElementType> = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  B1: 'p',
  B2: 'p',
  C1: 'span',
};

const Typography = ({
  variant = 'B1',
  classes = '',
  color,
  children,
  ...rest
}: Foundation.TypographyProps) => {
  const Component = variantTagMap[variant];

  return (
    <Component
      {...rest}
      className={classNames(
        typographyVariants({
          variant,
          color: color as Foundation.TypographyColor,
        }),
        classes,
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
