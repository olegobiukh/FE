$(document).ready(function () {
    let scroll_pos = 0;
    let body_width;

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        body_width = $(document).width();
        if (scroll_pos > 750 && body_width > 768) {
            $(".nav-actual__title, .nav__language").addClass("scrolled_color");
            $(".nav__link").css('color', "#422f2d");
        } else {
            $(".nav__link, .nav-actual__title, .nav__language").removeClass("scrolled_color");
            $(".nav__link").css('color', "#fff");
        }
    });
});