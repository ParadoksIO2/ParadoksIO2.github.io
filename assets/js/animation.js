document.addEventListener("DOMContentLoaded", () => {
    // main-title и sub__title появляются сверху вниз
    gsap.from([".main-title", ".sub__title"], {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    });

    // title__arrow__animated появляется сверху вниз
    gsap.from(".title__arrow__animated", {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    });

    // title__theme__arrow (первый слева, второй справа)
    gsap.from(".title__theme__arrow:first-child", {
        x: -500,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    });
    gsap.from(".title__theme__arrow__rev", {
        x: 500,
        opacity: 0,
        duration: 0.5,
        ease: "power7.out",
    });

    // title__image__container появляется снизу вверх
    gsap.from(".title__image__container", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    });

    // title__footer появляется справа налево
    gsap.from(".title__footer", {
        x: "100%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from("#header", {
        y: "-100%", // Исходная позиция — за пределами экрана сверху
        opacity: 0, // Начальная прозрачность
        duration: 0.5, // Длительность анимации
        ease: "power2.out", // Плавное ускорение/замедление
        scrollTrigger: {
            trigger: ".title", // Секция, за пределы которой мы следим
            start: "bottom top", // Когда нижняя граница .title пересекает верх экрана
            toggleActions: "play none none reverse", // Анимация включается и выключается
        },
    });

    const sections = document.querySelectorAll(".section");
const footer = document.querySelector('.footer');

const isDesktop = window.innerWidth >= 1200;

function initStickyScroll() {
    // Удаляем все предыдущие ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (isDesktop) {
        // Массив с индексами предпоследней и последней секции
        const lastSections = [sections.length - 2, sections.length - 1]; 

        sections.forEach((section, index) => {
            const isLastSection = lastSections.includes(index); // Проверяем, является ли секция последней или предпоследней

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top", // Триггер активируется, как только секция встаёт на экран
                    end: isLastSection
                        ? "bottom top" // Для последней и предпоследней секций прокручиваем их до конца
                        : "bottom top", // Для остальных секций прокручиваем как обычно
                    scrub: 1, // Плавность перехода
                    pin: !isLastSection, // Закрепляем все, кроме последней и предпоследней секций
                    pinSpacing: false, // Включаем отступы для закрепленных секций
                },
            });
        });
    }
}

// Инициализация при загрузке
initStickyScroll();

// Обновление при изменении размера окна
window.addEventListener("resize", () => {
    const isNowDesktop = window.innerWidth >= 1200;

    if (isDesktop !== isNowDesktop) {
        initStickyScroll();
    }
});
    
});
