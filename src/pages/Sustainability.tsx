import Layout from "@/components/layout/Layout";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

const Sustainability = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Sustainability</h1>
        
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-muted-foreground">
            At TreasureHunt, sustainability isn't just a buzzword—it's at the core of our 
            business model. By giving overstock and end-of-season merchandise a second chance, 
            we help reduce waste in the fashion industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border rounded-lg">
            <Recycle className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Circular Fashion</h3>
            <p className="text-muted-foreground">
              Our business model prevents millions of pounds of clothing from ending up in landfills 
              each year by finding new homes for surplus inventory.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <Leaf className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Packaging</h3>
            <p className="text-muted-foreground">
              We've eliminated single-use plastic from our packaging and use recycled materials 
              for all shipping boxes and bags.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <Globe className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Carbon Neutral Shipping</h3>
            <p className="text-muted-foreground">
              We offset 100% of carbon emissions from our shipping operations through verified 
              environmental projects.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <Heart className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Giving</h3>
            <p className="text-muted-foreground">
              Unsold items are donated to local charities and community organizations, ensuring 
              nothing goes to waste.
            </p>
          </div>
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-3xl font-bold text-green-600">5M+</p>
              <p className="text-muted-foreground text-sm">Items Saved from Landfills</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-muted-foreground text-sm">Recyclable Packaging</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-3xl font-bold text-green-600">50K</p>
              <p className="text-muted-foreground text-sm">Tons CO2 Offset</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-3xl font-bold text-green-600">$2M</p>
              <p className="text-muted-foreground text-sm">Donated to Charities</p>
            </div>
          </div>
        </section>
        
        <section className="my-12 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Our 2030 Goals</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Achieve net-zero carbon emissions across all operations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Divert 10 million items from landfills annually
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              100% renewable energy in all stores and warehouses
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              Expand clothing donation programs to all communities we serve
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Sustainability;
