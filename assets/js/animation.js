document.addEventListener("DOMContentLoaded", () => {
    // main-title и sub__title появляются сверху вниз
    gsap.from([".main-title", ".sub__title"], {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
    });

    // title__arrow__animated появляется сверху вниз
   

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

    



    // PIN THER SCROLL

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

    const catalogBackground = document.querySelector('.catalog__background');
    const catalogItems = document.querySelectorAll('.catalog__item');

    // Анимация секции каталога
    function animateCatalogSection() {
        if (window.innerWidth > 1200) {
        // Анимация фона
        gsap.fromTo(catalogBackground,
            {
                scale: 0.9,
            },
            {
                scale: 3,
                scrollTrigger: {
                    trigger: '.catalog',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
        }

        // Анимация элементов каталога с временной линией
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.catalog',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1,
            }
        });

        catalogItems.forEach((item, index) => {
            tl.fromTo(item,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                },
                index * 0.3
            );
        });
    }

    // Инициализация при загрузке
    animateCatalogSection();

    // Обновление при изменении размера окна
    window.addEventListener("resize", animateCatalogSection);

    // LINKS

    const linksBackground = document.querySelector('.links__background');
    const linksItems = document.querySelectorAll('.links__item');
    const linksWrappers = document.querySelectorAll('.links__list__wrapper');

    const calculateFinalWidth = () => {
        const screenWidth = window.innerWidth;
        return screenWidth * 1.2; // Коэффициент увеличения (можно настроить)
    };

    
    // Анимация для links__background
    gsap.fromTo(linksBackground,
        
        {
            width: '20px', // Начальная ширина
            height: '20px', // Начальная высота
            borderRadius: '50%',
            y: '20%', // Наполовину выглядывает сверху
            x: '-50%',
        },
        {
            width: calculateFinalWidth(), // Финальная ширина зависит от размера экрана
            height: calculateFinalWidth(), // Финальная высота совпадает с шириной

            y: '0%',
            x: '0%',
            transform: 'translate(-50%, -50%)',
            duration: 1, // Длительность анимации
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.links__list__wrapper',
                start: 'top bottom', // Анимация начинается, когда секция появляется
                end: 'top center', // Заканчивается на середине экрана
                scrub: true, // Плавная анимация при прокрутке
            }
        }
    );

    // Анимация для links__list (первые 6 слева направо, следующие 6 справа налево)
    linksWrappers.forEach((wrapper, wrapperIndex) => {
        const items = wrapper.querySelectorAll('.links__item');
        const isLeftToRight = wrapperIndex === 0; // Первый блок слева направо, второй справа налево

        items.forEach((item, itemIndex) => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    x: isLeftToRight ? -100 : 100, // Начальная позиция (слева или справа)
                },
                {
                    opacity: 1,
                    x: 0, // Конечная позиция
                    duration: 0.5, // Длительность анимации для каждого элемента
                    ease: "power2.out",
                    delay: itemIndex * 0.2, // Задержка между элементами
                    scrollTrigger: {
                        trigger: '.links',
                        start: 'top center', // Анимация начинается, когда секция попадает в центр экрана
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    });

    
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

    gsap.fromTo('.question__container .question__footer > *', 
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
                start: 'top top', // Когда верх секции достигает низа экрана
                end: 'bottom top', // Когда низ секции достигает верха экрана
                
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
});
