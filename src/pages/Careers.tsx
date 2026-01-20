import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
  const jobs = [
    { title: "Store Associate", location: "Multiple Locations", type: "Full-time & Part-time", department: "Retail" },
    { title: "Visual Merchandiser", location: "New York, NY", type: "Full-time", department: "Retail" },
    { title: "E-commerce Manager", location: "Remote", type: "Full-time", department: "Digital" },
    { title: "Buyer - Women's Apparel", location: "New York, NY", type: "Full-time", department: "Merchandising" },
    { title: "Software Engineer", location: "Remote", type: "Full-time", department: "Technology" },
    { title: "Customer Service Representative", location: "Remote", type: "Full-time", department: "Operations" },
  ];

  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Careers at TreasureHunt</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Join our team and help bring the joy of great finds to shoppers everywhere.
        </p>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Great Benefits</h3>
              <p className="text-muted-foreground text-sm">
                Health insurance, 401(k) matching, generous employee discounts, and paid time off.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-muted-foreground text-sm">
                We promote from within and invest in our team members' professional development.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Inclusive Culture</h3>
              <p className="text-muted-foreground text-sm">
                We celebrate diversity and create an environment where everyone can thrive.
              </p>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="border rounded-lg p-6 hover:border-sale transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Don't see the right fit?</h3>
          <p className="text-muted-foreground mb-4">
            We're always looking for talented people. Send us your resume!
          </p>
          <Button variant="sale">Submit General Application</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
