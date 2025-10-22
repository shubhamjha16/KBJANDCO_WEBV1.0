export class Hero {
    private currentSlide = 0;
    private slides = [
        {
            title: "Welcome to KBJ & Company",
            subtitle: "We specialize in service laws, labour & industrial laws",
            link: "#about"
        },
        {
            title: "Expert Legal Representation",
            subtitle: "We have experience in retail, investment, transportation, construction, and litigation",
            link: "#practice-areas"
        },
        {
            title: "Comprehensive Legal Solutions",
            subtitle: "We can help you in every legal matter",
            link: "#contact"
        },
        {
            title: "Property & Civil Disputes",
            subtitle: "We expertise in property laws, matrimonial cases, civil disputes and criminal trials",
            link: "#practice-areas"
        }
    ];

    render(): HTMLElement {
        const hero = document.createElement('section');
        hero.id = 'home';
        hero.className = 'hero';
        
        const slidesHTML = this.slides.map((slide, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}">
                <div class="slide-content">
                    <h2>${slide.title}</h2>
                    <p>${slide.subtitle}</p>
                    <a href="${slide.link}" class="cta-button">Read More</a>
                </div>
            </div>
        `).join('');

        hero.innerHTML = `
            <div class="hero-slider">
                ${slidesHTML}
                <button class="slider-nav prev" aria-label="Previous slide">&lt;</button>
                <button class="slider-nav next" aria-label="Next slide">&gt;</button>
                <div class="slider-dots">
                    ${this.slides.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`).join('')}
                </div>
            </div>
        `;

        // Add slider functionality
        this.setupSlider(hero);

        return hero;
    }

    private setupSlider(hero: HTMLElement): void {
        const slides = hero.querySelectorAll('.slide');
        const dots = hero.querySelectorAll('.dot');
        const prevBtn = hero.querySelector('.prev');
        const nextBtn = hero.querySelector('.next');

        const showSlide = (n: number) => {
            slides[this.currentSlide].classList.remove('active');
            dots[this.currentSlide].classList.remove('active');
            
            this.currentSlide = (n + slides.length) % slides.length;
            
            slides[this.currentSlide].classList.add('active');
            dots[this.currentSlide].classList.add('active');
        };

        prevBtn?.addEventListener('click', () => showSlide(this.currentSlide - 1));
        nextBtn?.addEventListener('click', () => showSlide(this.currentSlide + 1));

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        // Auto-advance slides
        setInterval(() => showSlide(this.currentSlide + 1), 5000);
    }
}
