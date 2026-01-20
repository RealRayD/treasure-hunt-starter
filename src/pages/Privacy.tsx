import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privātuma Politika</h1>
        <p className="text-muted-foreground mb-8">Pēdējoreiz atjaunināts: 2024. gada 1. janvāris</p>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Informācija, ko Mēs Apkopojam</h2>
            <p className="text-muted-foreground mb-4">
              Mēs apkopojam informāciju, ko jūs mums tieši sniedzat, piemēram, veidojot kontu, veicot pirkumu vai sazinoties ar klientu apkalpošanas dienestu.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Jūsu Tiesības</h2>
            <p className="text-muted-foreground mb-4">Jums ir tiesības:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Piekļūt mūsu rīcībā esošajai personiskajai informācijai</li>
              <li>Pieprasīt neprecīzas informācijas labošanu</li>
              <li>Pieprasīt jūsu personiskās informācijas dzēšanu</li>
              <li>Atteikties no mārketinga saziņas</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Sazinieties ar Mums</h2>
            <p className="text-muted-foreground">
              Ja jums ir jautājumi par šo Privātuma Politiku, sazinieties ar mums:
            </p>
            <p className="text-muted-foreground mt-2">
              E-pasts: info@dresscod.lv<br />
              Adrese: Brīvības iela 123, Rīga, LV-1001
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;