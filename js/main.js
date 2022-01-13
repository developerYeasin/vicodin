new WOW().init();
var mobile_menu = document.querySelector("#mobile-menu");
var menu = document.querySelector(".mobile-menu-scrollbar");
var menu_btn = document.querySelector(".menu-btn");
var close = document.querySelector(".close");
var menu_btn_btn = document.querySelector(".menu-btn p");
menu_btn.addEventListener("click", function () {
  menu.classList.toggle("backToLeft");
  mobile_menu.classList.toggle("menu-opacity");
  menu_btn_btn.classList.toggle("p");
});
close.addEventListener("click", function () {
  menu.classList.remove("backToLeft");
  mobile_menu.classList.remove("menu-opacity");
  menu_btn_btn.classList.remove("p");
});
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
});
var scroolBar = document.querySelector(".scroolBar");
window.addEventListener("scroll", function () {
  scroolBar.classList.toggle("d-block", window.scrollY > 100);
});
scroolBar.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
$(".blog-post").slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});
$(".brand").slick({
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
});
$(".responsive").slick({
  dots: true,
  slidesToShow: 7,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
});
$("#getting-started").countdown("2022/01/01", function (event) {
  $(this).html(event.strftime("%w weeks %d days %H:%M:%S"));
  $(this).html(
    event.strftime(
      ' <div class="counter-item"><h4>%D</h4><p>Days</p></div><div class="counter-item"><h4>%H</h4><p>Hrs</p></div><div class="counter-item"><h4>%M</h4><p>Mins</p></div><div class="counter-item"><h4>%S</h4><p>Secs</p></div>'
    )
  );
});
