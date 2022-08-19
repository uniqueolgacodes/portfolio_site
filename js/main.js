/*=== RESIZE NAVBAR ON SCROLL ===*/
var navbar = document.querySelector(".navbar");
//When the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};