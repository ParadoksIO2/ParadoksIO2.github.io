if (window.innerWidth > 1200) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".question", // Селектор для секции
            start: "top 10% top", // Запуск, когда верх секции достигает центра экрана
            end: "bottom center", // Конец, когда низ секции достигает центра экрана
            toggleActions: "play reverse play reverse", // Включаем обратное воспроизведение
            
        },
    })
        // h3 выезжает сверху вниз, а при обратном скролле "уезжает" вверх
        .fromTo(
            ".question__title h3",
            {
                y: "-100%", // Начальная позиция
                opacity: 0.5, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.5,
                ease: "power2.out",
            }
        )
        // h2 выезжает сверху вниз, а затем уходит обратно вверх
        .fromTo(
            ".question__text h2",
            {
                y: "200%",
                opacity: 0.5,
            },
            {
                y: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },
            "<" // Начинает одновременно с предыдущей анимацией
        )
        // whatis__list выезжает слева, затем уходит обратно влево
        .fromTo(
            ".whatis__list",
            {
                x: "-100%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },
            "<"
        )
        // question__block__last выезжает справа, затем уходит обратно вправо
        .fromTo(
            ".question__block__last",
            {
                x: "600%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },
            "<"
        )
        // Первые два question__block__link__item выезжают слева, а затем уходят обратно
        .fromTo(
            ".question__block__link__item:nth-child(1), .question__block__link__item:nth-child(3)",
            {
                x: "-100%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },
            "<"
        )
        // Последние два question__block__link__item выезжают справа, а затем уходят обратно
        .fromTo(
            ".question__block__link__item:nth-child(2), .question__block__link__item:nth-child(4)",
            {
                x: "200%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
            },
            "<"
        )
        // question__vid выезжает справа, затем уходит обратно вправо
        .fromTo(
            ".question__vid",
            {
                x: "200%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        );
 } 

gsap.fromTo(
    '.news__list > *',
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
            trigger: '.news__list',
            start: 'top center', // Когда секция появляется
            end: 'bottom center', // Когда секция скрывается
            toggleActions: "play none none none",
            onLeave: () => {
                // Анимация ухода при прокрутке вверх
                gsap.to('.news__list > :nth-child(1)', {
                    x: -200, // Уход влево
                    y: -200, // Уход вверх
                    rotation: 15, // Поворот на 15 градусов
                    opacity: 0, // Исчезновение
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to('.news__list > :nth-child(2)', {
                    x: 200, // Уход вправо
                    y: -200, // Уход вверх
                    rotation: -15, // Поворот на -15 градусов
                    opacity: 0, // Исчезновение
                    duration: 1,
                    ease: "power2.out",
                });
            },
            onEnterBack: () => {
                // Возвращение элементов в исходное состояние
                gsap.to('.news__list > :nth-child(1)', {
                    x: 0,
                    y: 0,
                    rotation: 0, // Восстановление угла
                    opacity: 1, // Появление
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to('.news__list > :nth-child(2)', {
                    x: 0,
                    y: 0,
                    rotation: 0, // Восстановление угла
                    opacity: 1, // Появление
                    duration: 1,
                    ease: "power2.out",
                });
            },
        },
    }
);

gsap.fromTo(
    '.news__list1 > *',
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
            trigger: '.news__list1',
            start: 'top center', // Когда секция появляется
            end: 'bottom center', // Когда секция скрывается
            toggleActions: "play none none none",
            onLeave: () => {
                // Анимация ухода при прокрутке вверх
                gsap.to('.news__list1 > :nth-child(1)', {
                    x: -200, // Уход влево
                    y: -200, // Уход вверх
                    rotation: 15, // Поворот на 15 градусов
                    opacity: 0, // Исчезновение
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to('.news__list1 > :nth-child(2)', {
                    x: 200, // Уход вправо
                    y: -200, // Уход вверх
                    rotation: -15, // Поворот на -15 градусов
                    opacity: 0, // Исчезновение
                    duration: 1,
                    ease: "power2.out",
                });
            },
            onEnterBack: () => {
                // Возвращение элементов в исходное состояние
                gsap.to('.news__list1 > :nth-child(1)', {
                    x: 0,
                    y: 0,
                    rotation: 0, // Восстановление угла
                    opacity: 1, // Появление
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to('.news__list1 > :nth-child(2)', {
                    x: 0,
                    y: 0,
                    rotation: 0, // Восстановление угла
                    opacity: 1, // Появление
                    duration: 1,
                    ease: "power2.out",
                });
            },
        },
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