(function() {
    'use strict';

    window.addEventListener('load', () => {
        const NAVTOGGLE = document.querySelector('.nav__toggle');
        const NAVCONTENT = document.querySelector('.nav__content');

        NAVTOGGLE.addEventListener('click', (e) => {
            e.preventDefault();
            NAVCONTENT.classList.toggle('hidden');
            NAVCONTENT.classList.toggle('flex')
            NAVCONTENT.classList.toggle('flex-jc-c')
        });
    });
})();
