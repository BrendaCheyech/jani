import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdaptationSection from "@/components/AdaptationSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jani Intelligence - AI-Powered Soil Carbon & Regenerative Agriculture for Africa</title>
        <meta name="description" content="Jani Intelligence leverages AI to measure, monitor, and monetize soil carbon through regenerative agriculture across Africa. Our platform helps farmers build carbon-rich soils while accessing global carbon markets." />
        <meta name="keywords" content="soil carbon AI Africa, regenerative agriculture platform, soil carbon monitoring, carbon farming Africa, regenerative farming practices, soil health technology" />
        <meta property="og:title" content="Jani Intelligence - AI-Powered Soil Carbon & Regenerative Agriculture for Africa" />
        <meta property="og:description" content="AI-driven soil carbon intelligence and regenerative agriculture solutions for African farmers. Build carbon-rich soils and access global carbon markets." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jani Intelligence - AI-Powered Soil Carbon & Regenerative Agriculture for Africa" />
        <meta name="twitter:description" content="AI-driven soil carbon monitoring and regenerative agriculture platform for African farmers." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <AdaptationSection />
      </main>
    </>
  );
};

export default Index;
