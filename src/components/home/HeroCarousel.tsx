import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { heroSlides } from '../../data/cases';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="pt-20">
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">{slide.subtitle}</p>
                <Link
                  to={slide.link}
                  className="inline-block bg-secondary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary/90 transition"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
