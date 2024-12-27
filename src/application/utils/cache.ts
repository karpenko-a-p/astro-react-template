type CacheRecord = {
  data: unknown;
  expiresAt: number;
}

/**
 * Сервис для кэширования в памяти
 */
export abstract class Cache {
  /**
   * Кэш
   */
  private static data: Record<string, CacheRecord> = {};

  /**
   * Установить в кэш
   */
  static set(key: string, data: unknown, seconds: number) {
    Cache.data[key] = {
      data,
      expiresAt: Date.now() + seconds
    };
  }

  /**
   * Прочитать из кэша
   */
  static get<TData>(key: string): TData | null {
    const record = Cache.data[key];

    if (!record)
      return null;

    if (record.expiresAt <= Date.now()) {
      Cache.remove(key);
      return null;
    }

    return record.data as TData;
  }

  /**
   * Прочитать из кэша, при отсутствии установить
   */
  static getWithSet<TData>(key: string, fn: () => TData, seconds: number): TData {
    const data = Cache.get<TData>(key);

    if (data)
      return data;

    const newData = fn();

    Cache.set(key, newData, seconds);

    return newData;
  }

  /**
   * Удалить из кэша
   */
  static remove(key: string) {
    delete Cache.data[key];
  }

  /**
   * Очистка устаревшего кэша
   */
  static removeExpires() {
    Object.keys(Cache.data).forEach((key) => {
      if (Cache.data[key].expiresAt <= Date.now())
        Cache.remove(key);
    });
  }
}

setInterval(Cache.removeExpires, 1_000);