import { useLocation, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavigationTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Jani<span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">Intelligence</span>
        </Link>
        
        {/* Navigation */}
        <Tabs value={currentPath} className="w-fit">
          <TabsList className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-full p-1">
            <TabsTrigger value="/" asChild className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Link to="/">
                Home
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/demo" asChild className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Link to="/demo">
                Platform
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/impact" asChild className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Link to="/impact">
                Impact
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default NavigationTabs;