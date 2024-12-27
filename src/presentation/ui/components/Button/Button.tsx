import React, { type FC } from 'react';
import cn from 'clsx';
import IconLoader2 from '@tabler/icons-react/dist/esm/icons/IconLoader2.mjs';
import { Text } from '../Text/Text';
import classes from './Button.module.scss';

type ButtonBaseProps = {
  /**
   * Размер
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Вариация кнопки
   */
  variant?: 'primary' | 'secondary';
  /**
   * Состояние загрузки
   */
  loading?: boolean;
  /**
   * Состояние отключения
   */
  disabled?: boolean;
  /**
   * Текст
   */
  children: string;
  /**
   * Левая иконка
   */
  leftIcon?: React.ReactNode;
  /**
   * Правая иконка
   */
  rightIcon?: React.ReactNode;
  /**
   * Адрес ссылки (Кнопка превратится в ссылку)
   */
  href?: string;
};

type ClassicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ClassicAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = (ClassicButtonProps | ClassicAnchorProps) & ButtonBaseProps;

/**
 * Кнопка
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    type = 'button',
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    className,
    href,
    ...restProps
  } = props;

  if (href) {
    return (
      <a
        className={cn(classes.button, className)}
        data-size={size}
        data-variant={variant}
        data-loading={loading}
        data-component={Button.name}
        data-disabled={disabled}
        href={href}
        {...(restProps as ClassicAnchorProps)}
      >
        {loading && <IconLoader2 className={classes.loaderIcon} />}
        {!loading && LeftIcon}
        <Text tag="span" size={size}>
          {children}
        </Text>
        {RightIcon}
      </a>
    );
  }

  return (
    <button
      type={type as ClassicButtonProps['type']}
      className={cn(classes.button, className)}
      data-size={size}
      data-variant={variant}
      data-loading={loading}
      data-disabled={disabled}
      disabled={disabled}
      data-component={Button.name}
      {...(restProps as ClassicButtonProps)}
    >
      {loading && <IconLoader2 className={classes.loaderIcon} />}
      {!loading && LeftIcon}
      <Text tag="span" size={size}>
        {children}
      </Text>
      {RightIcon}
    </button>
  );
};
