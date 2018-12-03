import "@babel/polyfill";
import Dropdown from '../../core/components/dropdown/dropdown';
import * as Swiper from 'swiper/dist/js/swiper';

let dropdown = new Dropdown();
// console.log(dropdown.getSelector() );


let swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

