const navBar = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const optionBtn = document.querySelector(".option-btn");
const options = document.querySelector(".options");
const screen = document.querySelector(".screen");
const logoBar = document.querySelector(".logo-bar");
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".form");

window.addEventListener("scroll", function () {
    const scroll = window.scrollY;
    console.log(scroll);
    options.classList.add("options-trans");
    if (scroll >= 40) {
        navBar.classList.add("fix");
        screen.classList.add("mt-40");
        logoBar.classList.add("dp-n");
    } else {
        navBar.classList.remove("fix");
        screen.classList.remove("mt-40");
        logoBar.classList.remove("dp-n");
    }
});

optionBtn.addEventListener("click", function () {
    console.log(optionBtn.classList);
    options.classList.remove("options-trans");
});

searchBtn.addEventListener("click", function () {
    searchForm.classList.remove("form-disappear");
    header.classList.add("header-disappear");
});
