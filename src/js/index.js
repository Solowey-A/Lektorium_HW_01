let hamburgerButton = document.getElementById("toggle"),
    menuHamburger = document.getElementById("nav");

hamburgerButton.addEventListener("click", function() {
    menuHamburger.classList.toggle("menu__show");
});