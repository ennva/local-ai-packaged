import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="404-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#404-pattern)"/>
        </svg>
      </div>

      <div className="text-center relative z-10 px-4">
        <div className="mb-8 flex justify-center">
          <div className="[&_span]:!text-white">
            <Logo size="lg" withText variant="fluid" />
          </div>
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
          <AlertCircle size={20} className="text-accent" />
          <span className="text-accent font-roboto font-semibold">Page Not Found</span>
        </div>

        <h1 className="text-9xl font-bold text-white mb-4 drop-shadow-lg">404</h1>
        <p className="text-2xl text-white/90 font-roboto mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-roboto font-semibold rounded-lg hover:bg-accent-light transition-all transform hover:scale-105 hover:shadow-xl"
        >
          <Home size={20} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
