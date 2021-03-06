$( document ).ready(function() {

  // Программирую появление под скролл

  $("#gallery-description-title").fadeOut();
  $("#gallery-description-text").fadeOut();

  $("#mini-lisii-nos").fadeOut();
  $("#mini-marshala-bluhera").fadeOut();
  $("#mini-dolgoozernaia").fadeOut();



  var timer;
  $(window).on('scroll', function(){
    if ( timer ) clearTimeout(timer);
    timer = setTimeout(function(){
      showNext();
    }, 0);
  });

  showNext();

  function showNext() {
    if( $(document).scrollTop() > 500 ) {
      $('#gallery-description-title').fadeIn(800);
    }
    if( $(document).scrollTop() <= 500 ) {
      $('#gallery-description-title').fadeOut(800);
    }

    if( $(document).scrollTop() > 600 ) {
      $('#gallery-description-text').fadeIn(800);
    }
    if( $(document).scrollTop() <= 600 ) {
      $('#gallery-description-text').fadeOut(800);
    }



    if( $(document).scrollTop() > 700 ) {
      $('#mini-lisii-nos').stop().fadeIn(800);
    }
    if( $(document).scrollTop() <= 700 ) {
      $('#mini-lisii-nos').fadeOut(800);
    }

    if( $(document).scrollTop() > 800 ) {
      $('#mini-marshala-bluhera').fadeIn(800);
    }
    if( $(document).scrollTop() <= 800 ) {
      $('#mini-marshala-bluhera').fadeOut(800);
    }

    if( $(document).scrollTop() > 900 ) {
      $('#mini-dolgoozernaia').fadeIn(800);
    }
    if( $(document).scrollTop() <= 900 ) {
      $('#mini-dolgoozernaia').fadeOut(800);
    }
  }


  // программирую логику больше-меньше мини-иконок
  $("#less").hide();
  $(".minis-second-container").hide();

  $('#more').on('click', function(e) { // все разы
    $(".minis-second-container").show(700);
    $("#less").delay(800).show(1);
    $(this).hide();
  });

  $('#less').on('click', function(e) { // все разы
    $(".minis-second-container").hide(700);
    $("#more").delay(710).show(1);
    $(this).hide();
  });

  // работа слайдера
  $('.gallery-slick').slick({
    autoplay: false,
    autoplaySpeed: 3100,
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    pauseOnDotsHover: true,
  });

  // Программирую выбор галерей по кликам.
  $("#defocused-marsh").fadeOut();
  $(".marsh-slick").fadeOut();

  $("#defocused-dolgoozernaiya").fadeOut();
  $(".dolgoozernaiya-slick").fadeOut();

  $("#defocused-bogatir").fadeOut();
  $(".bogatir-slick").fadeOut();

  $("#defocused-kolo").fadeOut();
  $(".kolo-slick").fadeOut();

  $("#defocused-narodn").fadeOut();
  $(".narodn-slick").fadeOut();

    // Нажимаю на Лисий Нос
    $('#mini-lisii-nos').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".lisii-slick").delay(150).fadeIn(600);

      $("#defocused-lisii").delay(650).fadeIn(600);
    });

    // Нажимаю на Маршала
    $('#mini-marshala-bluhera').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".marsh-slick").delay(150).fadeIn(600);

      $("#defocused-marsh").delay(650).fadeIn(600);
    });

    // Нажимаю на Долгоозерную
    $('#mini-dolgoozernaia').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".dolgoozernaiya-slick").delay(150).fadeIn(600);

      $("#defocused-dolgoozernaiya").delay(650).fadeIn(600);
    });

    // Нажимаю на пр. Богатырский
    $('#mini-bogatirski').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".bogatir-slick").delay(150).fadeIn(600);

      $("#defocused-bogatir").delay(650).fadeIn(600);
    });

    // Нажимаю на пр. Коломяжский
    $('#mini-kolomiajsky').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".kolo-slick").delay(150).fadeIn(600);

      $("#defocused-kolo").delay(650).fadeIn(600);
    });

    // Нажимаю на Народного Ополчения
    $('#mini-narodnogo').on('click', function(e) {

      $(".defocused").fadeOut(200);
      $(".gallery-slick").fadeOut(200);

      $(".narodn-slick").delay(150).fadeIn(600);

      $("#defocused-narodn").delay(650).fadeIn(600);
    });
});
