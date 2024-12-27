// @ts-ignore
import React, { type FC } from 'react';
import { Text, type TextProps } from '../Text/Text';
import { Button, type ButtonProps } from '../Button/Button';
import cn from 'clsx';

import styles from './MenuItem.module.scss';

type Component<TComponent extends 'text' | 'button'> = { component: TComponent };

type MenuItemTextProps = TextProps & Component<'text'>;

type MenuItemButtonProps = ButtonProps & Component<'button'>;

export type MenuItemProps = MenuItemButtonProps | MenuItemTextProps;

/**
 * Элемент меню
 */
export const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, size = 'sm', component = 'button', ...restProps } = props;

  if (component === 'text') {
    return (
      <li className={cn(className, styles.li)} data-text={true}>
        <Text variant="secondary" size={size} {...(restProps as TextProps)} data-component-decorated={MenuItem.name} />
      </li>
    );
  }

  return (
    <li className={cn(className, styles.li)}>
      <Button
        className={styles.button}
        variant="secondary"
        size={size}
        {...(restProps as ButtonProps)}
        data-component-decorated={MenuItem.name}
      />
    </li>
  );
};
