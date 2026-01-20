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
        <title>DressCod | Dizaineru Zīmoli par Izdevīgām Cenām</title>
        <meta
          name="description"
          content="Atklājiet dizaineru zīmolus ar atlaidi līdz 60%. Iepērcieties sieviešu, vīriešu, bērnu apģērbā un mājās. Jaunas preces katru dienu!"
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
                <p className="text-sm font-medium">Bezmaksas piegāde virs €50</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">30 dienu atgriešana</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">Droša apmaksa</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Percent className="h-6 w-6 text-sale" />
                <p className="text-sm font-medium">Līdz 60% atlaide</p>
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
          <ProductGrid products={newArrivals} title="Tikko Ienākušie ✨" />
        )}

        {/* Featured Products */}
        <ProductGrid products={featuredProducts} title="Mūsu Izvēle" />

        {/* Best Sellers */}
        {bestSellers.length > 0 && (
          <ProductGrid products={bestSellers} title="Visvairāk Pārdotie 🔥" />
        )}

        {/* Shop All CTA */}
        <section className="py-12 bg-muted/50">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Gatavs Atklāt Vairāk?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Izpētiet tūkstošiem dizaineru preču par izdevīgām cenām. Jaunas preces katru dienu!
            </p>
            <Link to="/shop">
              <Button variant="hero" size="xl">
                Skatīt Visas Preces
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;