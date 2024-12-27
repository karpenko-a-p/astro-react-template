import { Inject, Service } from 'typedi';
import { IUseCase } from './IUseCase';
import { COUNTER_STORE, type ICounterStore } from '@application/shared/ICounterStore';

/**
 * Сценарий увеличения значения счетчика
 */
@Service()
export class IncrementCounterUseCase implements IUseCase {
  @Inject(COUNTER_STORE)
  private readonly counterStore!: ICounterStore;

  /**
   * @inheritDoc
   */
  execute() {
    this.counterStore.setCount(this.counterStore.getCount() + 1);
  }
}