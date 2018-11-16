export default class MainMenu {
    constructor(public selector: string | object = '.main-nav') {
        this.checkBeforeInit();
    }

    checkBeforeInit() {
        switch (typeof this.selector) {
            case  'object':
                this.init();
                break;
            case 'string':
                let elements: object[] = Array.from(document.querySelectorAll(this.selector));
                elements.forEach((entry) => {
                    const el = new MainMenu(entry);
                });
        }
    }

    init() {
        console.log(this.selector);
    }
}