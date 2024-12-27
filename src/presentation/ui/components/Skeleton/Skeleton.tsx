import React, { type CSSProperties, type FC } from 'react';
import cn from 'clsx';

import styles from './Skeleton.module.scss';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Закруглен ли
   */
  rounded?: boolean;
  /**
   * Высота
   */
  height?: CSSProperties['height'];
  /**
   * Ширина
   */
  width?: CSSProperties['height'];
  /**
   *
   */
  repeat?: number;
};

/**
 * Скелетон
 */
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, rounded = false, height, width, repeat = 1, ...restProps } = props;

  return (
    <section className={cn(className, styles.wrapper)} data-component={Skeleton.name} {...restProps}>
      {Array(repeat).fill(null).map((_, index) => (
        <div className={styles.skeleton} data-rounded={rounded} style={{ height, width }} key={index}>
          <div />
        </div>
      ))}
    </section>
  );
};
