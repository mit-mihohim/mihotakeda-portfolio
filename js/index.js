// ナビゲーションバー
$(function () {
  // PC仕様
  var $nav = $(".nav");
  var navHeight = $nav.outerHeight();
  
  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      420,
      "swing"
    );
    return false;
  });

  // SP仕様
  $("#nav-icon").on("click", function () {
    if ($(".nav").css("display") === "block") {
      $(".nav").slideUp();
    } else {
      
      $(".nav").slideDown();
  
      var $nav = $(".nav");
      var navHeight = $nav.outerHeight();
      
      $('a[href^="#"]').on("click", function () {
        $(".nav").slideUp();
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate(
          {
            scrollTop: position,
          },
          420,
          "swing"
        );
        return false;
      });
    }
  });

  const sReveal = ScrollReveal().reveal
  sReveal('.pc__pic--fashion, .left-slide-in, .project__info--image', {
    origin: 'left',
    distance: '100px',
    viewFactor:'0.9'
  });
  sReveal('.sp__pic--fashion', {
    duration: '1000',
    viewFactor:'0.9'
  });
  sReveal('.sp__pic--web, .pc__pic--web, .right-slide-in, .project__name', {
    distance: '100px',
    delay: 700, 
    origin: 'right', 
    viewFactor:'0.9'
  });
  sReveal('.title, .fade-in', {
    delay: 900,
    duration: '3000',
    viewFactor:'0.9'
  });
  sReveal('.pc__word--fashion, .in-animation, .project__info--description', {
    duration: '2000',
    viewFactor: '0.9'
  });
  sReveal('.pc__word--web, .fade-in700', {
    delay: 700,
    duration: '2000',
    viewFactor: '0.9'
  });
});
