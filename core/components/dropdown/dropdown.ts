import { BaseClass } from '../../ts/baseClass';

export default class Dropdown extends BaseClass {

 constructor(protected _selector: Object | string[] = ['.-dropdown', '.main-nav']) {
   super(
     _selector
   );
 }

  init() {
   super.init();
  }
}