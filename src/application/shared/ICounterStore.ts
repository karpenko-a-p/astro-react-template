import { Token } from 'typedi';

/**
 * Стор со счетчиком
 */
export interface ICounterStore {
  /**
   * Получить состояние счетчика
   */
  getCount(): Readonly<number>;

  /**
   * Установить значение счетчика
   */
  setCount(value: number): void;
}

export const COUNTER_STORE = new Token<ICounterStore>();