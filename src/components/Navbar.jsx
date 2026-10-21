import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const links = [
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-5 md:px-10 py-4">
      <div className="flex items-center justify-between">
        {/* Academy Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl md:text-2xl font-bold text-blue-600"
        >
          English Academy
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.href === "#contact"
                  ? "bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full transition"
                  : "hover:text-blue-600 transition"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-blue-600"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 pb-2 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={
                link.href === "#contact"
                  ? "bg-yellow-400 px-5 py-3 rounded-full text-center"
                  : "py-1 hover:text-blue-600"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
