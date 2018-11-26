export class BaseClass {
  constructor (protected _selector: Object | string[]) {
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

  get selector() {
    return this._selector;
  }

  init() {
    console.log(this._selector);
  };
}