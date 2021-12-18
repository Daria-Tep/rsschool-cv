"use strict"
import lang1 from './modules/languages.js';

let allId = document.querySelectorAll('[id]')

let arr = Array.from(allId).map(i => i.id);

let enObj = lang1.en;
let ruObj = lang1.ru;

let key;


function toSwitchLang(objLang) {
    for (let i = 0; i < arr.length; i++) {
        for (key in objLang) {
            if (key === arr[i]) {
                document.getElementById(arr[i]).innerText = objLang[arr[i]];
            }
        }
    }
}

function toSwitchTitle(lang) {

    if (lang === 'ru') {
        document.querySelector('.offer_phone').title = 'позвонить мне';
        document.querySelector('.offer_email').title = 'написать мне';
        document.querySelector('.insta-link').title = 'мой инстаграм';
    }

    if (lang === 'en') {
        document.querySelector('.offer_phone').title = 'call me';
        document.querySelector('.offer_email').title = 'write me';
        document.querySelector('.insta-link').title = 'my instagram';

    }

}


const ruBtn = document.querySelector('.ru');
const engBtn = document.querySelector('.eng');


ruBtn.addEventListener('click', function() {
    toSwitchLang(ruObj)
    toSwitchTitle('ru')

    ruBtn.classList.add('active-lang')
    engBtn.classList.remove('active-lang')
})

engBtn.addEventListener('click', function() {

    toSwitchLang(enObj)
    toSwitchTitle('en')

    ruBtn.classList.remove('active-lang')
    engBtn.classList.add('active-lang')
})