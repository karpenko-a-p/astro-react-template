import { Service, Inject } from 'typedi';
import { makeAutoObservable } from 'mobx';
import { COUNTER_STORE, type ICounterStore } from '@application/shared/ICounterStore';
import { IncrementCounterUseCase } from '@application/use-cases/IncrementCounterUseCase';
import { DecrementCounterUseCase } from '@application/use-cases/DecrementCounterUseCase';
import { type IUseCase } from '@use-cases/IUseCase';

@Service({ transient: true })
export class CounterViewModel {
  @Inject(COUNTER_STORE)
  private readonly counterStore!: ICounterStore;

  @Inject(() => IncrementCounterUseCase)
  private readonly incrementCounterUseCase!: IUseCase;

  @Inject(() => DecrementCounterUseCase)
  private readonly decrementCounterUseCase!: IUseCase;

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
    this.incrementCounterUseCase.execute();
  }

  /**
   * Уменьшение счетчика
   */
  decrement() {
    this.decrementCounterUseCase.execute();
  }
}