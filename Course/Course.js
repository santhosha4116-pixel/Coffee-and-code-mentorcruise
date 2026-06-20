
var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
});