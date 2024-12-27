import React, { type FC } from 'react';
import cn from 'clsx';
import { Text, type TextProps } from '../Text/Text';
import classes from './Badge.module.scss';

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Тип
   */
  type?: 'info' | 'success' | 'warn' | 'error' | 'neutral';
  /**
   * Текст
   */
  children: string;
  /**
   * Жирный ли текст
   */
  bold?: TextProps['bold'];
  /**
   * Иконка
   */
  icon?: React.ReactNode;
};

/**
 * Бэйджик
 */
export const Badge: FC<BadgeProps> = (props) => {
  const { className, children, type = 'neutral', bold, icon: Icon, ...restProps } = props;

  return (
    <section
      className={cn(className, classes.badge)}
      data-type={type}
      data-component={Badge.name}
      {...restProps}
    >
      {Icon}
      <Text tag="span" size="sm" bold={bold}>
        {children}
      </Text>
    </section>
  );
};
