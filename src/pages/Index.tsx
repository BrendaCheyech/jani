import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdaptationSection from "@/components/AdaptationSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jani Intelligence - AI-Powered Climate Solutions for Africa</title>
        <meta name="description" content="Jani Intelligence leverages data analytics and AI to tackle climate challenges in Africa. Our Climate AI platform focuses on agriculture and forestry carbon trading, starting with Kenya." />
        <meta name="keywords" content="climate AI, Africa climate solutions, agriculture AI, forestry carbon trading, Kenya climate tech, data analytics climate, artificial intelligence agriculture" />
        <meta property="og:title" content="Jani Intelligence - AI-Powered Climate Solutions for Africa" />
        <meta property="og:description" content="Leveraging data analytics and AI to tackle climate challenges in Africa through agriculture and forestry carbon trading solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jani Intelligence - AI-Powered Climate Solutions for Africa" />
        <meta name="twitter:description" content="AI-driven climate solutions for African agriculture and forestry sectors." />
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
