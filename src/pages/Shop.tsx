import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SlidersHorizontal, Grid3X3, LayoutGrid, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FilterSidebar, { FilterState } from "@/components/shop/FilterSidebar";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

type SortOption = "featured" | "price-low" | "price-high" | "newest" | "discount";

const Shop = () => {
  const { category } = useParams<{ category?: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    sizes: [],
    brands: [],
    priceRange: [0, 500],
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by URL category
    if (category && category !== "all") {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Apply sidebar filters
    if (filters.brands.length > 0) {
      result = result.filter((p) => filters.brands.includes(p.brand));
    }

    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((size) => filters.sizes.includes(size))
      );
    }

    result = result.filter(
      (p) =>
        p.salePrice >= filters.priceRange[0] &&
        p.salePrice <= filters.priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case "price-high":
        result.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "discount":
        result.sort((a, b) => b.discount - a.discount);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [category, filters, sortBy]);

  const pageTitle = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} | TreasureHunt`
    : "Shop All | TreasureHunt";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`Shop ${category || "all"} products at amazing prices. Up to 60% off designer brands.`}
        />
      </Helmet>

      <Layout>
        <div className="container py-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-4">
            <span>Home</span> / <span>Shop</span>
            {category && (
              <>
                {" "}
                / <span className="text-foreground capitalize">{category}</span>
              </>
            )}
          </nav>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold capitalize">
                {category || "All Products"}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setIsFilterOpen(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-background border rounded-md px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Biggest Discount</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
              </div>

              {/* Grid Toggle */}
              <div className="hidden md:flex items-center gap-1 border rounded-md p-1">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1.5 rounded ${
                    gridCols === 3 ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-1.5 rounded ${
                    gridCols === 4 ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-6">
            {/* Filter Sidebar */}
            <FilterSidebar
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              onFilterChange={setFilters}
            />

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg font-medium mb-2">No products found</p>
                  <p className="text-muted-foreground">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div
                  className={`grid gap-4 md:gap-6 ${
                    gridCols === 3
                      ? "grid-cols-2 md:grid-cols-3"
                      : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
