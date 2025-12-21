import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  sizes: string[];
  brands: string[];
  priceRange: [number, number];
}

const categoryOptions = ["Dresses", "Tops", "Bottoms", "Outerwear", "Shoes", "Accessories"];
const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
const brandOptions = ["Calvin Klein", "Tommy Hilfiger", "Ralph Lauren", "Michael Kors", "Levi's", "Adidas"];

const FilterSidebar = ({ isOpen, onClose, onFilterChange }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    sizes: [],
    brands: [],
    priceRange: [0, 500],
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: true,
    brand: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (type: keyof Omit<FilterState, "priceRange">, value: string) => {
    setFilters((prev) => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      const newFilters = { ...prev, [type]: updated };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      categories: [],
      sizes: [],
      brands: [],
      priceRange: [0, 500],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.sizes.length > 0 ||
    filters.brands.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 500;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-72 bg-background border-r z-50 transform transition-transform duration-300 lg:transform-none ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full overflow-y-auto p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold">Filters</h2>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear All
                </Button>
              )}
              <button className="lg:hidden p-2 hover:bg-muted rounded" onClick={onClose}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="border-b pb-4 mb-4">
            <button
              className="flex items-center justify-between w-full font-semibold py-2"
              onClick={() => toggleSection("category")}
            >
              Category
              {expandedSections.category ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSections.category && (
              <div className="space-y-2 mt-2">
                {categoryOptions.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 cursor-pointer hover:text-sale"
                  >
                    <Checkbox
                      checked={filters.categories.includes(category)}
                      onCheckedChange={() => toggleFilter("categories", category)}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="border-b pb-4 mb-4">
            <button
              className="flex items-center justify-between w-full font-semibold py-2"
              onClick={() => toggleSection("size")}
            >
              Size
              {expandedSections.size ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSections.size && (
              <div className="flex flex-wrap gap-2 mt-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter("sizes", size)}
                    className={`px-3 py-1.5 text-sm border rounded transition-colors ${
                      filters.sizes.includes(size)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="border-b pb-4 mb-4">
            <button
              className="flex items-center justify-between w-full font-semibold py-2"
              onClick={() => toggleSection("brand")}
            >
              Brand
              {expandedSections.brand ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSections.brand && (
              <div className="space-y-2 mt-2">
                {brandOptions.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-2 cursor-pointer hover:text-sale"
                  >
                    <Checkbox
                      checked={filters.brands.includes(brand)}
                      onCheckedChange={() => toggleFilter("brands", brand)}
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price Filter */}
          <div className="pb-4">
            <button
              className="flex items-center justify-between w-full font-semibold py-2"
              onClick={() => toggleSection("price")}
            >
              Price Range
              {expandedSections.price ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSections.price && (
              <div className="mt-4 px-1">
                <Slider
                  value={filters.priceRange}
                  onValueChange={handlePriceChange}
                  max={500}
                  min={0}
                  step={10}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>£{filters.priceRange[0]}</span>
                  <span>£{filters.priceRange[1]}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
