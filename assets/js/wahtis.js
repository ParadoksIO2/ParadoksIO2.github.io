gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
                opacity: 0.8, // Начальная прозрачность
            },
            {
                y: "0%", // Финальная позиция
                opacity: 1, // Финальная прозрачность
                duration: 0.8,
                ease: "power2.out",
            }
        )
        // h2 выезжает сверху вниз, а затем уходит обратно вверх
        .fromTo(
            ".question__text h2",
            {
                y: "100%",
                opacity: 0.8,
            },
            {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<" // Начинает одновременно с предыдущей анимацией
        )
        // whatis__list выезжает слева, затем уходит обратно влево
        .fromTo(
            ".whatis__list",
            {
                x: "-100%",
                opacity: 0.8,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // question__block__last выезжает справа, затем уходит обратно вправо
        .fromTo(
            ".question__block__last",
            {
                x: "600%",
                opacity: 0.8,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Первые два question__block__link__item выезжают слева, а затем уходят обратно
        .fromTo(
            ".question__block__link__item:nth-child(1), .question__block__link__item:nth-child(3)",
            {
                x: "-100%",
                opacity: 0.8,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // Последние два question__block__link__item выезжают справа, а затем уходят обратно
        .fromTo(
            ".question__block__link__item:nth-child(2), .question__block__link__item:nth-child(4)",
            {
                x: "200%",
                opacity: 0.8,
            },
            {
                x: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "<"
        )
        // question__vid выезжает справа, затем уходит обратно вправо
        .fromTo(
            ".question__vid",
            {
                x: "200%",
                opacity: 0.8,
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

ScrollTrigger.create({
    trigger: ".info",
    start: "center center", // Когда секция находится в центре экрана
    onEnter: () => {
        gsap.timeline()
            // Останавливаем прокрутку
            .to(window, {
                scrollTo: { y: window.scrollY, autoKill: false }, // Остановка прокрутки
                duration: 0.5, // Длительность остановки прокрутки
                ease: "none",
            })
            // Плавно показываем текст
            
    },
    
});

gsap.fromTo(
    ".info__content__text",
    {
        x: "-100%", // Текст скрыт за пределами экрана (слева)
        opacity: 0, // Невидим
    },
    {
        x: "0%", // Финальная позиция
        opacity: 1, // Финальная прозрачность
        duration: 1, // Длительность анимации
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".info__wrapper",
            start: "center center", // Анимация начинается, когда секция на центре
            end: "center center", // Заканчивается одновременно с появлением
            scrub: true, // Плавная анимация
        },
    }
);

gsap.fromTo(
    ".info__content__image",
    {
        x: "100%", // Изображение выезжает справа
        opacity: 0, // Начальная прозрачность
    },
    {
        x: "0%", // Финальная позиция
        opacity: 1, // Финальная прозрачность
        duration: 1, // Длительность анимации
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".info__wrapper",
            start: "top center", // Анимация начинается, когда секция на центре
            end: "top center", // Заканчивается одновременно с появлением
            scrub: true, // Плавная анимация
        },
    }
);

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
            duration: 1, // Длительность анимации
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.info__wrapper',
                start: 'top 90% bottom', // Анимация начинается, когда секция появляется
                end: 'top center', // Заканчивается на середине экрана
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

if (window.innerWidth > 1200) { 
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
 }

