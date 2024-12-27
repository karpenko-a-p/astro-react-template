import { Token } from 'typedi';
import { GreetingModel } from '@domain/GreetingModel';

/**
 * Hello World! сервис
 */
export interface IHelloWorldService {
  /**
   * Получить сообщение приветствия
   */
  getGreeting(): GreetingModel;
}

export const HELLO_WORLD_SERVICE = new Token<IHelloWorldService>();