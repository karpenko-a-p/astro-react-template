import React, { type CSSProperties, type FC } from 'react';

export type GridItemProps = React.HTMLAttributes<HTMLDivElement> &
  Partial<{
    /**
     * Колонка
     */
    column: CSSProperties['gridColumn'];
    /**
     * Строка
     */
    row: CSSProperties['gridRow'];
  }>;

/**
 * Элемент grid контейнера
 */
export const GridItem: FC<GridItemProps> = (props) => {
  const { column: gridColumn, row: gridRow, children, style, ...restProps } = props;

  return (
    <div
      data-component={GridItem.name}
      style={{
        ...(style as CSSProperties),
        gridColumn,
        gridRow,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
