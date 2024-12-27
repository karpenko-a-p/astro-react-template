import React, { type FC } from 'react';
import { Heading, type HeadingProps } from '../Heading/Heading';
import { Text, type TextProps } from '../Text/Text';
import cn from 'clsx';
import classes from './Informer.module.scss';

export type InformerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Тип
   */
  type?: 'info' | 'success' | 'warn' | 'error' | 'neutral';
  /**
   * Заголовок
   */
  heading?: string;
  /**
   * Тэг заголовка
   */
  headingTag?: HeadingProps['tag'];
  /**
   * Тэг текста
   */
  textTag?: TextProps['tag'];
  /**
   * Сообщение
   */
  children: React.ReactNode;
};

/**
 * Информационный блок
 */
export const Informer: FC<InformerProps> = (props) => {
  const { className, type = 'neutral', heading, headingTag = 'h6', textTag, children, ...restProps } = props;

  const childrenIsText = typeof children === 'string';

  return (
    <section className={cn(className, classes.informer)} {...restProps} data-type={type} data-component={Informer.name}>
      {heading && <Heading tag={headingTag}>{heading}</Heading>}
      {childrenIsText ? <Text tag={textTag}>{children}</Text> : children}
    </section>
  );
};
