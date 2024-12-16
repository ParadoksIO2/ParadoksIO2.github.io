if ($(window).width() > 1203) {

} else {
    $('#toggleBtn').on('click', function () {
        $('.header__list__mobile').slideToggle(500, function () {

        }).css('display', 'flex');
        $('.header__button').toggleClass('active');
    });
}

$(document).ready(function () {
    $('.header__lang__item').click(function () {
        // Убираем класс active у всех элементов
        $('.header__lang__item').removeClass('active');
        // Добавляем класс active к текущему элементу
        $(this).addClass('active');
    });

    
    const $header = $("#header");

    // Изначально скрываем header
    $header.css({
        transform: "translateY(-100%)",
        opacity: 0,
        transition: "transform 0.5s ease, opacity 0.5s ease",
    });

    // Следим за прокруткой
    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const viewportHeight = $(window).height(); // Высота окна

        if (scrollTop > viewportHeight) {
            // Показываем header, если прокрутка больше 100vh
            $header.css({
                transform: "translateY(0)",
                opacity: 1,
            });
        } else {
            // Скрываем header, если прокрутка меньше 100vh
            $header.css({
                transform: "translateY(-100%)",
                opacity: 0,
            });
        }
    });
});
