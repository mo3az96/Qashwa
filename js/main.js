$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            $(".fixed-header").addClass("scroll");
        } else {
            $(".fixed-header").removeClass("scroll");
        }
        if ($(window).width() <= 767) {
            if ($(this).scrollTop() >= 30) {
                $(".fixed-header").addClass("scroll");
            } else {
                $(".fixed-header").removeClass("scroll");
            }
        }
    });
    /////////search/////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusOut();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////cats Slider/////////
    if ($(window).width() <= 991) {
        $('.cats').addClass("owl-carousel")
        $('.cats').owlCarousel({
            margin: 26,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                    maegin: 15,
                },
                500: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
            }
        });
    }
    /////////Brands Slider/////////
    $('.brands-slider').owlCarousel({
        items: 7,
        margin: 31,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 3,
                margin: 10,
            },
            500: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1200: {
                items: 7
            }
        }
    });
    /////////products Slider/////////
    $('.products-slider').owlCarousel({
        items: 5,
        margin: 10,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        dots: true,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    /////////Testimonials Slider/////////
    $('.test-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        autoplay: false,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 2,
            },
        }
    });

    ////menu////
    if ($(window).width() <= 991) {

        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").toggleClass("overflow");
            $('.lang').addClass("lang-in");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
            $("body").toggleClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.mo-menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").toggleClass("overflow");
        });
    }

    /////////feats/////////
    if ($(window).width() <= 991) {
        $(".features .col-md-3").unwrap();
        $(".features .feature").unwrap();
        $(".features").addClass("owl-carousel");
        $('.features').owlCarousel({
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4
                }
            }
        });

    }

    ///////// **footer ** /////////
    if ($(window).width() <= 991) {
        $(".drop-li .nav-a").addClass("mo-accordion");
        $(".drop-li .sub-ul").addClass("mo-panel");
    }
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    ///////// **collapse** /////////
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});