import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have a question or need assistance? Our customer service team is here to help. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Order Number (if applicable)" />
              <Textarea placeholder="How can we help you?" rows={5} />
              <Button variant="sale" className="w-full">Send Message</Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">1-800-TREASURE (1-800-873-2787)</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 8am-8pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">help@treasurehunt.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-muted-foreground">
                      123 Fashion Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Customer Service Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 8am - 8pm EST</p>
                    <p className="text-muted-foreground">Saturday: 9am - 6pm EST</p>
                    <p className="text-muted-foreground">Sunday: 10am - 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
