import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EcoTech Solutions - Leading Climate Technology Innovation</title>
        <meta name="description" content="Revolutionary climate technology solutions for a sustainable future. Discover our innovative renewable energy systems, carbon reduction technologies, and environmental impact solutions." />
        <meta name="keywords" content="climate technology, renewable energy, carbon reduction, sustainability, clean energy, environmental solutions" />
        <meta property="og:title" content="EcoTech Solutions - Leading Climate Technology Innovation" />
        <meta property="og:description" content="Revolutionary climate technology solutions for a sustainable future. Discover our innovative renewable energy systems and environmental impact solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EcoTech Solutions - Leading Climate Technology Innovation" />
        <meta name="twitter:description" content="Revolutionary climate technology solutions for a sustainable future." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </>
  );
};

export default Index;
