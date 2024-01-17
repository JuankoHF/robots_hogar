window.addEventListener('scroll', function() {

    let animateHeaderStop = document.getElementById('headerStop');
    let positionHeaderStop = animateHeaderStop.getBoundingClientRect().top;
    let animateHeaderNav = document.querySelector(".header_bottom_container")
    let animateListNav = document.querySelector(".list_nav_container");


    if(positionHeaderStop <= -44) {
        animateHeaderNav.classList.add("fixed_menu");
        animateListNav.classList.add("fixed_nav");

    }

    if(positionHeaderStop > -44) {
        animateHeaderNav.classList.remove("fixed_menu");
        animateListNav.classList.remove("fixed_nav")

    }

    let scrollTop = window.innerHeight;
    let popular = document.getElementById("popular") || document.getElementById("cristales") || document.getElementById("multifuncion");
    let positionPopular = popular.getBoundingClientRect().top;
    let futur = document.getElementById("futur") || document.getElementById("suelo") || document.getElementById("batidor");
    let positionFutur = futur.getBoundingClientRect().top;
    let robots = document.getElementById("robots") || document.getElementById("piscina") || document.getElementById("vapor");
    let positionRobots = robots.getBoundingClientRect().top;
   

    let list1 = document.querySelector(".list1")
    let list2 = document.querySelector(".list2")
    let list3 = document.querySelector(".list3")
    
    

    if(positionFutur  < scrollTop/3) {
        list1.classList.add("this_position");
        list2.classList.remove("this_position");
        list3.classList.remove("this_position");

    }else {
        list1.classList.remove("this_position");

    }

    if(positionPopular < scrollTop/3) {
        list1.classList.remove("this_position");
        list2.classList.add("this_position");
        list3.classList.remove("this_position");

    }
    if(positionRobots < scrollTop/3) {
        list1.classList.remove("this_position");
        list2.classList.remove("this_position");
        list3.classList.add("this_position");

    }
})