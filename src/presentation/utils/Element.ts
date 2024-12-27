type AddEventListener = Parameters<HTMLElement['addEventListener']>;
type RemoveEventListener = Parameters<HTMLElement['removeEventListener']>;

/**
 * Обертка над элементами DOM
 */
export class Element<TElement extends HTMLElement> {
  /**
   * Подвязанные события
   */
  private events: Record<AddEventListener[0], AddEventListener[1]> = {};

  constructor(private readonly element: TElement | null) {
  }

  /**
   * Получение обработчика
   * @param event - событие
   */
  handlerOn(event: AddEventListener[0]) {
    return this.events[event];
  }

  /**
   * Подписка на событие
   * @param event - событие
   * @param handler - обработчик
   * @param config - конфиг
   */
  on(event: AddEventListener[0], handler: AddEventListener[1], config?: AddEventListener[2]) {
    if (!this.element)
      return this;

    this.element.addEventListener(event, handler, config);
    this.events[event] = handler;

    return this;
  }

  /**
   * Отписка от события
   * @param event - событие
   * @param handler - обработчик
   * @param config - конфиг
   */
  off(event: RemoveEventListener[0], handler?: RemoveEventListener[1], config?: RemoveEventListener[2]) {
    if (!this.element)
      return this;

    if (handler)
      this.element.removeEventListener(event, handler, config);
    else if (this.events[event])
      this.element.removeEventListener(event, this.events[event], config);

    return this;
  }


  /**
   * Уничтожение компонента
   */
  destroy() {
    if (!this.element)
      return this;

    for (const key of Object.keys(this.events)) {
      this.element.removeEventListener(key, this.events[key]);
    }

    this.element.parentNode?.removeChild(this.element);
  }
}

/**
 * Получение элемента
 */
export const element = <TElement extends HTMLElement = HTMLElement>(selector: string, node = document.body) => {
  const element = node.querySelector<TElement>(selector);

  return new Element(element);
};

/**
 * Получение массива элементов
 */
export const elements = <TElement extends HTMLElement = HTMLElement>(selector: string, node = document.body) => {
  const elements = node.querySelectorAll<TElement>(selector);

  return [...elements].map(element => new Element(element));
};