import { configureForDi } from '@application/utils/configureForDi';

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

export const { token: COUNTER_STORE, getInstance: getCounterStore } = configureForDi<ICounterStore>();