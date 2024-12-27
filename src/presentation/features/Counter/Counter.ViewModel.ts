import { Service, Inject } from 'typedi';
import { makeAutoObservable } from 'mobx';
import { COUNTER_STORE, type ICounterStore } from '@application/shared/ICounterStore';

@Service()
export class CounterViewModel {
  @Inject(COUNTER_STORE)
  private readonly counterStore!: ICounterStore;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  /**
   * Значение счетчика
   */
  get count() {
    return this.counterStore.getCount();
  }

  /**
   * Увеличение счетчика
   */
  increment() {
    this.counterStore.increment();
  }

  /**
   * Уменьшение счетчика
   */
  decrement() {
    this.counterStore.decrement();
  }
}