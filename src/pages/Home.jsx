import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Eren Olut",
      subtitle: "Odyoloji Uzmanı & Kulüp Başkanı",
      image: "https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg",
      buttonText: "Hakkımda Daha Fazla",
      buttonLink: "/hakkimizda"
    },
    {
      id: 2,
      title: "Odyoloji Kulübü",
      subtitle: "İşitme sağlığı konusunda toplumsal farkındalık yaratıyorum",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Etkinlikleri Gör",
      buttonLink: "/etkinlikler"
    },
    {
      id: 3,
      title: "Bilimsel Çalışmalar",
      subtitle: "Odyoloji alanındaki araştırmalarım ve yazılarım",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Blog Yazılarım",
      buttonLink: "/blog"
    }
  ];

  const features = [
    {
      icon: "fas fa-graduation-cap",
      title: "Eğitim Programları",
      description: "Odyoloji alanında seminerler ve workshop'lar düzenliyorum."
    },
    {
      icon: "fas fa-users",
      title: "Kulüp Yönetimi",
      description: "Odyoloji Kulübü'nü yönetiyor ve üyelerle bağlantı kuruyorum."
    },
    {
      icon: "fas fa-microscope",
      title: "Araştırma",
      description: "İşitme sağlığı konusunda bilimsel araştırmalar yürütüyorum."
    },
    {
      icon: "fas fa-heart",
      title: "Sosyal Sorumluluk",
      description: "Toplumsal farkındalık projeleri ile işitme engelli bireylere destek oluyorum."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "İşitme Cihazları Teknolojisi Semineri",
      date: "15 Mart 2024",
      time: "14:00",
      location: "Konferans Salonu A",
      speaker: "Eren Olut",
      description: "Son teknoloji işitme cihazları ve kullanım alanları hakkında kapsamlı seminer."
    },
    {
      id: 2,
      title: "Odyoloji Öğrenci Buluşması",
      date: "22 Mart 2024",
      time: "16:00",
      location: "Kulüp Merkezi",
      speaker: "Elif Demir",
      description: "Odyoloji öğrencilerinin deneyim paylaştığı informal buluşma."
    },
    {
      id: 3,
      title: "İşitme Testi Workshop'u",
      date: "29 Mart 2024",
      time: "10:00",
      location: "Laboratuvar B",
      speaker: "Prof. Dr. Mehmet Kaya",
      description: "Pratik işitme testi uygulamaları ve sonuç değerlendirme teknikleri."
    },
    {
      id: 4,
      title: "Vestibüler Sistem Eğitimi",
      date: "5 Nisan 2024",
      time: "13:00",
      location: "Eğitim Merkezi",
      speaker: "Dr. Can Özkan",
      description: "Vestibüler sistem anatomisi ve klinik uygulamaları."
    },
    {
      id: 5,
      title: "Koklear İmplant Teknolojisi",
      date: "12 Nisan 2024",
      time: "15:00",
      location: "Teknoloji Merkezi",
      speaker: "Dr. Zeynep Arslan",
      description: "Koklear implant teknolojisi ve rehabilitasyon süreçleri."
    },
    {
      id: 6,
      title: "Araştırma Metodolojisi",
      date: "19 Nisan 2024",
      time: "11:00",
      location: "Araştırma Merkezi",
      speaker: "Prof. Dr. Mehmet Kaya",
      description: "Bilimsel araştırma tasarımı ve veri analiz yöntemleri."
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Yeni Dönem Etkinlik Programı Açıklandı",
      date: "10 Mart 2024",
      excerpt: "2024 Bahar dönemi etkinlik programımız hazırlandı. 12 farklı etkinlik ile dolu bir program sizi bekliyor.",
      author: "Eren Olut",
      category: "Duyuru",
      views: 156
    },
    {
      id: 2,
      title: "Kulüp Üyeliği Başvuruları Başladı",
      date: "5 Mart 2024",
      excerpt: "Yeni üyelerimizi aramızda görmekten mutluluk duyarız. Başvuru süreci 31 Mayıs'a kadar devam edecek.",
      author: "Elif Demir",
      category: "Üyelik",
      views: 89
    },
    {
      id: 3,
      title: "İşitme Sağlığı Farkındalık Haftası",
      date: "1 Mart 2024",
      excerpt: "Mart ayı boyunca düzenlenecek özel etkinliklerimizi takip edin. Ücretsiz işitme testleri ve eğitimler.",
      author: "Eren Olut",
      category: "Sağlık",
      views: 234
    },
    {
      id: 4,
      title: "Uluslararası Konferansa Katılım",
      date: "28 Şubat 2024",
      excerpt: "Nisan ayında İstanbul'da düzenlenecek Uluslararası Odyoloji Konferansı'na katılacağız.",
      author: "Prof. Dr. Mehmet Kaya",
      category: "Konferans",
      views: 67
    },
    {
      id: 5,
      title: "Yeni Araştırma Laboratuvarı",
      date: "20 Şubat 2024",
      excerpt: "Modern ekipmanlarla donatılmış yeni araştırma laboratuvarımız hizmete girdi.",
      author: "Burak Şahin",
      category: "Tesis",
      views: 45
    },
    {
      id: 6,
      title: "Sosyal Sorumluluk Projesi",
      date: "15 Şubat 2024",
      excerpt: "İşitme engelli çocuklar için özel eğitim programları başlattık.",
      author: "Zeynep Arslan",
      category: "Proje",
      views: 178
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                <div className="hero-buttons">
                  <Link to={slides[currentSlide].buttonLink} className="btn btn-primary btn-lg me-3">
                    {slides[currentSlide].buttonText}
                  </Link>
                  <Link to="/iletisim" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-envelope me-2"></i>
                    İletişim
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="slider-controls">
            <button 
              className="btn me-2" 
              onClick={prevSlide}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="btn" 
              onClick={nextSlide}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {/* Slider Indicators */}
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Neler Yapıyorum?</h2>
          <p className="section-subtitle">
            Odyoloji alanında farkındalık yaratmak ve toplumsal katkı sağlamak için çalışıyorum
          </p>
          
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card text-center h-100">
                  <div className="card-body">
                    <div className="feature-icon mb-3">
                      <i className={feature.icon} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                    </div>
                    <h5 className="card-title">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Yaklaşan Etkinlikler</h2>
          <p className="section-subtitle">
            Düzenlediğim etkinlikleri kaçırmayın
          </p>
          
          <div className="row">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card event-preview-card h-100">
                  <div className="card-body">
                    <div className="event-meta mb-2">
                      <span className="badge bg-primary me-2">
                        Etkinlik
                      </span>
                      <small className="text-muted">
                        <i className="fas fa-calendar-alt me-1"></i>
                        {event.date}
                      </small>
                    </div>
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <div className="event-details">
                      <p className="mb-1">
                        <i className="fas fa-clock me-2 text-primary"></i>
                        {event.time}
                      </p>
                      <p className="mb-1">
                        <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                        {event.location}
                      </p>
                      <p className="mb-1">
                        <i className="fas fa-user me-2 text-primary"></i>
                        {event.speaker}
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link to="/etkinlikler" className="btn btn-outline-primary btn-sm">
                        Detayları Gör
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/etkinlikler" className="btn btn-primary">
              Tüm Etkinlikleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Son Haberler</h2>
          <p className="section-subtitle">
            Benimle ve kulüple ilgili güncel duyurular ve haberler
          </p>
          
          <div className="row">
            {latestNews.map((news) => (
              <div key={news.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card news-card h-100">
                  <div className="card-body">
                    <div className="news-meta mb-2">
                      <span className="badge bg-info me-2">
                        {news.category}
                      </span>
                      <small className="text-muted">
                        <i className="fas fa-calendar-alt me-1"></i>
                        {news.date}
                      </small>
                    </div>
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.excerpt}</p>
                    <div className="news-details">
                      <small className="text-muted">
                        <i className="fas fa-user me-1"></i>
                        {news.author}
                      </small>
                      <small className="text-muted ms-3">
                        <i className="fas fa-eye me-1"></i>
                        {news.views} görüntülenme
                      </small>
                    </div>
                    <div className="mt-3">
                      <Link to="/duyurular" className="btn btn-outline-primary btn-sm">
                        Devamını Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/duyurular" className="btn btn-primary">
              Tüm Haberleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
        <div className="container text-center">
          <h2 className="section-title" style={{ color: 'white' }}>
            Benimle İletişime Geçin!
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Odyoloji alanında çalışan veya bu alana ilgi duyan herkesle tanışmaktan mutluluk duyarım.
          </p>
          <div className="mt-4">
            <Link to="/iletisim" className="btn btn-light btn-lg me-3">
              <i className="fas fa-envelope me-2"></i>
              İletişime Geç
            </Link>
            <Link to="/hakkimizda" className="btn btn-outline-light btn-lg">
              <i className="fas fa-info-circle me-2"></i>
              Hakkımda Daha Fazla
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
