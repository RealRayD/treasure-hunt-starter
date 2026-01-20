import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Lietošanas Noteikumi</h1>
        <p className="text-muted-foreground mb-8">Pēdējoreiz atjaunināts: 2024. gada 1. janvāris</p>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Noteikumu Pieņemšana</h2>
            <p className="text-muted-foreground">
              Piekļūstot un lietojot DressCod vietni un pakalpojumus, jūs piekrītat ievērot šos Lietošanas Noteikumus. Ja jūs nepiekrītat šiem noteikumiem, lūdzu, nelietojiet mūsu pakalpojumus.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Pakalpojumu Lietošana</h2>
            <p className="text-muted-foreground mb-4">Jūs piekrītat izmantot mūsu pakalpojumus tikai likumīgiem mērķiem un saskaņā ar šiem Noteikumiem.</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. Kontaktinformācija</h2>
            <p className="text-muted-foreground">
              Ja jums ir jautājumi par šiem Lietošanas Noteikumiem, lūdzu, sazinieties ar mums:
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

export default Terms;