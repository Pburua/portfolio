
let switchViewButtom = document.querySelector('.btn-switch-view');

switchViewButtom.addEventListener('click', function () {
    switchViewButtom.parentElement.querySelector('iframe').classList.toggle('mobilized');
    if(switchViewButtom.innerHTML === 'desktop')
        switchViewButtom.innerHTML = 'mobile';
    else switchViewButtom.innerHTML = 'desktop';
});

function toPortfolioPage() {
    let agreeMoving = confirm('Go to Portfolio page?');
    if (agreeMoving)
        window.open('index.html');
}
