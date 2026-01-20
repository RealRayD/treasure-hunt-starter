import Layout from "@/components/layout/Layout";
import { RotateCcw, Package, CheckCircle, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Returns & Exchanges</h1>
        
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <RotateCcw className="h-6 w-6 text-sale" />
            <h2 className="text-xl font-semibold">30-Day Return Policy</h2>
          </div>
          <p className="text-muted-foreground">
            We want you to love your purchase! If you're not completely satisfied, you can return 
            most items within 30 days of delivery for a full refund.
          </p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">How to Return</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-sale text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-medium">Start Your Return</p>
                  <p className="text-muted-foreground">Log into your account and select the item(s) you wish to return, or contact our customer service team.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-sale text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-medium">Print Your Label</p>
                  <p className="text-muted-foreground">Download and print the prepaid return shipping label. A $6.95 return shipping fee will be deducted from your refund.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-sale text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-medium">Ship It Back</p>
                  <p className="text-muted-foreground">Pack items securely in their original packaging and drop off at any authorized shipping location.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-sale text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <p className="font-medium">Get Your Refund</p>
                  <p className="text-muted-foreground">Refunds are processed within 5-7 business days after we receive your return.</p>
                </div>
              </li>
            </ol>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Returnable Items
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Unworn, unwashed items with original tags attached</li>
              <li>Items in original packaging</li>
              <li>Shoes in original shoe box</li>
              <li>Defective or damaged items (contact us immediately)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-sale" />
              Non-Returnable Items
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Swimwear and intimates (for hygiene reasons)</li>
              <li>Pierced jewelry</li>
              <li>Items marked as "Final Sale"</li>
              <li>Gift cards</li>
              <li>Items without tags or showing signs of wear</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
            <p className="text-muted-foreground">
              For exchanges, we recommend returning your item for a refund and placing a new order 
              for the desired size or color. This ensures you get your new item as quickly as possible 
              before it sells out.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Returns;
