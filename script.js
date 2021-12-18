/*-BURGER MENU-*/

const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnItems = document.querySelector('.burger-btn span');
const burgerBtnItem = document.querySelector('.burger-btn');

const burgerLinks = document.querySelectorAll('.burger-nav ul li');
const burgerMenu = document.querySelector('.burger-menu');

const overley = document.querySelector('.overley');


let isEnabled = false;




function toSpinCross() {
    burgerBtnItems.classList.toggle('active')
    burgerBtnItems.classList.toggle('spin')
    burgerBtnItem.addEventListener('animationend', function() {
        burgerBtnItem.classList.toggle('active')

    })
    isEnabled = isEnabled ? false : true;

}


function toShowMenu() {


    if (isEnabled) {
        burgerMenu.classList.remove('hide-menu');

        burgerMenu.classList.add('show-menu');
        overley.classList.add('active-overley');
        document.body.classList.add('no-scroll');

        burgerMenu.addEventListener('animationend', function() {
            burgerMenu.classList.add('show');

        })
    }

    if (!isEnabled) {
        burgerMenu.classList.remove('show-menu')
        burgerMenu.classList.add('hide-menu');
        overley.classList.remove('active-overley');
        document.body.classList.remove('no-scroll');

        burgerMenu.addEventListener('animationend', function() {
            burgerMenu.classList.remove('show');
        })

    }
}

function hide() {
    burgerMenu.classList.remove('show-menu');
    burgerMenu.classList.add('hide-menu');
    overley.classList.remove('active-overley');
    document.body.classList.remove('no-scroll');

    burgerMenu.addEventListener('animationend', function() {
        burgerMenu.classList.remove('show');
    })
}



burgerBtn.addEventListener('click', function() {
    toSpinCross();
    toShowMenu()

})



burgerLinks.forEach(function(btn) {
    btn.addEventListener('click', function() {
        hide()
        toSpinCross()
    });
});

overley.addEventListener('click', function() {
    hide()
    toSpinCross()
})