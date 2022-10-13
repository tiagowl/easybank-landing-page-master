function showMobileMenu(){
    let burger = document.getElementById("navbar-burger");
    let navbar = document.getElementById("navbar-mobile");

    if(!burger.classList.contains("is-active")){
        burger.classList.add("is-active");
        navbar.style.display = "flex";
    }else{
        burger.classList.remove("is-active");
        navbar.style.display = "none";
    }

}