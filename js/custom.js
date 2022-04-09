/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
});

$(document).ready(function () {
    /* Back top
  -----------------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

    /* wow
  -------------------------------*/
    new WOW({ mobile: false }).init();

    // isotop sortable grid

    const $grid = $('.sortable-grid');
    $grid.isotope({
        itemSelector: '.grid-item',
        //  layoutMode: 'fitRows',
        percentPosition: true
    });

    setTimeout(() => $grid.isotope('layout'), 1500);

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});
