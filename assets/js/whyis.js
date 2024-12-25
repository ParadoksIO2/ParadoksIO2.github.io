if (window.innerWidth > 1200) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".question", // Селектор для секции
            start: "top 10% top", // Начало анимации
            end: "bottom center", // Конец анимации
            toggleActions: "play reverse play reverse", // Включаем обратное воспроизведение
        },
    })
        // h3 выезжает сверху вниз
        .fromTo(
            ".question__title h3",
            {
                y: "-100%", // Начальная позиция (сверху)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            }
        )
        // Первый h2 выезжает снизу вверх
        .fromTo(
            ".question__title h2:first-of-type",
            {
                y: "100%", // Начальная позиция (снизу)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Второй h2 выезжает слева направо
        .fromTo(
            ".mod__title",
            {
                x: "-100%", // Начальная позиция (слева)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                x: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Первая и четвертая question__block__link__item выезжают снизу
        .fromTo(
            ".question__block__link__item:nth-child(1), .question__block__link__item:nth-child(4)",
            {
                y: "250%", // Начальная позиция (снизу)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Вторая и третья question__block__link__item выезжают сверху
        .fromTo(
            ".question__block__link__item:nth-child(2), .question__block__link__item:nth-child(3)",
            {
                y: "-250%", // Начальная позиция (сверху)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Все question__block__link__item__mod выезжают снизу вместе
        .fromTo(
            ".question__block__link__item__mod",
            {
                y: "100%", // Начальная позиция (снизу)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.1, // Задержка между элементами
            },
            "<"
        )
        // question__vid выезжает справа налево
        .fromTo(
            ".question__vid",
            {
                x: "150%", // Начальная позиция (справа)
                opacity: 0.8, // Начальная прозрачность
            },
            {
                x: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        );
}

gsap.fromTo('.hook__content > *',
    {
        opacity: 0,
        y: 100, // Начальная позиция снизу
    },
    {
        opacity: 1,
        y: 0, // Конечная позиция
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.hook__content',
            start: 'top center', // Когда форма появляется в центре экрана
            end: 'bottom center', // Когда она уходит из центра

            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo('.contact__form > *', 
    {
        opacity: 0, 
        y: 100, // Начальная позиция снизу
    },
    {
        opacity: 1,
        y: 0, // Конечная позиция
        duration: 1, 
        stagger: 0.3, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: '.contact__slider',
            start: 'top 20% top', // Когда форма появляется в центре экрана
            end: 'center center', // Когда она уходит из центра
            
            toggleActions: "play none none none"
        }
    }
);