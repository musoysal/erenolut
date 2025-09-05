import React, { useState } from 'react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const events = [
    {
      id: 1,
      title: "İşitme Cihazları Teknolojisi Semineri",
      date: "2025-01-15",
      time: "14:00",
      duration: "2 saat",
      location: "Konferans Salonu A",
      category: "seminer",
      description: "Son teknoloji işitme cihazları ve kullanım alanları hakkında kapsamlı bir seminer.",
      speaker: "Eren Olut",
      capacity: 50,
      registered: 35,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      requirements: "Odyoloji öğrencisi veya mezunu olmak",
      price: "Ücretsiz"
    },
    {
      id: 2,
      title: "Odyoloji Öğrenci Buluşması",
      date: "2025-01-20",
      time: "16:00",
      duration: "3 saat",
      location: "Kulüp Merkezi",
      category: "toplanti",
      description: "Odyoloji öğrencilerinin bir araya gelerek deneyim paylaştığı informal buluşma.",
      speaker: "Elif Demir",
      capacity: 30,
      registered: 28,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      requirements: "Odyoloji öğrencisi olmak",
      price: "Ücretsiz"
    },
    {
      id: 3,
      title: "İşitme Testi Workshop'u",
      date: "2025-01-25",
      time: "10:00",
      duration: "4 saat",
      location: "Laboratuvar B",
      category: "workshop",
      description: "Pratik işitme testi uygulamaları ve sonuç değerlendirme teknikleri.",
      speaker: "Prof. Dr. Mehmet Kaya",
      capacity: 20,
      registered: 18,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      requirements: "Temel odyoloji bilgisi",
      price: "50 TL"
    },
    {
      id: 4,
      title: "İşitme Sağlığı Farkındalık Semineri",
      date: "2025-01-30",
      time: "10:00",
      duration: "2 saat",
      location: "Halk Eğitim Merkezi",
      category: "seminer",
      description: "Toplumsal işitme sağlığı farkındalığı ve korunma yöntemleri hakkında eğitim.",
      speaker: "Eren Olut",
      capacity: 100,
      registered: 75,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      requirements: "Herkes katılabilir",
      price: "Ücretsiz"
    }
  ];

  const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'seminer', label: 'Seminer' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'toplanti', label: 'Toplantı' },
    { value: 'egitim', label: 'Eğitim' }
  ];

  const months = [
    { value: 'all', label: 'Tüm Aylar' },
    { value: '03', label: 'Mart 2024' },
    { value: '04', label: 'Nisan 2024' },
    { value: '05', label: 'Mayıs 2024' },
    { value: '06', label: 'Haziran 2024' }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  const getCategoryColor = (category) => {
    const colors = {
      seminer: 'primary',
      workshop: 'success',
      toplanti: 'info',
      egitim: 'warning'
    };
    return colors[category] || 'secondary';
  };

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const monthMatch = selectedMonth === 'all' || event.date.startsWith(`2024-${selectedMonth}`);
    return categoryMatch && monthMatch;
  });

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 4);

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Etkinlikler</h1>
                <p className="hero-subtitle">
                  Odyoloji alanındaki güncel gelişmeleri takip etmek ve bilgi paylaşımında bulunmak 
                  için düzenlediğim etkinliklere katılın.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">12+</span>
                    <span className="stat-label">Aylık Etkinlik</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Katılımcı</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Etkinlikler"
                  className="hero-profile-image"
                />
                <div className="floating-elements">
                  <div className="floating-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-microphone"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Yaklaşan Etkinlikler</h2>
          <p className="section-subtitle">
            Önümüzdeki günlerde düzenlenecek etkinliklerimiz
          </p>
          
                      <div className="alert alert-info text-center mb-5" role="alert">
              <i className="fas fa-calendar-check me-2"></i>
              <strong>Yaklaşan Etkinliklerimiz:</strong> Ocak 2025'te 4 farklı etkinlik düzenliyoruz!
            </div>
          
          <div className="row">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card event-preview-card">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <div className="event-meta mb-2">
                      <span className={`badge bg-${getCategoryColor(event.category)} me-2`}>
                        {getCategoryLabel(event.category)}
                      </span>
                      <small className="text-muted">
                        <i className="fas fa-calendar-alt me-1"></i>
                        {formatDate(event.date)}
                      </small>
                    </div>
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <div className="event-details">
                      <p className="mb-1">
                        <i className="fas fa-clock me-2"></i>
                        {event.time} - {event.duration}
                      </p>
                      <p className="mb-1">
                        <i className="fas fa-map-marker-alt me-2"></i>
                        {event.location}
                      </p>
                      <p className="mb-1">
                        <i className="fas fa-user me-2"></i>
                        {event.speaker}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="section-title">Tüm Etkinlikler</h2>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <select 
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <select 
                    className="form-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    {months.map(month => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            {filteredEvents.map((event) => (
              <div key={event.id} className="col-lg-6 mb-4">
                <div className="card event-card h-100">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="img-fluid rounded-start h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="event-meta mb-2">
                          <span className={`badge bg-${getCategoryColor(event.category)} me-2`}>
                            {getCategoryLabel(event.category)}
                          </span>
                          <span className="badge bg-light text-dark">
                            {event.price}
                          </span>
                        </div>
                        
                        <h5 className="card-title">{event.title}</h5>
                        <p className="card-text">{event.description}</p>
                        
                        <div className="event-details mb-3">
                          <div className="row">
                            <div className="col-6">
                              <p className="mb-1">
                                <i className="fas fa-calendar-alt me-2 text-primary"></i>
                                {formatDate(event.date)}
                              </p>
                              <p className="mb-1">
                                <i className="fas fa-clock me-2 text-primary"></i>
                                {event.time} - {event.duration}
                              </p>
                            </div>
                            <div className="col-6">
                              <p className="mb-1">
                                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                                {event.location}
                              </p>
                              <p className="mb-1">
                                <i className="fas fa-user me-2 text-primary"></i>
                                {event.speaker}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="event-info mb-3">
                          <div className="row">
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="fas fa-users me-1"></i>
                                {event.registered}/{event.capacity} kişi
                              </small>
                            </div>
                            <div className="col-6">
                              <div className="progress" style={{ height: '6px' }}>
                                <div 
                                  className="progress-bar bg-primary" 
                                  style={{ 
                                    width: `${(event.registered / event.capacity) * 100}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="event-requirements mb-3">
                          <small className="text-muted">
                            <i className="fas fa-info-circle me-1"></i>
                            {event.requirements}
                          </small>
                        </div>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <button className="btn btn-primary">
                            <i className="fas fa-ticket-alt me-2"></i>
                            Kayıt Ol
                          </button>
                          <button className="btn btn-outline-secondary btn-sm">
                            <i className="fas fa-share-alt me-1"></i>
                            Paylaş
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-calendar-times mb-3" style={{ fontSize: '4rem', color: '#ccc' }}></i>
              <h4>Etkinlik Bulunamadı</h4>
              <p className="text-muted">Seçtiğiniz kriterlere uygun etkinlik bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Etkinlik Takvimi</h2>
          <p className="section-subtitle">
            Aylık etkinlik takvimimizi inceleyin
          </p>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="calendar-placeholder">
                <div className="card">
                  <div className="card-body text-center py-5">
                    <i className="fas fa-calendar-alt mb-3" style={{ fontSize: '4rem', color: 'var(--primary-color)' }}></i>
                    <h4>Etkinlik Takvimi</h4>
                    <p className="text-muted">
                      Detaylı etkinlik takvimi yakında eklenecektir. 
                      Güncel etkinlikler için yukarıdaki listeyi inceleyebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Hızlı Bilgiler</h5>
                </div>
                <div className="card-body">
                  <div className="quick-info">
                    <div className="info-item mb-3">
                      <i className="fas fa-calendar-check me-2 text-primary"></i>
                      <span>Toplam Etkinlik: {events.length}</span>
                    </div>
                    <div className="info-item mb-3">
                      <i className="fas fa-users me-2 text-success"></i>
                      <span>Bu Ay Katılımcı: {events.reduce((sum, event) => sum + event.registered, 0)}</span>
                    </div>
                    <div className="info-item mb-3">
                      <i className="fas fa-graduation-cap me-2 text-info"></i>
                      <span>Eğitim Etkinliği: {events.filter(e => e.category === 'egitim').length}</span>
                    </div>
                    <div className="info-item mb-3">
                      <i className="fas fa-tools me-2 text-warning"></i>
                      <span>Workshop: {events.filter(e => e.category === 'workshop').length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
