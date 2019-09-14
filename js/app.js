$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

$(document).ready(function() {

    $(window).scroll(function() {

        scroll = $(window).scrollTop();
        if (scroll > 100) {

            $('.menu').css({ "position": "fixed" });
            $('.menu').css({ "width": "100%" });
            $('.menu').css({ "top": "0" });
            $('.menu').css({ "background": "rgba(0,0,0,.9)" });
            $('.menu p').css({ "font-size": "40px" });
            $('.menu').css({ "box-shadow": "rgba(0,0,0,.22) 6px 1px 1px" });
            $('.menu').css({ "z-index": "100" });

        } else {

            $('.menu').css({ "position": "relative" });
            $('.menu').css({ "background": "none" });
            $('.menu').css({ "box-shadow": "none" });
            $('.menu p').css({ "font-size": "60px" });

        }

    })

    $('.menuIcon').click(function() {

        $('header nav').slideToggle();

    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    var options = {
        animateThreshold: 100,
        scrollPollInterval: 20
    }
    $('.aniview').AniView(options);

})