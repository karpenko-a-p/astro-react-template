import React, { Children, type FC, type JSX, useEffect, useLayoutEffect, useRef } from 'react';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import { useBoolean, useTransition } from '../../hooks';
import cn from 'clsx';

import styles from './Tooltip.module.scss';

export type TooltipProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Триггер
   */
  children: JSX.Element;
  /**
   * Сообщение подсказки
   */
  message: string;
  /**
   * Положение
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
};

/**
 * Подсказка
 */
export const Tooltip: FC<TooltipProps> = (props) => {
  const { children, message, placement = 'top', className, ...restProps } = props;

  const componentRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { value: isOpen, setTrue: open, setFalse: close, toggle } = useBoolean();
  const { rendered, visible } = useTransition({ state: isOpen, time: 100 });
  const component = Children.only(children);

  // Установка положения
  useLayoutEffect(() => {
    if (!rendered)
      return;

    const trigger = componentRef.current;
    const tooltip = tooltipRef.current;

    if (!tooltip || !trigger)
      return;

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    switch (placement) {
      case 'top':
        tooltip.style.top = triggerRect.top - tooltipRect.height + 'px';
        tooltip.style.left = triggerRect.left + Math.round(triggerRect.width / 2 - tooltipRect.width / 2) + 'px';
        break;
      case 'bottom':
        tooltip.style.top = triggerRect.bottom + 'px';
        tooltip.style.left = triggerRect.left + Math.round(triggerRect.width / 2) + 'px';
        break;
      case 'left':
        tooltip.style.top = triggerRect.top + Math.round(triggerRect.height / 2 - tooltipRect.height / 2) + 'px';
        tooltip.style.left = triggerRect.left - tooltipRect.width + 'px';
        break;
      case 'right':
        tooltip.style.top = triggerRect.top + Math.round(triggerRect.height / 2 - tooltipRect.height / 2) + 'px';
        tooltip.style.left = triggerRect.right + 'px';
        break;
    }
  }, [rendered]);

  // Скрытие подсказки при прокрутке
  useEffect(() => {
    document.addEventListener('scroll', close);

    return () => document.removeEventListener('scroll', close);
  }, []);

  if (!component)
    return null;

  return (
    <>
      {React.cloneElement(component, {
        ref: componentRef,
        onMouseEnter: open,
        onTouchStart: toggle,
        onMouseLeave: close,
      })}
      {rendered && (
        <div
          className={cn(styles.tooltip, className)}
          ref={tooltipRef}
          data-open={visible}
          {...restProps}
          data-component={Tooltip.name}
        >
          <Paper size="xs">
            <Text size="sm">{message}</Text>
          </Paper>
        </div>
      )}
    </>
  );
};
