import React, { type CSSProperties, type FC } from 'react';
import cn from 'clsx';
import classes from './Flex.module.scss';

export type FlexProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<Pick<CSSProperties, 'flexWrap' | 'flexDirection' | 'alignItems' | 'justifyContent' | 'gap' | 'flex'>>;

/**
 * Flex контейнер
 */
export const Flex: FC<FlexProps> = (props) => {
  const { className, flexWrap, flexDirection, alignItems, justifyContent, gap, flex, children, style, ...restProps } =
    props;

  return (
    <section
      className={cn(className, classes.flex)}
      style={{ ...(style as CSSProperties), flexWrap, flexDirection, alignItems, justifyContent, gap, flex }}
      {...restProps}
      data-component={Flex.name}
    >
      {children}
    </section>
  );
};
