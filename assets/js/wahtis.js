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

gsap.fromTo('.question__container .question__content > *',
    {
        y: 300, // Начальная позиция: снизу
        opacity: 0, // Начальная непрозрачность: невидимый
    },
    {
        y: 0, // Конечная позиция: на своём месте
        opacity: 1, // Конечная непрозрачность: видимый
        duration: 1.6, // Длительность анимации
        stagger: 0.2, // Задержка между элементами
        ease: "power2.out", // Плавное завершение анимации
        scrollTrigger: {
            trigger: '.question', // Триггер на секцию
            start: 'top center', // Когда верх секции достигает низа экрана
            end: 'bottom top', // Когда низ секции достигает верха экрана

        }
    }
);

// info

const linksBackground = document.querySelector('.info__background');
const infoContentText = document.querySelector('.info__content__text');
const infoArrow = document.querySelector('.info__background__arrow');
const infoLogo = document.querySelector('.info__content__image');

const wrapLines = (element) => {
    const text = element.innerHTML;
    const lines = text.split(/\n/).map(line => line.trim()).filter(line => line.length > 0);
    element.innerHTML = lines.map(line => `<span class="text-line">${line}</span>`).join('<br>');
};

wrapLines(infoContentText);

gsap.fromTo(
    '.text-line',
    { opacity: 0, y: 30 },
    {
        opacity: 1,
        y: 0,
        stagger: 0.2, // Задержка между анимацией строк
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.info__wrapper',
            start: 'top center',
            toggleActions: "play none none none",
        }
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


gsap.fromTo(infoLogo,
    {
        opacity: 0,
        y: 200,
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.info__wrapper',
            start: 'top center', 
            end: 'top center', // Заканчивается на середине экрана// Конец анимации совпадает с началом
            scrub: true, // Убираем плавность, чтобы анимация завершалась мгновенно
        }
    }
);

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