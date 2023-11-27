document.querySelector(".header_right").addEventListener ("click", openMenu);

let menu = document.querySelector(".list_nav_container");
let menuBars = document.querySelector(".menu");

function openMenu() {
    menu.classList.toggle("open_all_menu");
    menuBars.classList.toggle("change_icon");
}

document.querySelector(".open_limp").addEventListener ("click", openLimp);

let navLimp = document.querySelector(".limp");
let arrow1 = document.querySelector(".open_limp")

function openLimp() {
    navLimp.classList.toggle("nav_limp_open");
    arrow1.classList.toggle("arrow_up")
}

document.querySelector(".open_coock").addEventListener ("click", openCoock);

let navCoock = document.querySelector(".coock");
let arrow2 = document.querySelector(".open_coock")

function openCoock() {
    navCoock.classList.toggle("nav_limp_open");
    arrow2.classList.toggle("arrow_up")
}
document.querySelector(".open_chil").addEventListener ("click", openChil);

let navChil = document.querySelector(".chil");
let arrow3 = document.querySelector(".open_chil")

function openChil() {
    navChil.classList.toggle("nav_limp_open");
    arrow3.classList.toggle("arrow_up")
}