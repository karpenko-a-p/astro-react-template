import React, { type FC } from 'react';
import cn from 'clsx';
import classes from './Container.module.scss';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Контейнер
 */
export const Container: FC<ContainerProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <section className={cn(className, classes.container)} {...restProps} data-component={Container.name}>
      {children}
    </section>
  );
};
