document.addEventListener('DOMContentLoaded', () => {
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburguer.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    const elementosParaAnimar = document.querySelectorAll('.projeto-card-v, .skill-card, .sobre-wrapper');

    const observerOptions = {
        root: null, 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementosParaAnimar.forEach(elemento => {
        elemento.classList.add('reveal-hidden'); 
        scrollObserver.observe(elemento);
    });
});