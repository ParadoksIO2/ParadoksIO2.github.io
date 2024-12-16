if ($(window).width() > 1203) {

} else {
    $('#toggleBtn').on('click', function () {
        $('.header__list__mobile').slideToggle(500, function () {

        }).css('display', 'flex');
        $('.header__button').toggleClass('active');
    });
}
