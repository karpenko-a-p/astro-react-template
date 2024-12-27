import { Token } from 'typedi';

/**
 * Стор со счетчиком
 */
export interface ICounterStore {
  /**
   * Получить состояние счетчика
   */
  getCount(): number;

  /**
   * Увеличить
   */
  increment(): void;

  /**
   * Уменьшить
   */
  decrement(): void;
}

export const COUNTER_STORE = new Token<ICounterStore>();