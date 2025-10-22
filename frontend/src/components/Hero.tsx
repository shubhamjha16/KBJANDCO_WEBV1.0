import React from 'react';

const slides = [
  {
    title: "Welcome to KBJ & Company",
    subtitle: "We specialize in service laws, labour & industrial laws",
    link: "#about",
    image: "/images/hero/hero1.jpg"
  },
  {
    title: "Expert Legal Representation",
    subtitle: "We have experience in retail, investment, transportation, construction, and litigation",
    link: "#practice-areas",
    image: "/images/hero/hero2.jpg"
  },
  {
    title: "Comprehensive Legal Solutions",
    subtitle: "We can help you in every legal matter",
    link: "#contact",
    image: "/images/hero/hero3.jpg"
  },
  {
    title: "Property & Civil Disputes",
    subtitle: "We expertise in property laws, matrimonial cases, civil disputes and criminal trials",
    link: "#practice-areas",
    image: "/images/hero/hero4.jpg"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <a href={slide.link} className="cta-button">Read More</a>
            </div>
          </div>
        ))}
        <button className="slider-nav prev" aria-label="Previous slide" onClick={prevSlide}>
          &lt;
        </button>
        <button className="slider-nav next" aria-label="Next slide" onClick={nextSlide}>
          &gt;
        </button>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
