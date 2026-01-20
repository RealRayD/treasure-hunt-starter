import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Size Guide</h1>
        
        <p className="text-muted-foreground mb-8">
          Find your perfect fit with our comprehensive size guides. All measurements are in inches 
          unless otherwise noted. When in doubt, size up for a more comfortable fit.
        </p>
        
        <Tabs defaultValue="women" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="women">Women</TabsTrigger>
            <TabsTrigger value="men">Men</TabsTrigger>
            <TabsTrigger value="kids">Kids</TabsTrigger>
            <TabsTrigger value="shoes">Shoes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="women">
            <h2 className="text-xl font-semibold mb-4">Women's Clothing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Size</th>
                    <th className="border p-3 text-left">Bust</th>
                    <th className="border p-3 text-left">Waist</th>
                    <th className="border p-3 text-left">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-3">XS (0-2)</td><td className="border p-3">32-33"</td><td className="border p-3">24-25"</td><td className="border p-3">34-35"</td></tr>
                  <tr><td className="border p-3">S (4-6)</td><td className="border p-3">34-35"</td><td className="border p-3">26-27"</td><td className="border p-3">36-37"</td></tr>
                  <tr><td className="border p-3">M (8-10)</td><td className="border p-3">36-37"</td><td className="border p-3">28-29"</td><td className="border p-3">38-39"</td></tr>
                  <tr><td className="border p-3">L (12-14)</td><td className="border p-3">38-40"</td><td className="border p-3">30-32"</td><td className="border p-3">40-42"</td></tr>
                  <tr><td className="border p-3">XL (16-18)</td><td className="border p-3">41-43"</td><td className="border p-3">33-35"</td><td className="border p-3">43-45"</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="men">
            <h2 className="text-xl font-semibold mb-4">Men's Clothing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Size</th>
                    <th className="border p-3 text-left">Chest</th>
                    <th className="border p-3 text-left">Waist</th>
                    <th className="border p-3 text-left">Neck</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-3">S</td><td className="border p-3">34-36"</td><td className="border p-3">28-30"</td><td className="border p-3">14-14.5"</td></tr>
                  <tr><td className="border p-3">M</td><td className="border p-3">38-40"</td><td className="border p-3">32-34"</td><td className="border p-3">15-15.5"</td></tr>
                  <tr><td className="border p-3">L</td><td className="border p-3">42-44"</td><td className="border p-3">36-38"</td><td className="border p-3">16-16.5"</td></tr>
                  <tr><td className="border p-3">XL</td><td className="border p-3">46-48"</td><td className="border p-3">40-42"</td><td className="border p-3">17-17.5"</td></tr>
                  <tr><td className="border p-3">XXL</td><td className="border p-3">50-52"</td><td className="border p-3">44-46"</td><td className="border p-3">18-18.5"</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="kids">
            <h2 className="text-xl font-semibold mb-4">Kids' Clothing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Size</th>
                    <th className="border p-3 text-left">Age</th>
                    <th className="border p-3 text-left">Height</th>
                    <th className="border p-3 text-left">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-3">2T</td><td className="border p-3">2 years</td><td className="border p-3">33-35"</td><td className="border p-3">26-29 lbs</td></tr>
                  <tr><td className="border p-3">3T</td><td className="border p-3">3 years</td><td className="border p-3">36-38"</td><td className="border p-3">30-33 lbs</td></tr>
                  <tr><td className="border p-3">4T</td><td className="border p-3">4 years</td><td className="border p-3">39-41"</td><td className="border p-3">34-37 lbs</td></tr>
                  <tr><td className="border p-3">5</td><td className="border p-3">5 years</td><td className="border p-3">42-44"</td><td className="border p-3">38-42 lbs</td></tr>
                  <tr><td className="border p-3">6</td><td className="border p-3">6 years</td><td className="border p-3">45-47"</td><td className="border p-3">43-48 lbs</td></tr>
                  <tr><td className="border p-3">7</td><td className="border p-3">7 years</td><td className="border p-3">48-50"</td><td className="border p-3">49-56 lbs</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="shoes">
            <h2 className="text-xl font-semibold mb-4">Shoe Size Conversion</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">US Women</th>
                    <th className="border p-3 text-left">US Men</th>
                    <th className="border p-3 text-left">UK</th>
                    <th className="border p-3 text-left">EU</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border p-3">5</td><td className="border p-3">3.5</td><td className="border p-3">2.5</td><td className="border p-3">35</td></tr>
                  <tr><td className="border p-3">6</td><td className="border p-3">4.5</td><td className="border p-3">3.5</td><td className="border p-3">36</td></tr>
                  <tr><td className="border p-3">7</td><td className="border p-3">5.5</td><td className="border p-3">4.5</td><td className="border p-3">37</td></tr>
                  <tr><td className="border p-3">8</td><td className="border p-3">6.5</td><td className="border p-3">5.5</td><td className="border p-3">38</td></tr>
                  <tr><td className="border p-3">9</td><td className="border p-3">7.5</td><td className="border p-3">6.5</td><td className="border p-3">39</td></tr>
                  <tr><td className="border p-3">10</td><td className="border p-3">8.5</td><td className="border p-3">7.5</td><td className="border p-3">40</td></tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold mb-2">How to Measure</h3>
          <ul className="text-muted-foreground space-y-2">
            <li><strong>Bust/Chest:</strong> Measure around the fullest part of your chest, keeping the tape level.</li>
            <li><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</li>
            <li><strong>Hips:</strong> Measure around the fullest part of your hips, about 8" below your waist.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default SizeGuide;
