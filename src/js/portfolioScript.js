
let expansionButtom = document.querySelector('.expansion-panel .expansion-panel__button');

expansionButtom.addEventListener('click', function () {
    expansionButtom.parentElement.querySelector('.expansion-panel__content').classList.toggle('hide');
    expansionButtom.querySelectorAll('.fas').forEach(function (element) {
        element.classList.toggle('hide');
    });
});

function descriptionButtonsHandler(descrButton) {
    descrButton.parentElement.querySelector('.projects__slider-text').classList.toggle('mobile-hide');
    descrButton.innerHTML = 'hide description';
}

function toTheyalowWrapperPage() {
    let agreeMoving = confirm('Go to Theyalow page?');
    if (agreeMoving)
        window.open('theyalowWrapper.html');
}

function toRepairDesignWrapperPage() {
    let agreeMoving = confirm('Go to Repair Design page?');
    if (agreeMoving)
        window.open('repairDesignWrapper.html');
}

var mySwiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 1,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

});
