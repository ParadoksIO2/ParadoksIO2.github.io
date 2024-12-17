gsap.fromTo('.question__content > *',
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
            trigger: '.question__content',
            start: 'top center', // Когда форма появляется в центре экрана
            end: 'bottom center', // Когда она уходит из центра

            toggleActions: "play none none none"
        }
    }
);

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