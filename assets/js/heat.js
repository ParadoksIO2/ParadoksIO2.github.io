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

// question

if (window.innerWidth > 1200) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".question", // Селектор для секции
            start: "top 10% top", // Запуск, когда верх секции достигает 10% от верхнего края
            end: "bottom center", // Конец, когда низ секции достигает центра экрана
            toggleActions: "play reverse play reverse", // Включаем обратное воспроизведение
        },
    })
        // h3 выезжает сверху вниз
        .fromTo(
            ".question__title h3",
            {
                y: "-100%", // Начальная позиция сверху
                opacity: 0.5, // Прозрачность
            },
            {
                y: "0%", // Конечная позиция
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            }
        )
        // Первый h2 выезжает снизу вверх
        .fromTo(
            ".question__text h2:first-of-type",
            {
                y: "100%", // Начальная позиция снизу
                opacity: 0.5,
            },
            {
                y: "0%", // Конечная позиция
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<" // Одновременно с предыдущей анимацией
        )
        // Второй h2 выезжает сверху вниз
        .fromTo(
            ".question__text h2:last-of-type",
            {
                y: "-100%", // Начальная позиция сверху
                opacity: 0.5,
            },
            {
                y: "0%", // Конечная позиция
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Первая линия question__heat__list выезжает сверху вниз
        .fromTo(
            ".question__heat__list > .question__block:nth-child(-n+3)", // Первые три элемента
            {
                y: "-100%", // Начальная позиция сверху
                opacity: 0.5, // Прозрачность
            },
            {
                y: "0%", // Конечная позиция
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2, // Задержка между элементами
            },
            "<" // Одновременно с предыдущей анимацией
        )
        // Последние три элемента выезжают снизу вверх
        .fromTo(
            ".question__heat__list > .question__block:nth-child(n+4)", // Последние три элемента
            {
                y: "100%", // Начальная позиция снизу
                opacity: 0.5,
            },
            {
                y: "0%", // Конечная позиция
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                stagger: 0.2, // Задержка между элементами
            },
            "<" // Одновременно с предыдущей анимацией
        )
        // question__block__mod выезжает слева
        .fromTo(
            ".question__block.question__block__mod",
            {
                x: "100%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // 1-й и 3-й элементы question__block__link выезжают слева
        .fromTo(
            ".question__block__link__item:nth-child(1), .question__block__link__item:nth-child(3)",
            {
                x: "-100%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",

            },
            "<"
        )
        // 2-й и 4-й элементы question__block__link выезжают справа
        .fromTo(
            ".question__block__link__item:nth-child(2), .question__block__link__item:nth-child(4)",
            {
                x: "100%",
                opacity: 0.5,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",

            },
            "<"
        )
        // question__vid выезжает справа
        .fromTo(
            ".question__vid",
            {
                x: "150%",
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

// info

const linksBackground = document.querySelector('.info__background');
const infoContentText = document.querySelector('.info__content__text');
const infoArrow = document.querySelector('.info__background__arrow');
const infoLogo = document.querySelector('.info__content__image');



const calculateFinalWidth = () => {
    const screenWidth = window.innerWidth;
    return screenWidth * 1.2; // Коэффициент увеличения (можно настроить)
};

if (window.innerWidth > 1200) {
    gsap.fromTo(linksBackground,
        {



        },
        {
            width: calculateFinalWidth(), // Финальная ширина зависит от размера экрана
            height: calculateFinalWidth(), // Финальная высота совпадает с шириной

            y: '30%',
            x: '0%',
            transform: 'translate(-50%, -50%)',
            duration: 2, // Длительность анимации
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.info__wrapper',
                start: 'top 70% bottom', // Анимация начинается, когда секция появляется
                end: 'top top', // Заканчивается на середине экрана
                scrub: true, // Плавная анимация при прокрутке
            }
        }
    );
}




gsap.fromTo(infoArrow,
    {
        opacity: 1,
    },
    {
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.info__content',
            start: 'top bottom', // Начало анимации, когда верх .info__wrapper касается нижней границы экрана
            end: 'top bottom', // Конец анимации совпадает с началом
            scrub: true, // Убираем плавность, чтобы анимация завершалась мгновенно
        }
    }
);

// Анимация для info__content__text1 (выезжает справа)
gsap.timeline({
    scrollTrigger: {
        trigger: ".info__content", // Общий родительский контейнер
        start: "top center", // Анимация запускается, когда секция в центре
        toggleActions: "play none none none", // Анимация проигрывается один раз
    },
})
    // Анимация для info__content__text1 (выезжает справа)
    .fromTo(
        ".info__content__text1",
        {
            x: "100%", // Начальная позиция (справа)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        }
    )
    // Анимация для info__content__text2 p (выезжает слева)
    .fromTo(
        ".info__content__text2 p",
        {
            x: "-100%", // Начальная позиция (слева)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущей анимацией
    )
    // Анимация для info__content__text2 img (выезжает сверху)
    .fromTo(
        ".info__content__text2 img",
        {
            y: -100, // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    );

gsap.timeline({
    scrollTrigger: {
        trigger: ".info__content1", // Общий родительский контейнер
        start: "top center", // Анимация запускается, когда секция в центре
        toggleActions: "play none none none", // Анимация проигрывается один раз
    },
})
    // Анимация для info__content__text1 (выезжает справа)
    .fromTo(
        ".info__content__text3",
        {
            y: "-100%", // Начальная позиция (справа)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        }
    )
    // Анимация для info__content__text2 p (выезжает слева)
    .fromTo(
        ".info__content__text4",
        {
            y: "-100%", // Начальная позиция (слева)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущей анимацией
    )
    // Анимация для info__content__text2 img (выезжает сверху)
    .fromTo(
        ".info__content__image__back1",
        {
            x: "100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    )
    .fromTo(
        ".info__content__image__back2",
        {
            x: "-100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    );

gsap.timeline({
    scrollTrigger: {
        trigger: ".info__content2", // Общий родительский контейнер
        start: "top center", // Анимация запускается, когда секция в центре
        toggleActions: "play none none none", // Анимация проигрывается один раз
    },
})
    // Анимация для info__content__text1 (выезжает справа)
    .fromTo(
        ".info__content__text5",
        {
            y: "-100%", // Начальная позиция (справа)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        }
    )
    // Анимация для info__content__text2 p (выезжает слева)
    .fromTo(
        ".info__content__text6",
        {
            x: "100%", // Начальная позиция (слева)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущей анимацией
    )
    // Анимация для info__content__text2 img (выезжает сверху)
    .fromTo(
        ".info__content__image__back3",
        {
            x: "-100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    )
    .fromTo(
        ".info__content__image__back4",
        {
            y: "100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    );

gsap.timeline({
    scrollTrigger: {
        trigger: ".info__content3", // Общий родительский контейнер
        start: "top center", // Анимация запускается, когда секция в центре
        toggleActions: "play none none none", // Анимация проигрывается один раз
    },
})
    // Анимация для info__content__text1 (выезжает справа)
    .fromTo(
        ".info__content__text7",
        {
            x: "-100%", // Начальная позиция (справа)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        }
    )
    // Анимация для info__content__text2 p (выезжает слева)
    .fromTo(
        ".info__content__text8",
        {
            y: "-100%", // Начальная позиция (слева)
            opacity: 0, // Невидим
        },
        {
            y: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущей анимацией
    )
    // Анимация для info__content__text2 img (выезжает сверху)
    .fromTo(
        ".info__content__image__back5",
        {
            x: "-100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    )
    .fromTo(
        ".info__content__image__back6",
        {
            x: "100%", // Начальная позиция (сверху)
            opacity: 0, // Невидим
        },
        {
            x: "0%", // Финальная позиция
            opacity: 1, // Полностью видимый
            duration: 1, // Длительность
            ease: "power2.out",
        },
        "<" // Одновременно с предыдущими анимациями
    );

// Анимация для info__content__image (выезжает справа, отдельно)
gsap.fromTo(
    ".info__content__image",
    {
        x: "200%", // Начальная позиция (справа)
        opacity: 0, // Невидим
    },
    {
        x: "0%", // Финальная позиция
        opacity: 1, // Полностью видимый
        duration: 1, // Длительность
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".info__content__image", // Триггер для изображения
            start: "top center", // Анимация запускается, когда секция в центре
            toggleActions: "play none none none",
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
            trigger: '.contact__form',
            start: 'top center', // Когда форма появляется в центре экрана
            end: 'bottom center', // Когда она уходит из центра

            toggleActions: "play none none none"
        }
    }
);

gsap.to(linksBackground, {
    backgroundColor: "#FFFFFF", // Целевой цвет
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.contact', // Секция, при появлении которой запускается анимация
        start: 'top 50% bottom', // Анимация начинается, когда верх .contact касается нижнего края экрана
        end: 'top 30% center', // Анимация завершается, когда верх .contact оказывается в центре экрана
        scrub: true, // Плавная анимация при прокрутке
    }
});

