import Layout from "@/components/layout/Layout";
import { Truck, Clock, Globe, Package } from "lucide-react";

const Shipping = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="border rounded-lg p-6">
            <Truck className="h-8 w-8 text-sale mb-4" />
            <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
            <p className="text-muted-foreground mb-2">5-7 Business Days</p>
            <p className="font-medium">$5.99 or FREE on orders over $75</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <Clock className="h-8 w-8 text-sale mb-4" />
            <h3 className="font-semibold text-lg mb-2">Express Shipping</h3>
            <p className="text-muted-foreground mb-2">2-3 Business Days</p>
            <p className="font-medium">$12.99</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <Package className="h-8 w-8 text-sale mb-4" />
            <h3 className="font-semibold text-lg mb-2">Next Day Delivery</h3>
            <p className="text-muted-foreground mb-2">Order by 2pm EST</p>
            <p className="font-medium">$24.99</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <Globe className="h-8 w-8 text-sale mb-4" />
            <h3 className="font-semibold text-lg mb-2">International</h3>
            <p className="text-muted-foreground mb-2">7-14 Business Days</p>
            <p className="font-medium">Calculated at checkout</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Shipping Policy</h2>
            <div className="prose text-muted-foreground space-y-4">
              <p>
                Orders are processed within 1-2 business days. You will receive a confirmation 
                email with tracking information once your order has shipped.
              </p>
              <p>
                Free standard shipping is available on all orders over $75 within the continental 
                United States. Alaska, Hawaii, and international orders may have additional charges.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
            <p className="text-muted-foreground">
              Once your order ships, you'll receive an email with a tracking number. You can track 
              your package using the link provided or by visiting the carrier's website directly.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Signature may be required for orders over $200</li>
              <li>We ship to PO Boxes via USPS only</li>
              <li>APO/FPO addresses are supported</li>
              <li>Orders cannot be redirected once shipped</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;
