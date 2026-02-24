import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ScoreSection from "@/components/ScoreSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import NavigationTabs from "@/components/NavigationTabs";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jani Intelligence - Climate AI for Startups & NGOs</title>
        <meta name="description" content="Jani Intelligence builds Climate AI solutions for startups and NGOs working on climate change projects. From MRV to carbon markets, we turn climate data into actionable intelligence." />
        <meta name="keywords" content="climate AI, climate tech startups, NGO climate tools, MRV solutions, carbon markets, climate finance, impact reporting, climate intelligence" />
        <meta property="og:title" content="Jani Intelligence - Climate AI for Startups & NGOs" />
        <meta property="og:description" content="AI-powered climate intelligence for startups and NGOs — MRV, carbon markets, impact reporting, and climate finance tools." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jani Intelligence - Climate AI for Startups & NGOs" />
        <meta name="twitter:description" content="AI-powered climate intelligence for startups and NGOs driving climate action." />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <NavigationTabs />
      
      <main>
        <HeroSection />
        <ScoreSection />
        <TrustSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Index;
