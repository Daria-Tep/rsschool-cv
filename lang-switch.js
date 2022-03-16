"use strict"
import langObj from './modules/languages.js';
const ruBtn = document.querySelector('.ru');
const engBtn = document.querySelector('.eng');



function toSwitchLang(lang) {
    let allData = document.querySelectorAll('[data-translate]');
      allData.forEach(text => text.textContent= langObj[lang][text.dataset.translate]) 
}

function toSwitchStyleBtn(activeLang) {
    if (activeLang === 'ru') {
        ruBtn.classList.add('active-lang')
        engBtn.classList.remove('active-lang')
    } else
    if (activeLang === 'en') {
        ruBtn.classList.remove('active-lang')
        engBtn.classList.add('active-lang')
    }
}


ruBtn.addEventListener('click', function() { 
     toSwitchLang('ru');
     toSwitchStyleBtn('ru')
})

engBtn.addEventListener('click', function() {
     toSwitchLang('en')
     toSwitchStyleBtn('en')
})