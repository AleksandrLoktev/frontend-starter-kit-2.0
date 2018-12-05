import { BaseClass } from '../../ts/baseClass';

export default class Dropdown extends BaseClass {

 constructor(protected _selector: Object | string[] = []) {
   super(
     _selector
   );
   this.init();
 }

  init() {
   console.log(this.selector);
  }
}