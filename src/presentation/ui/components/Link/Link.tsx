import React, { type FC } from 'react';
import { Text, type TextProps } from '../Text/Text';
import cn from 'clsx';
import classes from './Link.module.scss';

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  /**
   * Текст ссылки
   */
  children: string;
  /**
   * Размер
   */
  size?: TextProps['size'];
  /**
   * Класс
   */
  className?: string;
};

/**
 * Ссылка
 */
export const Link: FC<LinkProps> = (props) => {
  const { children, size = 'md', className, ...restProps } = props;

  return (
    <a className={cn(classes.link, className)} {...restProps}>
      <Text size={size}>{children}</Text>
    </a>
  );
};