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


   $(".search-area .abc .fa-search").click(function(){
      $(".search-pop").css("visibility", "visible")
      $(".search-pop").css("opacity", "1")

      $(".search-area .abc .fa-search").removeClass("fa-search").addClass("fa-times")
       
   })

   $(".search-area .abc .fa-times").click(function(){
    $(".search-pop").css("visibility", "hidden")
    $(".search-pop").css("opacity", "0")

    $(".search-area .abc .fa-times").removeClass("fa-times").addClass("fa-search")
     
 })



});