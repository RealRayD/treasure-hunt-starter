import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, sign up for our newsletter, or contact customer service.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment provider)</li>
              <li>Purchase history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and shipping updates</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Personalize your shopping experience</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with service 
              providers who assist us in operating our website, conducting our business, or servicing 
              you (such as shipping carriers and payment processors), so long as those parties agree 
              to keep this information confidential.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. All 
              payment transactions are encrypted using SSL technology.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to analyze trends, administer the website, 
              track users' movements around the website, and gather demographic information about our 
              user base as a whole. You can control the use of cookies through your browser settings.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: privacy@treasurehunt.com<br />
              Address: 123 Fashion Avenue, New York, NY 10001
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
