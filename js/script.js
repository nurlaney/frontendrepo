$(document).ready(function () {
// red alert pop up
    $(".close-btn").click(function () {
        $(".alert-pop").addClass("d-none")
    });
// end red alert pop up


    $(".dropdown").hover(function(){
        $(this).addClass("show")
        $(this).find(".dropdown-menu").addClass("show")

    }, function(){
        $(this).removeClass("show")
        $(this).find(".dropdown-menu").removeClass("show")
    } )


});