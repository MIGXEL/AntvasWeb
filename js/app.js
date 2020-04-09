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

/*     var windowHieght = $(window).height();
    var barraAltura = $('.menu').innerHeight();

    console.log(barraAltura);

    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        if (scroll > 1) {

            $('.menu').css({ "position": "fixed" });
            $('.menu').css({ "width": "100%" });
            $('.menu').css({ "top": "0" });
            $('.menu').css({ "background": "#ffffff" });
            $('.menu ul li a').css({ "color": "#ff502f" });
            $('a span').css({ "color": "#ff502f" });
            $('.menu p').css({ "font-size": "40px" });
            $('.menu').css({ "box-shadow": "rgba(0,0,0,.22) 6px 1px 1px" });
            $('.menu').css({ "z-index": "100" });
            $('header nav').css({ "top": barraAltura });


        } else {

            $('.menu').css({ "position": "relative" });
            $('.menu').css({ "background": "none" });
            $('.menu').css({ "box-shadow": "none" });
            $('.menu p').css({ "font-size": "60px" });
            $('.menu ul li a').css({ "color": "#ffffff" });

        }

    })

    $('.menuIcon').click(function() {

        $('header nav').slideToggle();

    }) */



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
    /* $('.aniview').AniView(options); */

})

