document.querySelector(".header__burger").onclick = () => {
    document.querySelector(".header__menu").classList.toggle("show");
    document.querySelector(".header__burger").classList.toggle("show");
    document.querySelector("body").classList.toggle("lock");
  };

document.querySelector(".footer_arrow").onclick = () => {
  document.querySelector(".footer_arrow").classList.toggle("show");
  document.querySelector(".footer_info_body").classList.toggle("show");
}
// __________

window.onscroll = function() {scrollFunction()};


function topFunction() {
    document.documentElement.scrollTop = 0;
}