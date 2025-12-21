import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "New Season Arrivals",
    subtitle: "Up to 60% less than RRP",
    cta: "Shop New In",
    link: "/shop/new",
    bgColor: "bg-gradient-to-r from-primary to-primary/80",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Flash Sale",
    subtitle: "Extra 20% off everything",
    cta: "Shop Sale",
    link: "/shop/clearance",
    bgColor: "bg-gradient-to-r from-sale to-sale/80",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Designer Brands",
    subtitle: "Always at amazing prices",
    cta: "Explore Brands",
    link: "/shop/brands",
    bgColor: "bg-gradient-to-r from-foreground to-foreground/80",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=800&fit=crop",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          {/* Content */}
          <div className="relative container h-full flex items-center">
            <div className="max-w-xl text-background">
              <p className="text-lg md:text-xl font-medium mb-2 animate-fade-in">
                {slide.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {slide.title}
              </h2>
              <Link to={slide.link}>
                <Button variant="hero" size="xl">
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-background w-8"
                : "bg-background/50 hover:bg-background/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
