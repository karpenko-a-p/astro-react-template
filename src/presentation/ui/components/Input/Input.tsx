import React, { type FC, forwardRef } from 'react';
import { Text } from '../Text/Text';
import cn from 'clsx';
import classes from './Input.module.scss';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /**
   * Размер
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Лэйбл
   */
  label?: string;
  /**
   * Тип инпута
   */
  type?: 'text' | 'password';
  /**
   * Содержит ошибку
   */
  hasError?: boolean;
  /**
   * Сообщение об ошибке
   */
  errorMessage?: string;
  /**
   * Описание
   */
  description?: string;
  /**
   * Звездочка обязательености
   */
  star?: boolean;
  /**
   * Состояние отключено
   */
  disabled?: boolean;
};

/**
 * Поле ввода
 */
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    className,
    size = 'md',
    type = 'text',
    hasError = false,
    disabled = false,
    errorMessage,
    description,
    star = false,
    ...restProps
  } = props;

  return (
    <section className={cn(className, classes.wrapper)} data-component={Input.name}>
      {/*Лэйбл*/}
      {label && (
        <Text size="sm" className={classes.label} data-start={star}>
          {label}
        </Text>
      )}

      {/*Инпут*/}
      <div className={classes.input} data-hasError={hasError}>
        <input disabled={disabled} type={type} ref={ref} data-size={size} {...restProps} />
      </div>

      {/*Описание*/}
      {description && (
        <Text className={classes.description} variant="secondary" size="xs">
          {description}
        </Text>
      )}

      {/*Сообщение ошибки*/}
      {hasError && errorMessage && (
        <Text className={classes.error} variant="error" size="xs">
          {errorMessage}
        </Text>
      )}
    </section>
  );
});
