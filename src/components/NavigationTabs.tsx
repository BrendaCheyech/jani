import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavigationTabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: "/", label: "Home" },
    { path: "/demo", label: "Solutions" },
    { path: "/impact", label: "Impact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
          Jani<span className="text-foreground">Intelligence</span>
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;
