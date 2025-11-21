import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { label: "ABOUT", path: "/" },
    { label: "EDUCATION", path: "/education" },
    { label: "ACHIEVEMENTS", path: "/achievements" },
    { label: "ATTACHMENTS", path: "/attachments" },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 w-full md:w-auto">
      <div className="flex h-14 w-full items-center justify-between gap-3 rounded-bl-2xl bg-white px-4 py-4 shadow-sm md:gap-6 md:px-6 md:pr-16 lg:w-[723px]">
        <Link to="/" className="font-zolo text-xl md:text-2xl">
          <span className="text-black">.mark</span>
          <span className="text-brand">claveria</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end gap-3 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "font-circular text-sm font-[450] transition-colors hover:text-brand md:text-base",
                location.pathname === item.path
                  ? "text-brand"
                  : "text-[#1D1D1D]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
