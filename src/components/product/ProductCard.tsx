import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize, product.colors[0]);
      setSelectedSize(null);
    }
  };

  return (
    <div className="group relative bg-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
              JAUNUMS
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-success text-success-foreground px-2 py-0.5 text-xs font-bold">
              BESTSELLERS
            </span>
          )}
          <span className="sale-badge">-{product.discount}%</span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 right-2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? "fill-sale text-sale" : "text-foreground"
            }`}
          />
        </button>

        {/* Quick View Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowQuickView(!showQuickView);
          }}
          className="absolute bottom-2 right-2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
        >
          <Eye className="h-5 w-5" />
        </button>
      </Link>

      {/* Product Info */}
      <div className="p-3">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium mt-1 line-clamp-2 hover:underline">
            {product.name}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-2">
          <span className="price-original">
            MC €{product.originalPrice.toFixed(2)}
          </span>
          <span className="price-sale">€{product.salePrice.toFixed(2)}</span>
        </div>

        {/* Quick Size Selector */}
        <div
          className={`mt-3 transition-all duration-300 ${
            showQuickView
              ? "opacity-100 max-h-40"
              : "opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40"
          }`}
        >
          <p className="text-xs text-muted-foreground mb-2">Ātrā pievienošana:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 5).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border rounded transition-colors ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background hover:border-foreground"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          {selectedSize && (
            <Button
              variant="sale"
              size="sm"
              className="w-full mt-2"
              onClick={handleAddToCart}
            >
              Pievienot Grozam
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;