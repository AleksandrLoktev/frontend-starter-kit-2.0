import { BaseClass } from '../../ts/baseClass';

export default class Dropdown extends BaseClass {

 constructor(protected _selector: Object | string[] = ['.test']) {
   super(
     _selector
   );
 }

  init() {
   super.init();
  }
}