$(document).ready(function () {

    // 1. Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut('slow');
    });

    // 2. Navbar Toggle
    const navbarToggle = $('#navbar-toggle');
    const navbarMenu = $('#navbar-menu');

    navbarToggle.on('click', function () {
        navbarMenu.toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-times');
    });

    navbarMenu.on('click', '.navbar__menu-link', function () {
        if (navbarMenu.hasClass('active')) {
            navbarMenu.removeClass('active');
            navbarToggle.find('i').toggleClass('fa-bars fa-times');
        }
    });

    // 3. Smooth Scrolling
    $('a[href*="#"]').on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('.navbar').outerHeight()
            }, 800);
        }
    });

    // 4. Active Navbar Link on Scroll
    $(window).on('scroll', function () {
        const sections = $('section');
        const navLinks = $('.navbar__menu-link');
        const scrollPos = $(this).scrollTop() + $('.navbar').outerHeight() + 1;

        sections.each(function () {
            const currentSection = $(this);
            const sectionTop = currentSection.offset().top;
            const sectionHeight = currentSection.outerHeight();
            const sectionId = currentSection.attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.removeClass('active');
                $('.navbar__menu-link[href="#' + sectionId + '"]').addClass('active');
            } else if ($(window).scrollTop() + $(window).height() === $(document).height()) {
                navLinks.removeClass('active');
                $('.navbar__menu-link:last').addClass('active');
            }
        });
    });

    // 5. Theme Toggle
    const themeToggle = $('#theme-toggle');
    const body = $('body');
    const themeIcon = themeToggle.find('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.attr('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            themeIcon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            themeIcon.removeClass('fa-sun').addClass('fa-moon');
        }
    }

    themeToggle.on('click', function () {
        if (body.attr('data-theme') === 'dark') {
            body.attr('data-theme', 'light');
            themeIcon.removeClass('fa-sun').addClass('fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.attr('data-theme', 'dark');
            themeIcon.removeClass('fa-moon').addClass('fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 6. Language Selector
    const languageSelector = $('#language-selector');

    function setLanguage(lang) {
        // Traducción de textos normales (innerHTML o text)
        $('[data-i18n]').each(function () {
            const key = $(this).data('i18n');
            if (translations[lang] && translations[lang][key]) {
                $(this).html(translations[lang][key]);
            }
        });

        // Traducción de placeholders
        $('[data-i18n-placeholder]').each(function () {
            const key = $(this).data('i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                $(this).attr('placeholder', translations[lang][key]);
            }
        });
    }

    $(document).ready(function () {
        const initialLang = localStorage.getItem('lang') || languageSelector.val() || 'es';
        languageSelector.val(initialLang);
        setLanguage(initialLang);
    });

    languageSelector.on('change', function () {
        const selectedLang = $(this).val();
        setLanguage(selectedLang);
        localStorage.setItem('lang', selectedLang);
    });

    // 7. COUNTER ANIMATION - USANDO INTERSECTION OBSERVER
    function initCounterAnimation() {
        const counters = $('.about__stat-value');

        counters.each(function () {
            const $this = $(this);
            const target = parseInt($this.attr('data-counter'));

            $this.text('+0');

            $({ countNum: 0 }).animate({
                countNum: target
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text('+ ' + Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text('+ ' + target);
                }
            });
        });
    }

    const aboutSection = document.querySelector('#about');
    let countersAnimated = false;

    if ('IntersectionObserver' in window && aboutSection) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    initCounterAnimation();
                    countersAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(aboutSection);
    } else {
        // Fallback por compatibilidad
        $(window).on('scroll load', function () {
            if (!countersAnimated && $('#about').length) {
                initCounterAnimation();
                countersAnimated = true;
            }
        });
    }

    // 10. AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 11. Back to Top Button
    // 11. Back to Top Button
    const backToTopButton = $('#back-to-top');
    const footer = $('#footer');

    $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        const footerTop = footer.offset().top;

        // Mostrar o esconder botón
        if (scrollPosition > 100) {
            backToTopButton.addClass('active');
        } else {
            backToTopButton.removeClass('active');
        }

        // Cambiar color si el botón ya toca el footer
        if ((scrollPosition + windowHeight) >= footerTop) {
            backToTopButton.addClass('in-footer');
        } else {
            backToTopButton.removeClass('in-footer');
        }
    });

    backToTopButton.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // 12. Year auto update
    document.addEventListener('DOMContentLoaded', function () {
        const yearSpan = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        if (yearSpan) {
            yearSpan.textContent = currentYear;
        }
    });

    // 13. Modal dinámico con carrusel
    $('.project__item-link').on('click', function () {
        const images = JSON.parse($(this).attr('data-images'));
        const carouselInner = $('#projectCarousel .carousel-inner');

        carouselInner.empty(); // Limpiar imágenes anteriores

        images.forEach((src, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const item = `
                <div class="carousel-item ${activeClass}">
                    <img src="${src}" class="d-block w-100" alt="Imagen ${index + 1}">
                </div>
            `;
            carouselInner.append(item);
        });
    });

});