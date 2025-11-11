import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1090px] px-4 sm:px-6 lg:px-0">
      <div className="flex items-center justify-between bg-white rounded-lg px-6 py-4 shadow-sm mt-4 sm:mt-0 sm:rounded-none sm:shadow-none">
        <Link to="/" className="text-base font-questrial flex-shrink-0">
          <span className="text-black">mark</span>
          <span className="text-brand-blue">claveria</span>
        </Link>
        
        <nav className="flex items-center gap-6 sm:gap-8 lg:gap-12">
          <Link 
            to="/" 
            className="text-brand-text text-sm sm:text-base font-circular font-[450] hover:text-brand-blue transition-colors"
          >
            ABOUT
          </Link>
          <Link 
            to="/education" 
            className="text-brand-text text-sm sm:text-base font-circular font-[450] hover:text-brand-blue transition-colors"
          >
            EDUCATION
          </Link>
          <Link 
            to="/attachments" 
            className="text-brand-text text-sm sm:text-base font-circular font-[450] hover:text-brand-blue transition-colors"
          >
            ATTACHMENTS
          </Link>
        </nav>
      </div>
    </header>
  );
}
