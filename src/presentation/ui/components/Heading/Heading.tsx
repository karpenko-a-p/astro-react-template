import React, { FC } from 'react';
import cn from 'clsx';
import classes from './Heading.module.scss';

export type HeadingProps = React.HTMLAttributes<HTMLHeadElement> & {
  /**
   * Тэг элемента
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Текст
   */
  children: string;
};

/**
 * Заголовок
 */
export const Heading: FC<HeadingProps> = (props) => {
  const { className, children, tag: Tag = 'h1', ...restProps } = props;

  return (
    <Tag className={cn(className, classes.heading)} {...restProps} data-tag={Tag} data-component={Heading.name}>
      {children}
    </Tag>
  );
};
