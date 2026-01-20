import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Mūsu Stāsts</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            DressCod dibināts 2020. gadā ar mērķi padarīt dizaineru modi pieejamu ikvienam. Mēs ticam, ka lieliskam stilam nav jāmaksā liela cena.
          </p>
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Mūsu Skaitļi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">500+</p>
              <p className="text-muted-foreground">Zīmoli</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">50K+</p>
              <p className="text-muted-foreground">Apmierināti Klienti</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">10+</p>
              <p className="text-muted-foreground">Veikali</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-3xl font-bold text-sale">4</p>
              <p className="text-muted-foreground">Gadi Biznesā</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;