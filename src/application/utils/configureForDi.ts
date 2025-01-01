import { Token } from 'typedi';
import { getService } from '@application/utils/getService';

/**
 * Конфигурация сервиса для внедрения зависимостей.
 * Возвращает токен и геттер для получения экземпляра
 */
export const configureForDi = <TService>(id?: string) => {
  const token = new Token<TService>(id);
  const getInstance = () => getService(token);

  return { token, getInstance };
};