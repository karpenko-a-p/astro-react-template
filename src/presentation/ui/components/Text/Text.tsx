import React, { type FC, type RefObject } from 'react';
import cn from 'clsx';
import styles from './Text.module.scss';

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  /**
   * Реф
   */
  ref?: RefObject<HTMLParagraphElement>;
  /**
   * Тэг текста
   */
  tag?: 'p' | 'span';
  /**
   * Размер
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Жирный
   */
  bold?: true | 400 | 500 | 600 | 700 | 800 | 900;
  /**
   * Вариант
   */
  variant?: 'primary' | 'secondary' | 'disabled' | 'error';
};

/**
 * Текст
 */
export const Text: FC<TextProps> = (props) => {
  const { children, className, tag: Tag = 'p', size = 'md', bold = 400, variant = 'primary', ...restProps } = props;

  return (
    <Tag
      className={cn(className, styles.text)}
      {...restProps}
      data-size={size}
      data-bold={bold}
      data-variant={variant}
      data-component={Text.name}
    >
      {children}
    </Tag>
  );
};
