import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container py-10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Get Exclusive Deals</h3>
            <p className="text-background/70 mb-4">
              Sign up for our newsletter and receive 10% off your first order
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="sale">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-lg">Shop</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/shop/women" className="hover:text-background">Women</Link></li>
              <li><Link to="/shop/men" className="hover:text-background">Men</Link></li>
              <li><Link to="/shop/kids" className="hover:text-background">Kids</Link></li>
              <li><Link to="/shop/home" className="hover:text-background">Home</Link></li>
              <li><Link to="/shop/clearance" className="hover:text-background text-sale">Clearance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Customer Service</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/contact" className="hover:text-background">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-background">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-background">Returns & Exchanges</Link></li>
              <li><Link to="/faq" className="hover:text-background">FAQ</Link></li>
              <li><Link to="/size-guide" className="hover:text-background">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">About Us</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/about" className="hover:text-background">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-background">Careers</Link></li>
              <li><Link to="/sustainability" className="hover:text-background">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-background/70 hover:text-background">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/70 text-sm">
              <Mail className="h-4 w-4 inline mr-2" />
              help@treasurehunt.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 TreasureHunt. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-background">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-background">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-background">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
