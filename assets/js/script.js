if ($(window).width() > 1203) {

} else {
    $('#toggleBtn').on('click', function () {
        $('.header__list__mobile').slideToggle(500, function () {

        }).css('display', 'flex');
        $('.header__button').toggleClass('active');
    });
}


$('.header__lang__item').click(function () {
    // Убираем класс active у всех элементов
    $('.header__lang__item').removeClass('active');
    // Добавляем класс active к текущему элементу
    $(this).addClass('active');
});
