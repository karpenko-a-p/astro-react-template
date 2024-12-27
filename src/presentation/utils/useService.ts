import { Constructable, Token } from 'typedi';
import { useRef } from 'react';
import { getService } from '@application/utils/getService';

/**
 * Получение и сохранение сервиса между ререндерами
 */
export const useService = <TService,>(type: Constructable<TService> | Token<TService>) => {
  const service = useRef<TService>(null);

  if (!service.current)
    service.current = getService(type);

  return service.current;
};
