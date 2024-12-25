$(document).ready(function () {
    let isUserInteracting = false; // Флаг для проверки взаимодействия пользователя
    const $slider = $(".contact__slider__place");
    const scrollSpeed = 1; // Скорость автоматической прокрутки (пиксели за кадр)
    let animationFrame;

    // Функция для автоматической прокрутки
    function autoScroll() {
        if (!isUserInteracting) {
            $slider.scrollLeft($slider.scrollLeft() + scrollSpeed);
        }
        animationFrame = requestAnimationFrame(autoScroll);
    }

    // Слушатели событий для остановки анимации при взаимодействии
    $slider.on("mousedown touchstart", function () {
        isUserInteracting = true;
    });

    $slider.on("mouseup mouseleave touchend", function () {
        isUserInteracting = false;
    });

    // Запуск анимации
    autoScroll();

    // Очистка анимации при закрытии/обновлении страницы
    $(window).on("beforeunload", function () {
        cancelAnimationFrame(animationFrame);
    });
});
