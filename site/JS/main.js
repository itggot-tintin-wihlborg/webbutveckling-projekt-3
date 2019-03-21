function menu(event){

    let menu = document.querySelector(".menu");
    menu.classList.toggle("show")

    let shadow = document.querySelector(".shadow")
    shadow.classList.toggle("showshadow")

}

function cart(event){



    let cart = document.querySelector(".cart")
    cart.classList.toggle("showcart")

    
    let cartwrapper = document.querySelector(".cart-wrapper")
    cartwrapper.classList.toggle("show-cart-wrapper")


}
function cart2(event){


    let menu = document.querySelector(".menu");
    menu.classList.toggle("show")

    let shadow = document.querySelector(".shadow")
    shadow.classList.toggle("showshadow")

    let main = document.querySelector("#cart")

    if (main.classList.contains('showcart') == false){
        let cart = document.querySelector(".cart")
        cart.classList.toggle("showcart")

        
        let cartwrapper = document.querySelector(".cart-wrapper")
        cartwrapper.classList.toggle("show-cart-wrapper")
    }
}
function home(event){

    let menu = document.querySelector(".menu");
    menu.classList.toggle("show")

    let shadow = document.querySelector(".shadow")
    shadow.classList.toggle("showshadow")

    let main = document.querySelector("#cart")

    if (main.classList.contains('showcart') == true){
        let cart = document.querySelector(".cart")
        cart.classList.toggle("showcart")

        
        let cartwrapper = document.querySelector(".cart-wrapper")
        cartwrapper.classList.toggle("show-cart-wrapper")
    }

}