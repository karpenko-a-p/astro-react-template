import React, { type ChangeEvent, type FC, forwardRef, useCallback, useState } from 'react';
import cn from 'clsx';
import IconSelector from '@tabler/icons-react/dist/esm/icons/IconSelector.mjs';
import { Text } from '../Text/Text';

import styles from './Select.module.scss';

export type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> & {
  /**
   * Размер
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Плэйсхолдер
   */
  placeholder?: string;
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
   * Звезда
   */
  star?: boolean;
  /**
   * Лэйбл
   */
  label?: string;
  /**
   * Выключено
   */
  disabled?: boolean;
};

export const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    className,
    children,
    size = 'md',
    onChange,
    placeholder,
    disabled = false,
    errorMessage,
    hasError = false,
    description,
    label,
    star= false,
    ...restProps
  } = props;

  const [placeholderVisible, setPlaceholderVisible] = useState(!!placeholder);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      if (placeholderVisible) setPlaceholderVisible(false);

      onChange?.(event);
    },
    [onChange],
  );

  return (
    <section className={cn(styles.wrapper, className)} data-component={Select.name}>
      {/*Лэйбл*/}
      {label && (
        <Text size="sm" className={styles.label} data-start={star}>
          {label}
        </Text>
      )}

      {/*Селект*/}
      <div className={styles.select} data-hasError={hasError} data-disabled={disabled} data-size={size}>
        <select
          ref={ref}
          onChange={handleChange}
          disabled={disabled}
          data-placeholder={placeholderVisible}
          {...restProps}
        >
          {/*Плэйсхолдер*/}
          {placeholderVisible && (
            <option disabled={true} selected={true} hidden={true} value="">
              {placeholder}
            </option>
          )}

          {children}
        </select>

        {/*Иконка*/}
        <div className={styles.icon}>
          <IconSelector />
        </div>
      </div>

      {/*Описание*/}
      {description && (
        <Text className={styles.description} variant="secondary" size="xs">
          {description}
        </Text>
      )}

      {/*Сообщение ошибки*/}
      {hasError && errorMessage && (
        <Text className={styles.error} variant="error" size="xs">
          {errorMessage}
        </Text>
      )}
    </section>
  );
});
