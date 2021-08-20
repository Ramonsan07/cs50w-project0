//mostrando y quitando el menu principal cuando se le da click a id = nav-toggle.

const navClose = document.getElementById("nav__close")
const navToggle = document.getElementById("nav-toggle")
const navmenu = document.getElementById("nav-menu")




navmenu.addEventListener("click", ()=>{
    
    

})

navToggle.addEventListener("click", ()=>{

    navmenu.classList.add("show__menu")

})

navClose.addEventListener("click", ()=>{

    navmenu.classList.remove("show__menu")

})
