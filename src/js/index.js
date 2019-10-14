let hamburgerButton = document.getElementById("toggle"),
    menuHamburger = document.getElementById("nav"),
    singlePage = document.getElementById('single-fondue'),
    singlePageInfo = document.getElementById('js-single-fondue-item'),
    closeButton = document.getElementById('js-single-fondue-close'),
    viewButton = document.getElementById('view');


hamburgerButton.addEventListener("click", function() {
    menuHamburger.classList.toggle("menu__show");
});

viewButton.addEventListener("click", function() {
    singlePage.classList.add("single-fondue");
    singlePageInfo.classList.add("show");
});

closeButton.addEventListener("click", function() {
    singlePage.classList.remove("single-fondue");
    singlePageInfo.classList.remove("show");
});