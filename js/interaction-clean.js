document.querySelector(".description_door").addEventListener("click", openDescription);
document.querySelector(".description_door2").addEventListener("click", openDescription2);
document.querySelector(".description_door3").addEventListener("click", openDescription3);
document.querySelector(".description_door4").addEventListener("click", openDescription4);
document.querySelector(".description_door5").addEventListener("click", openDescription5);
document.querySelector(".description_door6").addEventListener("click", openDescription6);

let descriptionClose = document.querySelector(".description_close");
let descriptionClose2 = document.querySelector(".description_close2");
let descriptionClose3 = document.querySelector(".description_close3");
let descriptionClose4 = document.querySelector(".description_close4");
let descriptionClose5 = document.querySelector(".description_close5");
let descriptionClose6 = document.querySelector(".description_close6");

let descriptionDoor = document.querySelector(".description_door");
let descriptionDoor2 = document.querySelector(".description_door2");
let descriptionDoor3 = document.querySelector(".description_door3");
let descriptionDoor4 = document.querySelector(".description_door4");
let descriptionDoor5 = document.querySelector(".description_door5");
let descriptionDoor6 = document.querySelector(".description_door6");


function openDescription() {
    descriptionClose.classList.toggle("description_open");
    descriptionDoor.classList.toggle("dor_arrow_up");
}
function openDescription2() {
    descriptionClose2.classList.toggle("description_open");
    descriptionDoor2.classList.toggle("dor_arrow_up");
}
function openDescription3() {
    descriptionClose3.classList.toggle("description_open");
    descriptionDoor3.classList.toggle("dor_arrow_up");
}
function openDescription4() {
    descriptionClose4.classList.toggle("description_open");
    descriptionDoor4.classList.toggle("dor_arrow_up");
}
function openDescription5() {
    descriptionClose5.classList.toggle("description_open");
    descriptionDoor5.classList.toggle("dor_arrow_up");
}
function openDescription6() {
    descriptionClose6.classList.toggle("description_open");
    descriptionDoor6.classList.toggle("dor_arrow_up");
}