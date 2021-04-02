(function () {
    'use strict'

    window.addEventListener('load', () => {
        const FORM = document.querySelector('.contact__form');
    
        async function handleSubmit(e) {
            e.preventDefault();
            let status = document.querySelector('.form__status');
            let data = new FormData(e.target);
            fetch(e.target.action, {
                method: FORM.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                status.innerHTML = "Thanks for your interest!";
                status.classList.toggle('form__status--success');
                FORM.reset()
            }).catch(error => {
                status.innerHTML = "There was a problem submitting your form, try again!";
                status.classList.toggle('form__status--failed');
              });
        }
        FORM.addEventListener("submit", handleSubmit)
    });
})();