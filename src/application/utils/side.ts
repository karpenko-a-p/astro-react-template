/**
 * Код выполняется на сервере
 */
export const isServer = typeof window === 'undefined';

/**
 * Код выполняется на клиенте
 */
export const isClient = !isServer;