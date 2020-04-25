

$(function () {
    "use strict";

    var windows = $(window);

    /*-------------Portfolio magnificPopup-----------*/
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*-------------Counter-----------*/
    $('.counter .numb').countUp({
        delay: 1,
        time: 1500
    });
});

$(window).on("load", function () {

    var windows = $(window);

    // Preloader
    $(".loading").fadeOut(500);

    // stellar
    windows.stellar();

    /*-------------Portfolio Items-----------*/
    $('.gallery').isotope({
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({});

    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');
        $gallery.isotope({filter: filterValue});
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


});
