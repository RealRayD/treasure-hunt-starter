import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import CategoryGrid from "@/components/home/CategoryGrid";
import BrandCarousel from "@/components/home/BrandCarousel";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, RotateCcw, Shield, Percent } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 8);
  const newArrivals = products.filter((p) => p.isNew);
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <>
      <Helmet>
        <title>TreasureHunt | Designer Brands at Amazing Prices</title>
        <meta
          name="description"
          content="Discover designer brands at up to 60% off RRP. Shop women's, men's, kids' fashion, home decor and more. New arrivals daily!"
        />
      </Helmet>

      <Layout>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Value Props */}
        <section className="py-6 border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">Free Delivery Over £50</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">30-Day Returns</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">Secure Checkout</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Percent className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">Up to 60% Off RRP</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Department */}
        <CategoryGrid />

        {/* Featured Brands */}
        <BrandCarousel />

        {/* New Arrivals */}
        {newArrivals.length > 0 && (
          <ProductGrid products={newArrivals} title="Just Landed ✨" />
        )}

        {/* Featured Products */}
        <ProductGrid products={featuredProducts} title="Top Picks For You" />

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <ProductGrid products={bestSellers} title="Best Sellers 🔥" />
        )}

        {/* Shop All CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Discover More?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Explore thousands of designer items at amazing prices. New treasures arrive every day!
            </p>
            <Link to="/shop">
              <Button variant="hero" size="xl">
                Shop All Products
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
