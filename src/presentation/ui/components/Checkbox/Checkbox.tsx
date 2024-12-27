import React, { type FC, forwardRef, useState } from 'react';
import { Text } from '../Text/Text';
import IconCheck from '@tabler/icons-react/dist/esm/icons/IconCheck';
import cn from 'clsx';
import classes from './Checkbox.module.scss';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /**
   * Размер
   */
  size?: 'sm' | 'md';
  /**
   * Сообщение об ошибке
   */
  errorMessage?: string;
  /**
   * Ошибка
   */
  hasError?: boolean;
  /**
   * Выключен
   */
  disabled?: boolean;
};

/**
 * Чекбокс
 */
export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    className,
    children,
    name,
    checked: outerChecked,
    defaultChecked,
    onChange,
    hasError = false,
    errorMessage,
    disabled = false,
    size = 'md',
    ...restProps
  } = props;

  const [innerChecked, setInnerChecked] = useState(defaultChecked);

  const childrenIsText = typeof children === 'string';
  const checked = outerChecked ?? innerChecked;
  const handleChange = onChange ?? (() => setInnerChecked(!checked));

  return (
    <section className={cn(className, classes.wrapper)} data-size={size} data-component={Checkbox.name}>
      <label className={classes.label} data-disabled={disabled} data-hasError={hasError}>
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          name={name}
          onChange={handleChange}
          ref={ref}
          {...restProps}
        />

        {/*Квадрат чекбокса*/}
        <div className={classes.rect}>
          <IconCheck />
        </div>

        {/*Наименование*/}
        {childrenIsText ? <Text size={size}>{children}</Text> : children}
      </label>

      {/*Текст ошибки*/}
      {hasError && errorMessage && (
        <Text size="sm" variant="error" className={classes.error}>
          {errorMessage}
        </Text>
      )}
    </section>
  );
});
