import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";

const ContactPage = () => (
  <>
    <Header />
    <main className="pt-20">
      <ContactSection />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default ContactPage;
