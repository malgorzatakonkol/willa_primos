$(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // scroll-to-up
    $(window).scroll(function() {
        const topPosition = $(this).scrollTop();
        if (topPosition > 400) {
            $(".scrollTop").css('opacity', '1');

        } else {
            $(".scrollTop").css('opacity', '0');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 800);

        return false;
    });

    // Init fancyBox
    $().fancybox({
        selector : '.slick-slide:not(.slick-cloned)',
        hash     : false
    });


  

});

