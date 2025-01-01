import { GreetingModel } from '@domain/GreetingModel';
import { configureForDi } from '@application/utils/configureForDi';

/**
 * Hello World! сервис
 */
export interface IHelloWorldService {
  /**
   * Получить сообщение приветствия
   */
  getGreeting(): GreetingModel;
}

export const { token: HELLO_WORLD_SERVICE, getInstance: getHelloWorldService } = configureForDi<IHelloWorldService>();