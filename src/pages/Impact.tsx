import { Helmet } from "react-helmet-async";
import AdaptationSection from "@/components/AdaptationSection";
import NavigationTabs from "@/components/NavigationTabs";

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact - Jani Intelligence Climate Solutions</title>
        <meta name="description" content="Learn about Jani Intelligence's climate adaptation and resilience initiatives across Africa, including our AI-powered solutions for building community resilience." />
        <meta name="keywords" content="climate impact, adaptation strategies, resilience building, Africa climate solutions, AI climate adaptation" />
        <meta property="og:title" content="Our Impact - Jani Intelligence Climate Solutions" />
        <meta property="og:description" content="Discover how Jani Intelligence is building climate resilience across African communities through AI-powered adaptation strategies." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Impact - Jani Intelligence Climate Solutions" />
        <meta name="twitter:description" content="AI-driven climate adaptation and resilience solutions for African communities." />
        <link rel="canonical" href="/impact" />
      </Helmet>
      
      <NavigationTabs />
      
      <main>
        <AdaptationSection />
      </main>
    </>
  );
};

export default Impact;