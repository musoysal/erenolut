import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>
              <i className="fas fa-user-md me-2"></i>
              Eren Olut
            </h5>
            <p className="mb-3">
              Odyoloji alanında uzman, Odyoloji Kulübü başkanı ve kurucusu. 
              İşitme sağlığı konusunda toplumsal farkındalık yaratmak için çalışıyorum.
            </p>
            <div className="social-links">
              <a href="#" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li className="mb-2">
                <Link to="/hakkimizda">Hakkımda</Link>
              </li>
              <li className="mb-2">
                <Link to="/etkinlikler">Etkinlikler</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>İletişim</h5>
            <div className="contact-info">
              <p className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@odyolojikulubu.com
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +90 (212) 555 0123
              </p>
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                İstanbul, Türkiye
              </p>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Bülten</h5>
            <p className="mb-3">
              Güncel etkinlikler ve duyurular için bültenimize abone olun.
            </p>
            <div className="newsletter">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="E-posta adresiniz"
                />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; 2024 Eren Olut. Tüm hakları saklıdır.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              <Link to="/" className="me-3">Gizlilik Politikası</Link>
              <Link to="/">Kullanım Şartları</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
