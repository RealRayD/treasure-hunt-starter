import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brands } from "@/data/products";

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Populārākie Zīmoli
        </h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background shadow-lg rounded-full hover:bg-muted transition-colors hidden md:block"
            aria-label="Ritināt pa kreisi"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-background shadow-lg rounded-full hover:bg-muted transition-colors hidden md:block"
            aria-label="Ritināt pa labi"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Brand list */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-2 md:px-10"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 w-28 md:w-36 h-20 md:h-24 bg-background rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
              >
                <span className="text-2xl md:text-3xl font-black text-muted-foreground">
                  {brand.logo}
                </span>
              </div>
            ))}
            {/* Duplicate for seamless scroll feel */}
            {brands.slice(0, 4).map((brand) => (
              <div
                key={`dup-${brand.id}`}
                className="flex-shrink-0 w-28 md:w-36 h-20 md:h-24 bg-background rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
              >
                <span className="text-2xl md:text-3xl font-black text-muted-foreground">
                  {brand.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;