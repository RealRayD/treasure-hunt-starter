import Layout from "@/components/layout/Layout";
import { Heart, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Our Story</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Founded in 2010, TreasureHunt has been on a mission to make designer fashion 
            accessible to everyone. We believe that great style shouldn't come with a 
            great price tag.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="p-6 border rounded-lg">
            <Target className="h-8 w-8 text-sale mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To bring the thrill of discovering amazing brands at unbelievable prices to 
              shoppers everywhere. Every visit should feel like finding hidden treasure.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg">
            <Heart className="h-8 w-8 text-sale mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-muted-foreground">
              Quality, authenticity, and value guide everything we do. We only partner with 
              trusted brands and never compromise on the products we offer.
            </p>
          </div>
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Why Shop With Us?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Award className="h-6 w-6 text-sale flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">100% Authentic Products</h4>
                <p className="text-muted-foreground">Every item is sourced directly from brands or authorized distributors.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-6 w-6 text-sale flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Up to 70% Off Retail</h4>
                <p className="text-muted-foreground">We specialize in overstock and end-of-season merchandise at incredible savings.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-6 w-6 text-sale flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">New Arrivals Daily</h4>
                <p className="text-muted-foreground">Fresh inventory hits our shelves every day—the treasure hunt never ends!</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">500+</p>
              <p className="text-muted-foreground">Brands</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">10M+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">200+</p>
              <p className="text-muted-foreground">Store Locations</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">15</p>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
              <h4 className="font-medium">Sarah Johnson</h4>
              <p className="text-muted-foreground text-sm">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
              <h4 className="font-medium">Michael Chen</h4>
              <p className="text-muted-foreground text-sm">Chief Operating Officer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-muted-foreground" />
              </div>
              <h4 className="font-medium">Emily Rodriguez</h4>
              <p className="text-muted-foreground text-sm">Head of Merchandising</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
