document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot');
    let currentSection = 0;
    let isScrolling = false;

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            sections.forEach((section, i) => {
                section.style.transform = `translateY(${(i - index) * 100}%)`;
                section.style.opacity = i === index ? '1' : '0';
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSection = index;
        }
    };

    const handleScroll = (event) => {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY > 0) {
            if (currentSection < sections.length - 1) {
                currentSection++;
            }
        } else {
            if (currentSection > 0) {
                currentSection--;
            }
        }
        scrollToSection(currentSection);

        setTimeout(() => {
            isScrolling = false;
        }, 700); // Tiempo de transición
    };

    window.addEventListener('wheel', handleScroll);

    // Navegación por clic en el menú
    document.querySelectorAll('.menu a').forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection(index);
        });
    });

    // Navegación por clic en los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToSection(index);
        });
    });
    
    const createBox = (tech) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.color = tech.color;
        box.textContent = tech.name;
        return box;
    };

    technologies.forEach(tech => {
        sliderContent.appendChild(createBox(tech));
    });

    technologies.forEach(tech => {
        sliderContent.appendChild(createBox(tech));
    });
});


const events = document.querySelectorAll(".event");
let delay = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("visible");
            }, delay);
            delay += 500; // Aumentamos el delay para el siguiente evento
        }
    });
}, { threshold: 0.5 });

events.forEach(event => observer.observe(event));
