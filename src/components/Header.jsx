import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-user-md me-2"></i>
          Eren Olut
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hakkimizda" onClick={() => setIsMenuOpen(false)}>
                Hakkımda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/etkinlikler" onClick={() => setIsMenuOpen(false)}>
                Etkinlikler
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/duyurular" onClick={() => setIsMenuOpen(false)}>
                Duyurular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/iletisim" onClick={() => setIsMenuOpen(false)}>
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
