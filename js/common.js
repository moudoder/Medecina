$(document).ready(function () {
  $(".scroll-to").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".phone").mask("+7 (999) 999-9999");


  if ($(window).width() <= 1160) {
    $('.equipment-small-block').unwrap();
    $('.header-mobile-menu').insertAfter('.header .header-right__whattccap');
  }

  if ($(window).width() <= 1160 && $(window).width() > 767) {
    $('.footer-col--internet').insertAfter('.footer-callback');
    $('.footer-col--about').insertAfter('.footer__adress');
  }

  if ($(window).width() <= 767) {
    $('.enroll__btn').insertAfter('.enroll-photo');
    $('.header-right__eye').insertBefore('.header-top');
  }


  $('.header-mobile__burger').on('click', function() {
  	$('.modal-menu').addClass('modal-menu-active');
  	return false;
  })
  $('.modal-menu__close').on('click', function() {
  	$('.modal-menu').removeClass('modal-menu-active');
  	return false;
  })
})