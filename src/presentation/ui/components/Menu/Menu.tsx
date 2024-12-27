import React, { type FC, type ReactElement } from 'react';
import cn from 'clsx';
import { type MenuItemProps } from './MenuItem';

import styles from './Menu.module.scss';

export type MenuProps = React.HTMLAttributes<HTMLUListElement> & {
  /**
   * Список элементов
   */
  children: ReactElement<MenuItemProps>[];
};

/**
 * Меню
 */
export const Menu: FC<MenuProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <ul className={cn(className, styles.menu)} data-component={Menu.name} {...restProps}>
      {children}
    </ul>
  );
};
