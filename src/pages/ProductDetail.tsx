import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Heart, Truck, RotateCcw, Shield, ChevronLeft, Minus, Plus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/product/ProductGrid";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      for (let i = 0; i < quantity; i++) {
        addItem(product, selectedSize, selectedColor);
      }
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock multiple images
  const images = [product.image, product.image, product.image];

  return (
    <>
      <Helmet>
        <title>{`${product.name} by ${product.brand} | TreasureHunt`}</title>
        <meta
          name="description"
          content={`Shop ${product.name} by ${product.brand}. Save ${product.discount}% off RRP. Now only £${product.salePrice.toFixed(2)}.`}
        />
      </Helmet>

      <Layout>
        <div className="container py-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground">Shop</Link>
            <span>/</span>
            <Link
              to={`/shop/${product.category.toLowerCase()}`}
              className="hover:text-foreground"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Back Link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          {/* Product Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-lg">
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                      NEW
                    </span>
                  )}
                  <span className="sale-badge text-sm">-{product.discount}%</span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                      activeImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-lg font-bold text-muted-foreground uppercase tracking-wide">
                  {product.brand}
                </p>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">{product.name}</h1>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-sale">
                  £{product.salePrice.toFixed(2)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  RRP £{product.originalPrice.toFixed(2)}
                </span>
                <span className="sale-badge ml-2">Save {product.discount}%</span>
              </div>

              {/* Color Selection */}
              <div>
                <p className="font-semibold mb-3">
                  Colour:{" "}
                  <span className="font-normal text-muted-foreground">
                    {selectedColor || "Select a colour"}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md text-sm transition-colors ${
                        selectedColor === color
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold">
                    Size:{" "}
                    <span className="font-normal text-muted-foreground">
                      {selectedSize || "Select a size"}
                    </span>
                  </p>
                  <button className="text-sm text-muted-foreground hover:text-foreground underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-semibold mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <Button
                  variant="sale"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor}
                >
                  Add to Bag
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isWishlisted ? "fill-sale text-sale" : ""
                    }`}
                  />
                </Button>
              </div>

              {(!selectedSize || !selectedColor) && (
                <p className="text-sm text-muted-foreground">
                  Please select a size and colour to add to bag
                </p>
              )}

              {/* Delivery Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Free Delivery Over £50</p>
                    <p className="text-sm text-muted-foreground">
                      Estimated delivery: 3-5 business days
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Free 30-Day Returns</p>
                    <p className="text-sm text-muted-foreground">
                      Easy returns with free collection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Secure Checkout</p>
                    <p className="text-sm text-muted-foreground">
                      100% secure payment processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <ProductGrid products={relatedProducts} title="Style It With" />
            </section>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
