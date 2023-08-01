const submitBtnEl = document.querySelector('.container__btn');
const containerEL = document.querySelector('.container');
const popupContainerEl = document.querySelector('.popup-container');
const ratesObj = document.getElementsByClassName('container__rates-box--rating');
const ratesArr = Object.values(ratesObj);
const rateTystate = document.querySelector('.rate');

for (const rating of ratesArr) {
    rating.addEventListener('click', () => rateTystate.innerText = rating.innerText);
}

submitBtnEl.addEventListener('click', () => {
    if (rateTystate.innerText === '') return;

    containerEL.classList.add('active');
    popupContainerEl.classList.remove('popup-container-active');
});