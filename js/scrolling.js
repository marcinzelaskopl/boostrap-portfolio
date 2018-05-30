document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");






    $("#front-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#first-scroll").offset().top
        }, 1500);
    });

    $("#home-link").click(function() {
        $('html, body').animate({
            scrollTop: $(".front").offset().top
        }, 1500);
    });

    $("#about-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1500);
    });

    $("#portfolio-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio-section").offset().top
        }, 1500);
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top
        }, 1500);
    });

    $("#back").click(function() {
        $('html, body').animate({
            scrollTop: $(".front").offset().top
        }, 1200);
    });

});