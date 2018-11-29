export class BaseClass {
  constructor (protected _selector: Object | string[], public element?: any) {
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
            this.selector;
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
    return document.querySelector(this._selector);
  }

  init() {
    // console.log(this._selector);
  };
}