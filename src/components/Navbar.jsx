import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-black/25 backdrop-blur-2xl border-b border-white/10 shadow-xl">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={logo}
              alt="Sudhamayi Constructions"
              className="h-14 md:h-18 w-auto"
            />

            <div>
              <h2 className="text-white font-semibold tracking-[4px] md:tracking-[6px] text-sm md:text-xl">
                SUDHAMAYI
              </h2>

              <p className="text-amber-400 tracking-[5px] md:tracking-[8px] text-[10px] md:text-sm mt-1">
                CONSTRUCTIONS
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="
                    inline-block
                    cursor-pointer
                    text-white
                    text-lg
                    transition-all
                    duration-300
                    ease-out
                    group-hover:text-amber-400
                    group-hover:scale-105
                  "
                >
                  {item.name}
                </a>

                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-2
                    h-[2px]
                    w-0
                    bg-amber-400
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-400 relative -top-3 ml-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${menuOpen ? "max-h-96 py-4" : "max-h-0"}
          `}
        >
          <ul className="flex flex-col items-center gap-6 pb-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-white
                    text-lg
                    transition-colors
                    duration-300
                    hover:text-amber-400
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;