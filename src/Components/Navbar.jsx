import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <div className="site-nav-bar">
          <a
            href="#home"
            className="site-brand"
            onClick={handleClose}
          >
            <span className="site-brand-name">Shalin Christian</span>
          </a>

          <nav className="site-nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="site-menu-toggle"
            onClick={handleToggle}
          >
            <span className={isOpen ? "is-open" : ""} />
            <span className={isOpen ? "is-open" : ""} />
            <span className={isOpen ? "is-open" : ""} />
          </button>
        </div>

        {isOpen && (
          <nav id="mobile-navigation" className="site-mobile-menu" aria-label="Mobile navigation">
            <div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                >
                  <span>{item.label}</span><span>↗</span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
