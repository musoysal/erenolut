import React, { useState } from 'react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "2024 Bahar Dönemi Etkinlik Programı Açıklandı",
      content: "Odyoloji Kulübü olarak 2024 Bahar döneminde düzenleyeceğimiz etkinliklerin programı hazırlandı. Mart, Nisan ve Mayıs aylarında toplam 12 etkinlik planlanmıştır. Programda seminerler, workshop'lar, eğitim programları ve sosyal etkinlikler yer almaktadır. Detaylı program için etkinlikler sayfamızı ziyaret edebilirsiniz.",
      date: "2024-03-10",
      time: "14:30",
      category: "etkinlik",
      type: "duyuru",
      priority: "high",
      author: "Elif Demir",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 156,
      isImportant: true
    },
    {
      id: 2,
      title: "Kulüp Üyeliği Başvuruları Başladı",
      content: "2024 yılı için yeni üye başvuruları 1 Mart tarihinde başlamıştır. Odyoloji alanında çalışan veya bu alana ilgi duyan herkesi aramızda görmekten mutluluk duyarız. Başvuru formu ve detaylı bilgiler için iletişim sayfamızı ziyaret edebilirsiniz. Başvuru süreci 31 Mayıs tarihine kadar devam edecektir.",
      date: "2024-03-05",
      time: "09:00",
      category: "uyelik",
      type: "duyuru",
      priority: "medium",
      author: "Can Özkan",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 89,
      isImportant: false
    },
    {
      id: 3,
      title: "İşitme Sağlığı Farkındalık Haftası Etkinlikleri",
      content: "Mart ayı boyunca düzenlenecek İşitme Sağlığı Farkındalık Haftası kapsamında özel etkinliklerimiz başlamıştır. Bu kapsamda ücretsiz işitme testleri, bilgilendirme seminerleri ve halka açık eğitim programları düzenlenecektir. Etkinliklerimiz tüm halkımıza açıktır ve ücretsizdir.",
      date: "2024-03-01",
      time: "10:00",
      category: "saglik",
      type: "haber",
      priority: "high",
      author: "Eren Olut",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 234,
      isImportant: true
    },
    {
      id: 4,
      title: "Uluslararası Odyoloji Konferansı'na Katılım",
      content: "Kulübümüz, 15-17 Nisan tarihlerinde İstanbul'da düzenlenecek Uluslararası Odyoloji Konferansı'na katılacaktır. Konferansta kulübümüzü temsil edecek üyelerimiz, son araştırmalarımızı sunacak ve uluslararası meslektaşlarımızla bilgi alışverişinde bulunacaktır. Konferans programı yakında duyurulacaktır.",
      date: "2024-02-28",
      time: "16:00",
      category: "konferans",
      type: "haber",
      priority: "medium",
      author: "Prof. Dr. Mehmet Kaya",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 67,
      isImportant: false
    },
    {
      id: 5,
      title: "Yeni Araştırma Laboratuvarı Açıldı",
      content: "Kulübümüzün yeni araştırma laboratuvarı 20 Şubat tarihinde hizmete girmiştir. Laboratuvarda işitme testleri, vestibüler değerlendirmeler ve araştırma çalışmaları yürütülecektir. Laboratuvar, modern ekipmanlarla donatılmış olup, üyelerimizin araştırma faaliyetlerine destek sağlayacaktır.",
      date: "2024-02-20",
      time: "11:00",
      category: "tesis",
      type: "haber",
      priority: "low",
      author: "Burak Şahin",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 45,
      isImportant: false
    },
    {
      id: 6,
      title: "Sosyal Sorumluluk Projesi: İşitme Engelli Çocuklar",
      content: "Kulübümüz, işitme engelli çocukların eğitimine destek olmak amacıyla yeni bir sosyal sorumluluk projesi başlatmıştır. Proje kapsamında özel eğitim materyalleri hazırlanacak, ailelere rehberlik hizmeti verilecek ve çocukların sosyal gelişimine katkı sağlanacaktır. Proje detayları yakında paylaşılacaktır.",
      date: "2024-02-15",
      time: "14:00",
      category: "proje",
      type: "haber",
      priority: "high",
      author: "Zeynep Arslan",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 178,
      isImportant: true
    },
    {
      id: 7,
      title: "Online Eğitim Platformu Güncellendi",
      content: "Kulübümüzün online eğitim platformu yeni özelliklerle güncellenmiştir. Platformda artık canlı dersler, interaktif quiz'ler ve sertifika programları bulunmaktadır. Üyelerimiz platform üzerinden eğitim materyallerine 7/24 erişim sağlayabilir. Platform kullanımı hakkında detaylı bilgi için iletişime geçebilirsiniz.",
      date: "2024-02-10",
      time: "13:30",
      category: "teknoloji",
      type: "duyuru",
      priority: "medium",
      author: "Elif Demir",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 92,
      isImportant: false
    },
    {
      id: 8,
      title: "Aylık Toplantı Tarihi Değişikliği",
      content: "Mart ayı aylık toplantımız 25 Mart tarihinde yerine 30 Mart tarihinde yapılacaktır. Toplantı saati aynı kalacak olup (16:00), yer değişikliği yoktur. Toplantıda gündem maddeleri ve geçen ay faaliyet raporu sunulacaktır. Tüm üyelerimizin katılımını bekliyoruz.",
      date: "2024-02-05",
      time: "15:00",
      category: "toplanti",
      type: "duyuru",
      priority: "low",
      author: "Can Özkan",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      views: 34,
      isImportant: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'etkinlik', label: 'Etkinlik' },
    { value: 'uyelik', label: 'Üyelik' },
    { value: 'saglik', label: 'Sağlık' },
    { value: 'konferans', label: 'Konferans' },
    { value: 'tesis', label: 'Tesis' },
    { value: 'proje', label: 'Proje' },
    { value: 'teknoloji', label: 'Teknoloji' },
    { value: 'toplanti', label: 'Toplantı' }
  ];

  const types = [
    { value: 'all', label: 'Tümü' },
    { value: 'duyuru', label: 'Duyuru' },
    { value: 'haber', label: 'Haber' }
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
      etkinlik: 'primary',
      uyelik: 'success',
      saglik: 'danger',
      konferans: 'info',
      tesis: 'secondary',
      proje: 'warning',
      teknoloji: 'dark',
      toplanti: 'light'
    };
    return colors[category] || 'primary';
  };

  const getTypeColor = (type) => {
    return type === 'duyuru' ? 'primary' : 'success';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'danger',
      medium: 'warning',
      low: 'success'
    };
    return colors[priority] || 'secondary';
  };

  const filteredNews = newsItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const typeMatch = selectedType === 'all' || item.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const importantNews = newsItems.filter(item => item.isImportant);
  const recentNews = newsItems.slice(0, 5);

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Duyurular & Haberler</h1>
              <p className="hero-subtitle">
                Kulübümüzle ilgili güncel duyurular, haberler ve önemli gelişmeleri 
                buradan takip edebilirsiniz.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Duyurular"
                className="img-fluid rounded"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important News */}
      {importantNews.length > 0 && (
        <section className="section bg-warning bg-opacity-10">
          <div className="container">
            <h2 className="section-title">
              <i className="fas fa-exclamation-triangle me-2"></i>
              Önemli Duyurular
            </h2>
            
            <div className="row">
              {importantNews.map((news) => (
                <div key={news.id} className="col-lg-6 mb-4">
                  <div className="card border-warning">
                    <div className="card-header bg-warning bg-opacity-25">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={`badge bg-${getCategoryColor(news.category)}`}>
                          {getCategoryLabel(news.category)}
                        </span>
                        <span className={`badge bg-${getPriorityColor(news.priority)}`}>
                          Önemli
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{news.title}</h5>
                      <p className="card-text">{news.content}</p>
                      <div className="news-meta">
                        <small className="text-muted">
                          <i className="fas fa-calendar-alt me-1"></i>
                          {formatDate(news.date)} - {news.time}
                        </small>
                        <small className="text-muted ms-3">
                          <i className="fas fa-user me-1"></i>
                          {news.author}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="section-title">Tüm Duyurular & Haberler</h2>
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
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    {types.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {filteredNews.map((news) => (
                <div key={news.id} className="card news-card mb-4">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="img-fluid rounded-start h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="news-meta mb-2">
                          <span className={`badge bg-${getCategoryColor(news.category)} me-2`}>
                            {getCategoryLabel(news.category)}
                          </span>
                          <span className={`badge bg-${getTypeColor(news.type)} me-2`}>
                            {news.type === 'duyuru' ? 'Duyuru' : 'Haber'}
                          </span>
                          {news.isImportant && (
                            <span className="badge bg-danger">
                              <i className="fas fa-star me-1"></i>
                              Önemli
                            </span>
                          )}
                        </div>
                        
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">{news.content}</p>
                        
                        <div className="news-details">
                          <div className="row">
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="fas fa-calendar-alt me-1"></i>
                                {formatDate(news.date)}
                              </small>
                            </div>
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="fas fa-clock me-1"></i>
                                {news.time}
                              </small>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="fas fa-user me-1"></i>
                                {news.author}
                              </small>
                            </div>
                            <div className="col-6">
                              <small className="text-muted">
                                <i className="fas fa-eye me-1"></i>
                                {news.views} görüntülenme
                              </small>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <button className="btn btn-outline-primary btn-sm">
                            <i className="fas fa-share-alt me-1"></i>
                            Paylaş
                          </button>
                          <button className="btn btn-outline-secondary btn-sm ms-2">
                            <i className="fas fa-bookmark me-1"></i>
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredNews.length === 0 && (
                <div className="text-center py-5">
                  <i className="fas fa-newspaper mb-3" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                  <h4>İçerik Bulunamadı</h4>
                  <p className="text-muted">Seçtiğiniz kriterlere uygun içerik bulunmamaktadır.</p>
                </div>
              )}
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Son Haberler</h5>
                </div>
                <div className="card-body">
                  {recentNews.map((news) => (
                    <div key={news.id} className="recent-news-item mb-3">
                      <h6 className="recent-news-title">
                        <a href="#" className="text-decoration-none">
                          {news.title}
                        </a>
                      </h6>
                      <div className="recent-news-meta">
                        <small className="text-muted">
                          <i className="fas fa-calendar-alt me-1"></i>
                          {formatDate(news.date)}
                        </small>
                        <small className="text-muted ms-2">
                          <i className="fas fa-eye me-1"></i>
                          {news.views}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-header">
                  <h5 className="mb-0">Kategoriler</h5>
                </div>
                <div className="card-body">
                  {categories.slice(1).map((category) => (
                    <div key={category.value} className="category-item mb-2">
                      <a 
                        href="#" 
                        className={`text-decoration-none ${selectedCategory === category.value ? 'fw-bold' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCategory(category.value);
                        }}
                      >
                        {category.label}
                      </a>
                      <span className="badge bg-light text-dark ms-2">
                        {newsItems.filter(n => n.category === category.value).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-header">
                  <h5 className="mb-0">İstatistikler</h5>
                </div>
                <div className="card-body">
                  <div className="stats-item mb-2">
                    <i className="fas fa-newspaper me-2 text-primary"></i>
                    <span>Toplam Haber: {newsItems.length}</span>
                  </div>
                  <div className="stats-item mb-2">
                    <i className="fas fa-bullhorn me-2 text-success"></i>
                    <span>Duyuru: {newsItems.filter(n => n.type === 'duyuru').length}</span>
                  </div>
                  <div className="stats-item mb-2">
                    <i className="fas fa-exclamation-triangle me-2 text-warning"></i>
                    <span>Önemli: {newsItems.filter(n => n.isImportant).length}</span>
                  </div>
                  <div className="stats-item mb-2">
                    <i className="fas fa-eye me-2 text-info"></i>
                    <span>Toplam Görüntülenme: {newsItems.reduce((sum, news) => sum + news.views, 0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Haber Bülteni</h2>
              <p className="section-subtitle">
                Güncel duyurular ve haberlerden haberdar olmak için bültenimize abone olun
              </p>
              
              <div className="newsletter-form">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="E-posta adresiniz"
                      />
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-paper-plane me-2"></i>
                        Abone Ol
                      </button>
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

export default News;
