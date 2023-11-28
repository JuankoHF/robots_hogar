window.addEventListener('scroll', function() {

    let animateHeaderStop = document.getElementById('headerStop');
    let positionHeaderStop = animateHeaderStop.getBoundingClientRect().top;
    let animateHeaderNav = document.querySelector(".header_bottom_container")
    let animateListNav = document.querySelector(".list_nav_container")
    
    console.log(positionHeaderStop);

    if(positionHeaderStop <= -32) {
        animateHeaderNav.classList.add("fixed_menu");
        animateListNav.classList.add("fixed_nav");

    }

    if(positionHeaderStop > -32) {
        animateHeaderNav.classList.remove("fixed_menu");
        animateListNav.classList.remove("fixed_nav")

    }
})