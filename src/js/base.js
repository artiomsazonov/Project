window.onload = function () {
    var items = document.querySelectorAll('.flex-item');

    for (var i = 3; i < items.length - 3; i++) {
        if (window.innerWidth >= 701) {
            items[i].onmouseover = activ;
            items[i].onmouseout = activ
        } else {
            console.log("Экран менее 700 пикселей");
        }

    }
    function activ() {
        this.childNodes[1].classList.toggle('hid');
        this.childNodes[3].classList.toggle('hid');
    }
}

// burger
function menuBurger(selector) {
    var menu = document.querySelector(selector);
    var button = document.querySelector('.menuBurger_button');
    var links = document.querySelectorAll('.menuBurger_link')
    var overlay = document.querySelector('.menuBurger_overlay')

    button.onclick = function () {
        toggleMenu()
    }
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            toggleMenu()
        }
    }
    overlay.onclick = function () {
        toggleMenu()
    }

    function toggleMenu() {
        menu.classList.toggle('menuBurger_activ');
        var body = document.querySelector('body');
        if (menu.classList.contains("menuBurger_activ")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }
    }
}
menuBurger('.menuBurger');

// search

var open = document.querySelectorAll('.openokno');
var mdl = document.querySelector('.blockcentr')

for (var i = 0; i < open.length; i++) {
    open[i].onclick = function () {
        mdl.classList.toggle('hidden');
    }
}

//goUp
var scrolled;
var timer;

document.querySelector('.goUp').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
}
function scrollToTop() {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 100;
        timer = setTimeout(scrollToTop, 50);
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    }
}
