import React, { useState, useEffect } from 'react';
import logo from './logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeLink, setActiveLink] = useState('#service');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(currentScrollPos > 100 && currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveLink(`#${sectionId}`);
    }
  };

  return (
    <nav
      className={`navbar flex items-center justify-between py-4 md:py-4 container mx-auto max-w-[100%] ${
        isSticky ? 'sticky top-0 z-10' : 'absolute'
      } ${isSticky ? 'opacity-1' : 'opacity-100'}`}
    >
      <div className="flex items-center mr-4">
        <img src={logo} className="navbar-logo w-[197px] mr-2" alt="logo" />
      </div>
      <button className="navbar-toggle md:hidden focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <ul className={`navbar-menu md:flex md:items-center ${isMenuOpen ? '' : 'hidden'}`}>
        <li className="navbar-item mx-8">
          <a
            className={`nav-link ${activeLink === '#service' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('service')}
          >
            Services
          </a>
        </li>
        <li className="navbar-item mx-8">
          <a
            className={`nav-link ${activeLink === '#work' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('work')}
          >
            Work
          </a>
        </li>
        <li className="navbar-item mx-8">
          <a
            className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('project')}
          >
            About
          </a>
        </li>
        <li className="navbar-item mx-8">
          <a
            className={`nav-link ${activeLink === '#blog' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('blog')}
          >
            Blog
          </a>
        </li>
        <li className="navbar-item mx-8">
          <a
            className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleNavLinkClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
