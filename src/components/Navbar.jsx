import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "home", href: "#hero" },
  { name: "about us", href: "#about" },
  { name: "team", href: "#team" },
  { name: "roles", href: "#roles" },
  { name: "contacts", href: "#contacts" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 px-7 md:px-16",
        isScrolled
          ? "py-2 bg-white/95 backdrop-blur-md shadow-sm"
          : "py-3 bg-white border-b border-blue-pale"
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-brand-blue flex items-center"
        >
          <span className="relative z-10">
            <span>Unleash Logo</span>
          </span>
        </a>
        {/* <a href="#hero" className="flex items-center">
          <img 
            src="/path-to-your-logo.png" 
            alt="Unleash Portfolio Logo" 
            className="h-10 w-auto" 
          />
        </a> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                inline-flex items-center
                text-black
                font-semibold
                px-3 py-1.5
                rounded-full
                bg-transparent
                transition-colors duration-200
                hover:bg-primary
                hover:text-white
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-black z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  inline-flex items-center
                  text-black
                  font-semibold
                  px-3 py-1.5
                  rounded-full
                  bg-transparent
                  transition-colors duration-200
                  hover:bg-primary
                  hover:text-white
                "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};