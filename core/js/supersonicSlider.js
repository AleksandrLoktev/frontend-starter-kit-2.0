export default class SupersonicSlider {
    constructor (elClass = 'swiper-container') {
        this.el = document.querySelector(`.${elClass}`)
        this.includeSlider();
    }

    includeSlider() {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js';

        setTimeout(() => {
            document.querySelector('body').appendChild(script);
            this.beforeInit();

            setTimeout(() => {
                this.init();
            }, 500);
        }, 5000);
    }

    getUrl() {
        if (this.el &&  this.el.hasAttribute('data-url')) {
            return this.el.getAttribute('data-url');
        }
    }

    beforeInit() {
        const url = this.getUrl();

        fetch(url)
            .then(data => data.text())
            .then(res => {
                if (this.el.querySelector('.swiper-wrapper')) {
                    this.el.querySelector('.swiper-wrapper').innerHTML += res;
                }
            });
    }

    init() {

        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
