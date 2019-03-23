import { BaseClass } from '../../js/baseClass';

export default class Dropdown extends BaseClass{
    constructor(selector, params) {
        super(selector, params);
        console.log(params);
    }

}
