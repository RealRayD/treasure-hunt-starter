import Layout from "@/components/layout/Layout";
import { Eye, Ear, Hand, Monitor } from "lucide-react";

const Accessibility = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            TreasureHunt is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards.
          </p>
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <Eye className="h-8 w-8 text-sale mb-4" />
              <h3 className="font-semibold mb-2">Visual Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                We use high contrast colors, scalable fonts, and provide alt text for all images 
                to assist users with visual impairments.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Ear className="h-8 w-8 text-sale mb-4" />
              <h3 className="font-semibold mb-2">Auditory Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                All video content includes captions, and audio content has transcripts available 
                for users who are deaf or hard of hearing.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Hand className="h-8 w-8 text-sale mb-4" />
              <h3 className="font-semibold mb-2">Motor Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                Our website is fully navigable using keyboard controls and is compatible with 
                assistive technologies like switch controls.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <Monitor className="h-8 w-8 text-sale mb-4" />
              <h3 className="font-semibold mb-2">Cognitive Accessibility</h3>
              <p className="text-muted-foreground text-sm">
                We use clear, simple language and consistent navigation to help users with 
                cognitive disabilities navigate our site easily.
              </p>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-xl font-semibold mb-4">Conformance Status</h2>
          <p className="text-muted-foreground mb-4">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. 
            These guidelines explain how to make web content more accessible for people with disabilities.
          </p>
          <p className="text-muted-foreground">
            Conformance with these guidelines helps make the web more user-friendly for everyone.
          </p>
        </section>
        
        <section className="my-12">
          <h2 className="text-xl font-semibold mb-4">Accessibility Features</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Skip navigation links to bypass repetitive content</li>
            <li>Consistent navigation and labeling across pages</li>
            <li>Form labels and error messages that are clearly associated with inputs</li>
            <li>Sufficient color contrast throughout the site</li>
            <li>Text that can be resized up to 200% without loss of functionality</li>
            <li>No content that flashes more than three times per second</li>
          </ul>
        </section>
        
        <section className="my-12">
          <h2 className="text-xl font-semibold mb-4">Browser and Assistive Technology Compatibility</h2>
          <p className="text-muted-foreground mb-4">
            Our website is designed to be compatible with the following:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Recent versions of Chrome, Firefox, Safari, and Edge</li>
            <li>Screen readers including JAWS, NVDA, and VoiceOver</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
          </ul>
        </section>
        
        <section className="my-12 p-6 bg-muted/50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Feedback and Contact</h2>
          <p className="text-muted-foreground mb-4">
            We welcome your feedback on the accessibility of our website. If you encounter any 
            barriers or have suggestions for improvement, please contact us:
          </p>
          <p className="text-muted-foreground">
            Email: accessibility@treasurehunt.com<br />
            Phone: 1-800-TREASURE (1-800-873-2787)<br />
            We aim to respond to accessibility feedback within 2 business days.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Accessibility;
