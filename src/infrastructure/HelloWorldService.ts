import { Service } from 'typedi';
import { HELLO_WORLD_SERVICE, type IHelloWorldService } from '@application/shared/IHelloWorldService';
import { GreetingModel } from '@domain/GreetingModel';

/**
 * Hello World! сервис
 */
@Service(HELLO_WORLD_SERVICE)
export class HelloWorldService implements IHelloWorldService {
  /**
   * @inheritDoc
   */
  getGreeting() {
    return new GreetingModel('Hello World!');
  }
}