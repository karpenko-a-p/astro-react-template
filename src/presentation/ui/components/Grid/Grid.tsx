import React, { type CSSProperties, type FC } from 'react';
import cn from 'clsx';
import classes from './Grid.module.scss';

export type GridProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<Pick<CSSProperties, 'gap' | 'columnGap' | 'rowGap' | 'justifyContent' | 'justifyItems' | 'alignItems'>> &
  Partial<{
    /**
     * Колонки
     */
    columns: CSSProperties['gridTemplateColumns'];
    /**
     * Строки
     */
    rows: CSSProperties['gridTemplateRows'];
    /**
     * Зоны
     */
    areas: CSSProperties['gridTemplateAreas'];
  }>;

/**
 * Grid контейнер
 */
export const Grid: FC<GridProps> = (props) => {
  const {
    children,
    className,
    style,
    columns = 'repeat(12, 1fr)',
    rows: gridTemplateRows,
    areas: gridTemplateAreas,
    justifyContent,
    justifyItems,
    alignItems,
    gap,
    columnGap = gap,
    rowGap = gap,
    ...restProps
  } = props;

  const gridTemplateColumns = typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns;

  return (
    <section
      className={cn(className, classes.grid)}
      style={{
        ...(style as CSSProperties),
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas,
        gap,
        columnGap,
        rowGap,
        justifyContent,
        justifyItems,
        alignItems,
      }}
      {...restProps}
      data-component={Grid.name}
    >
      {children}
    </section>
  );
};
