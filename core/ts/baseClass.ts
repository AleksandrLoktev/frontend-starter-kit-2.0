export class BaseClass {
  constructor (protected _selector: Object | string[] | string, public element?: any) {
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
          if (!Array.isArray(element)) {
            this.element = this._selector;
            this.init();
          } else {
            element.forEach((value) => {
              const el = new BaseClass(value);
            });
          }
        })();
        break;
    }
  }

  getSelector()  {
    switch (typeof this._selector) {
      case 'string':
        return document.querySelectorAll(`${this._selector}`);
        break;
      case 'object':
        if (Array.isArray(this._selector)) {
          return this._selector.map((item) => document.querySelectorAll(item));
        } else {
          return this._selector;
        }
        break;
    }
  }

  init() {
  };
}