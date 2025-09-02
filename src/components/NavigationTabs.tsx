import { useLocation, Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavigationTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <Tabs value={currentPath} className="w-fit">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="/" asChild>
              <Link to="/" className="px-6 py-2">
                Home
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/demo" asChild>
              <Link to="/demo" className="px-6 py-2">
                Demo
              </Link>
            </TabsTrigger>
            <TabsTrigger value="/impact" asChild>
              <Link to="/impact" className="px-6 py-2">
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