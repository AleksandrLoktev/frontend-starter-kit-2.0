export class BaseClass {
  constructor (protected _selector: Object | string[] | string) {
    this.selector = _selector;
  };

  set selector(element: any) {
    switch (typeof element) {
      case 'string':
        const elementsArray = Array.from(document.querySelectorAll(element));
        elementsArray.forEach((entry) => {
          const el = new BaseClass(entry);
        });
        break;
      case 'object':
        (() => {
          if (Array.isArray(element)) {
            element.forEach((value) => {
            const el = new BaseClass(value);
          });
          }
          })();
        break;
    }
  }

  get selector()  {
    switch (typeof this._selector) {
      case 'string':
        return document.querySelectorAll(`${this._selector}`);
        break;
      case 'object':
        if (Array.isArray(this._selector) && this._selector.length) {
          return this._selector.map((item) => document.querySelectorAll(item));
        } else if (this._selector && (<Object[]>this._selector).length) {
          return this._selector;
        } else {
          return null;
        }
        break;
    }
  }

  init() {
  };
}