const navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
  const scroll = window.scrollY;
  console.log(scroll);
  if (scroll >= 40) {
    navBar.classList.add("fix");
  } else {
    navBar.classList.remove("fix");
  }
});