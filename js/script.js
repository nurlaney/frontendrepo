$(document).ready(function () {
  // red alert pop up
  $(".close-btn").click(function () {
    $(".alert-pop").addClass("d-none")
  });
  // end red alert pop up


  $(".dropdown").hover(function () {
    $(this).addClass("show")
    $(this).find(".dropdown-menu").addClass("show")

  }, function () {
    $(this).removeClass("show")
    $(this).find(".dropdown-menu").removeClass("show")
  })

  // search icon click function

  $(".search-area .abc .icon").click(function () {

    if ($(this).hasClass("fa-search")) {
      $(".search-pop").css("visibility", "visible")
      $(".search-pop").css("opacity", "1")
      $(this).removeClass("fa-search").addClass("fa-times")
      $(".fa-times").css("font-size", "24px")
      $(".fa-times").css("margin-left", "4px")

    }
    else if ($(this).hasClass("fa-times")) {
      $(".search-pop").css("visibility", "hidden")
      $(".search-pop").css("opacity", "0")
      $(this).removeClass("fa-times").addClass("fa-search")
      $(".fa-search").css("font-size", "20px")
      $(".fa-search").css("margin-left", "0px")
    }
    // // search icon click function end


   


  })
 
  // banner. 
 $('#carousel .carousel-item img').each(function () {
  var imgSrc = $(this).attr('src');
  $(this).parent().css({ 'background-image': 'url(' + imgSrc + ')' });
  $(this).remove();
});

  
  //slick slider start
  $('.regular').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6
  });
  // slick slider end


  // why choose edu hover
$("#w-ch-eduglobal .reason-box").hover(function(){
  $(this).css("margin-top","4px")
},function(){
  $(this).css("margin-top","12px");
})














});