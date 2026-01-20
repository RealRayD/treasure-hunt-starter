import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          q: "How long will my order take to arrive?",
          a: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and next-day delivery are also available. You'll receive a tracking number once your order ships."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account and viewing your order history."
        },
        {
          q: "Can I change or cancel my order?",
          a: "Orders can be modified or cancelled within 1 hour of placing them. After that, orders enter processing and cannot be changed. Contact customer service immediately if you need assistance."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to over 100 countries worldwide. International shipping rates and delivery times vary by destination and are calculated at checkout."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy for most items. Items must be unworn, unwashed, and have original tags attached. Some items like swimwear and final sale items are non-returnable."
        },
        {
          q: "How do I return an item?",
          a: "Log into your account, go to your orders, and select 'Return Item'. Print the prepaid label, pack your items securely, and drop off at any authorized shipping location."
        },
        {
          q: "How long does it take to process a refund?",
          a: "Refunds are processed within 5-7 business days after we receive your return. It may take an additional 3-5 business days for the refund to appear on your statement."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          q: "How do I find my size?",
          a: "Check our Size Guide page for detailed measurements and fit tips. Each product page also includes specific sizing information and customer reviews about fit."
        },
        {
          q: "Are your products authentic?",
          a: "Yes! TreasureHunt only sells 100% authentic, brand-name merchandise. We source directly from brands and authorized distributors."
        },
        {
          q: "Why are your prices so low?",
          a: "We specialize in overstock, end-of-season, and closeout merchandise from top brands. This allows us to offer authentic products at significantly reduced prices."
        }
      ]
    },
    {
      category: "Account & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and TreasureHunt gift cards."
        },
        {
          q: "Is my payment information secure?",
          a: "Absolutely. We use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card details."
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page and enter your email address. You'll receive a link to reset your password within a few minutes."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${section.category}-${index}`}>
                    <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">Our customer service team is here to help!</p>
          <a href="/contact" className="text-sale font-medium hover:underline">Contact Us</a>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
