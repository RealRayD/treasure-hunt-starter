import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Sazināties ar Mums</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Sazinieties ar Mums</h2>
            <p className="text-muted-foreground mb-8">
              Jums ir jautājumi vai nepieciešama palīdzība? Mūsu klientu apkalpošanas komanda ir gatava palīdzēt. Aizpildiet formu un mēs atbildēsim 24 stundu laikā.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Vārds" />
                <Input placeholder="Uzvārds" />
              </div>
              <Input type="email" placeholder="E-pasta Adrese" />
              <Input placeholder="Pasūtījuma Numurs (ja attiecas)" />
              <Textarea placeholder="Kā mēs varam jums palīdzēt?" rows={5} />
              <Button variant="sale" className="w-full">Nosūtīt Ziņojumu</Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Kontaktinformācija</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Tālrunis</p>
                    <p className="text-muted-foreground">+371 20 123 456</p>
                    <p className="text-sm text-muted-foreground">P-Pk: 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">E-pasts</p>
                    <p className="text-muted-foreground">info@dresscod.lv</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Adrese</p>
                    <p className="text-muted-foreground">Brīvības iela 123<br />Rīga, LV-1001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 mt-1 text-sale" />
                  <div>
                    <p className="font-medium">Darba Laiks</p>
                    <p className="text-muted-foreground">Pirmdiena - Piektdiena: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Sestdiena: 10:00 - 16:00</p>
                    <p className="text-muted-foreground">Svētdiena: Slēgts</p>
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