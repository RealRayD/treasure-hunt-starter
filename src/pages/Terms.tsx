import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the TreasureHunt website and services, you accept and agree to be 
              bound by these Terms of Service. If you do not agree to these terms, please do not use 
              our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Use of Service</h2>
            <p className="text-muted-foreground mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use our services in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of our services</li>
              <li>Use any automated systems or software to extract data from our website</li>
              <li>Interfere with or disrupt the integrity of our services</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
            <p className="text-muted-foreground">
              To make purchases, you may need to create an account. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities that occur under 
              your account. You agree to notify us immediately of any unauthorized use.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Products and Pricing</h2>
            <p className="text-muted-foreground">
              All products are subject to availability. We reserve the right to discontinue any product 
              at any time. Prices are subject to change without notice. We make every effort to ensure 
              accurate pricing, but errors may occur. If we discover a pricing error, we will notify 
              you and give you the option to proceed at the correct price or cancel your order.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Orders and Payment</h2>
            <p className="text-muted-foreground">
              By placing an order, you are making an offer to purchase. We reserve the right to accept 
              or decline your order for any reason. Payment must be received before your order is 
              processed. We accept major credit cards, PayPal, and other payment methods as displayed 
              at checkout.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Shipping and Delivery</h2>
            <p className="text-muted-foreground">
              Shipping times are estimates and not guaranteed. We are not responsible for delays caused 
              by shipping carriers, customs, or other factors beyond our control. Risk of loss passes 
              to you upon delivery of the item to the carrier.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Returns and Refunds</h2>
            <p className="text-muted-foreground">
              Our return policy is described in detail on our Returns & Exchanges page. By making a 
              purchase, you agree to the terms of our return policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on our website, including text, graphics, logos, images, and software, is 
              the property of TreasureHunt or its content suppliers and is protected by copyright and 
              trademark laws. You may not reproduce, distribute, or create derivative works without 
              our express written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, TreasureHunt shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising out of or relating to your 
              use of our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to our website. Your continued use of our services after any 
              changes constitutes acceptance of the new terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: legal@treasurehunt.com<br />
              Address: 123 Fashion Avenue, New York, NY 10001
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
