import { Service } from 'typedi';
import { isServer } from '@application/utils/side';
import { COUNTER_STORE, type ICounterStore } from '@application/shared/ICounterStore';
import { makeAutoObservable } from 'mobx';

/**
 * Стор со счетчиком
 */
@Service({ transient: isServer, id: COUNTER_STORE })
export class CounterStore implements ICounterStore {
  /**
   * Значение счетчика
   * @private
   */
  private count = 0;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  /**
   * @inheritDoc
   */
  getCount(): number {
    return this.count;
  }

  /**
   * @inheritDoc
   */
  setCount(value: number): void {
    this.count = value;
  }
}