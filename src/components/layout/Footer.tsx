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
            <h3 className="text-2xl font-bold mb-2">Saņemiet Ekskluzīvus Piedāvājumus</h3>
            <p className="text-background/70 mb-4">
              Piesakieties jaunumiem un saņemiet 10% atlaidi pirmajam pasūtījumam
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Ievadiet savu e-pastu"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="sale">Abonēt</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-lg">Veikals</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/shop/women" className="hover:text-background">Sievietēm</Link></li>
              <li><Link to="/shop/men" className="hover:text-background">Vīriešiem</Link></li>
              <li><Link to="/shop/kids" className="hover:text-background">Bērniem</Link></li>
              <li><Link to="/shop/home" className="hover:text-background">Mājai</Link></li>
              <li><Link to="/shop/clearance" className="hover:text-background text-sale">Izpārdošana</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Klientu Serviss</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/contact" className="hover:text-background">Sazināties ar Mums</Link></li>
              <li><Link to="/shipping" className="hover:text-background">Piegādes Informācija</Link></li>
              <li><Link to="/returns" className="hover:text-background">Atgriešana un Apmaiņa</Link></li>
              <li><Link to="/faq" className="hover:text-background">BUJ</Link></li>
              <li><Link to="/size-guide" className="hover:text-background">Izmēru Tabula</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Par Mums</h4>
            <ul className="space-y-2 text-background/70">
              <li><Link to="/about" className="hover:text-background">Mūsu Stāsts</Link></li>
              <li><Link to="/careers" className="hover:text-background">Karjera</Link></li>
              <li><Link to="/sustainability" className="hover:text-background">Ilgtspējība</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Sekojiet Mums</h4>
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
              info@dresscod.lv
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>© 2024 DressCod. Visas tiesības aizsargātas.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-background">Privātuma Politika</Link>
            <Link to="/terms" className="hover:text-background">Lietošanas Noteikumi</Link>
            <Link to="/accessibility" className="hover:text-background">Pieejamība</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;