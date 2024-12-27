import React, { type FC } from 'react';
import cn from 'clsx';

import styles from './Progress.module.scss';

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Значение прогресса
   */
  value: number;
  /**
   * Максимальное число прогресса
   */
  of?: number;
}

/**
 * Полоса прогресса
 */
export const Progress: FC<ProgressProps> = (props) => {
  const { className, of = 100, value, ...restProps } = props;

  const width = Math.round(value / of * 100) + '%';

  return (
    <section className={cn(className, styles.wrapper)} {...restProps} data-component={Progress.name}>
      <div className={styles.track}>
        <div style={{ width }} />
      </div>
    </section>
  );
};
