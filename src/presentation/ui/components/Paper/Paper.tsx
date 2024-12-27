import React, { type FC, type RefObject } from 'react';
import cn from 'clsx';

import styles from './Paper.module.scss';

export type PaperProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Размер
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Реф
   */
  ref?: RefObject<HTMLParagraphElement>;
};

/**
 * Подложка
 */
export const Paper: FC<PaperProps> = (props) => {
  const { className, size = 'md', children, ...restProps } = props;

  return (
    <section className={cn(className, styles.paper)} data-size={size} data-component={Paper.name} {...restProps}>
      {children}
    </section>
  );
};
