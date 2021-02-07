$(document).ready(() => {
  $(".slider").slick({
    dots: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><svg class='slider__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z'/></svg></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><svg class='slider__icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z'/></svg></button>",
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    centerMode: true,
    initialSlide: 1
  });
  $(".slider").on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    console.log(nextSlide);
  });
});
