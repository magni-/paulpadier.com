$(function() {
  if (window.innerWidth >= 768) {
    $(".nav-a span").addClass("hidden");

    $(".nav-a").hover(function() {
      $("i", this).toggleClass("hidden");
      $("span", this).toggleClass("hidden");
    });

    $(".layover-hidden").addClass("hidden");

    $(".layover-container").hover(function() {
      $("div", this).toggleClass("hidden");
    });
  }

  // from http://jsfiddle.net/juddlyon/Q2TYv/10/
   
  // invoke the carousel
  $('#carousel').carousel({
    interval: 5000
  });

  // slide on click 
  $('.carousel-linked-nav > li > a').click(function() {
      // grab href, remove pound sign, convert to number
      var item = Number($(this).attr('href').substring(1));
      // slide to number -1 (account for zero indexing)
      $('#carousel').carousel(item - 1);
      // remove current active class
      $('.carousel-linked-nav .active').removeClass('active');
      // add active class to just clicked on item
      $(this).parent().addClass('active');
      // don't follow the link
      return false;
  });

  // autoplay nav highlight
  // bind 'slid' function
  $('#carousel').on('slid.bs.carousel', function() {
      // remove active class
      $('.carousel-linked-nav .active').removeClass('active');
      // get index of currently active item
      var idx = $('#carousel .item.active').index();
      // select currently active item and add active class
      $('.carousel-linked-nav li:eq(' + idx + ')').addClass('active');
  });
});
