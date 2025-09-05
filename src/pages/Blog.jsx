import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "İşitme Cihazları Teknolojisindeki Son Gelişmeler",
      excerpt: "2024 yılında işitme cihazı teknolojisinde yaşanan önemli gelişmeler ve bu gelişmelerin hastalar üzerindeki etkileri hakkında detaylı bir inceleme.",
      content: "İşitme cihazı teknolojisi son yıllarda hızla gelişmekte ve bu gelişmeler işitme engelli bireylerin yaşam kalitesini önemli ölçüde artırmaktadır. Yapay zeka destekli işitme cihazları, çevresel sesleri otomatik olarak filtreleyerek kullanıcıya daha net bir ses deneyimi sunmaktadır. Bu teknoloji özellikle gürültülü ortamlarda konuşma anlaşılabilirliğini artırmaktadır.",
      author: "Eren Olut",
      authorImage: "https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg",
      date: "2024-03-10",
      category: "teknoloji",
      readTime: "5 dk",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["işitme cihazı", "teknoloji", "yapay zeka"],
      views: 245,
      likes: 18
    },
    {
      id: 2,
      title: "Koklear İmplant Sonrası Rehabilitasyon Süreci",
      excerpt: "Koklear implant ameliyatı sonrası rehabilitasyon sürecinde dikkat edilmesi gereken noktalar ve başarılı sonuçlar için öneriler.",
      content: "Koklear implant ameliyatı sadece işitme kaybının tedavisi değil, aynı zamanda yeni bir yaşam tarzının başlangıcıdır. Rehabilitasyon süreci, hastanın yeni işitme deneyimine adapte olması için kritik önem taşır. Bu süreçte sabır, düzenli egzersiz ve profesyonel destek büyük rol oynar.",
      author: "Prof. Dr. Mehmet Kaya",
      authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-03-08",
      category: "rehabilitasyon",
      readTime: "7 dk",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["koklear implant", "rehabilitasyon", "ameliyat"],
      views: 189,
      likes: 12
    },
    {
      id: 3,
      title: "Çocuklarda İşitme Kaybı: Erken Teşhis ve Müdahale",
      excerpt: "Çocuklarda işitme kaybının erken teşhis edilmesinin önemi ve bu süreçte ailelerin dikkat etmesi gereken belirtiler.",
      content: "Çocuklarda işitme kaybı, konuşma ve dil gelişimini doğrudan etkileyen kritik bir durumdur. Erken teşhis ve müdahale, çocuğun gelecekteki akademik ve sosyal başarısı için hayati önem taşır. Yeni doğan işitme taraması programları bu konuda büyük fark yaratmaktadır.",
      author: "Elif Demir",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-03-05",
      category: "pediatri",
      readTime: "6 dk",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["çocuk", "işitme kaybı", "erken teşhis"],
      views: 312,
      likes: 25
    },
    {
      id: 4,
      title: "Vestibüler Sistem ve Denge Bozuklukları",
      excerpt: "Vestibüler sistemin işleyişi, denge bozukluklarının nedenleri ve tedavi yaklaşımları hakkında kapsamlı bir rehber.",
      content: "Vestibüler sistem, vücudun uzaydaki pozisyonunu algılamasını ve dengenin korunmasını sağlayan karmaşık bir sistemdir. Bu sistemde yaşanan bozukluklar, baş dönmesi, dengesizlik ve mide bulantısı gibi semptomlara neden olabilir. Doğru teşhis ve tedavi yaklaşımları ile bu sorunlar başarıyla yönetilebilir.",
      author: "Dr. Can Özkan",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-03-03",
      category: "vestibuler",
      readTime: "8 dk",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["vestibüler sistem", "denge", "baş dönmesi"],
      views: 156,
      likes: 9
    },
    {
      id: 5,
      title: "İşitme Testi Yöntemleri ve Değerlendirme",
      excerpt: "Farklı yaş grupları için uygulanan işitme testi yöntemleri ve sonuçların doğru değerlendirilmesi.",
      content: "İşitme testleri, işitme kaybının tespiti ve derecesinin belirlenmesi için kullanılan temel tanı araçlarıdır. Her yaş grubu için farklı test yöntemleri uygulanır ve sonuçların doğru yorumlanması tedavi planlaması için kritik önem taşır. Odyometrik testler, timpanometri, otoakustik emisyon testleri gibi çeşitli yöntemler kullanılır.",
      author: "Zeynep Arslan",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-03-01",
      category: "test",
      readTime: "6 dk",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["işitme testi", "odyometri", "tanı"],
      views: 278,
      likes: 15
    },
    {
      id: 6,
      title: "Gürültü Kirliliği ve İşitme Sağlığı",
      excerpt: "Modern yaşamın getirdiği gürültü kirliliğinin işitme sağlığı üzerindeki etkileri ve korunma yöntemleri.",
      content: "Gürültü kirliliği, özellikle şehir yaşamında giderek artan bir sorun haline gelmiştir. Yüksek ses seviyelerine maruz kalma, geçici veya kalıcı işitme kaybına neden olabilir. Bu konuda farkındalık yaratmak ve koruyucu önlemler almak, işitme sağlığını korumak için önemlidir.",
      author: "Burak Şahin",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-02-28",
      category: "saglik",
      readTime: "5 dk",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      tags: ["gürültü", "işitme sağlığı", "korunma"],
      views: 203,
      likes: 21
    }
  ];

  const categories = [
    { value: 'all', label: 'Tümü' },
    { value: 'teknoloji', label: 'Teknoloji' },
    { value: 'rehabilitasyon', label: 'Rehabilitasyon' },
    { value: 'pediatri', label: 'Pediatri' },
    { value: 'vestibuler', label: 'Vestibüler' },
    { value: 'test', label: 'Test Yöntemleri' },
    { value: 'saglik', label: 'Sağlık' }
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
      teknoloji: 'primary',
      rehabilitasyon: 'success',
      pediatri: 'info',
      vestibuler: 'warning',
      test: 'secondary',
      saglik: 'danger'
    };
    return colors[category] || 'light';
  };

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">Bilimsel Çalışmalar</h1>
                <p className="hero-subtitle">
                  Odyoloji alanındaki güncel gelişmeler, araştırmalar ve uzman görüşleri 
                  hakkında detaylı yazılarımı okuyun.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">25+</span>
                    <span className="stat-label">Yazı</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2K+</span>
                    <span className="stat-label">Okuyucu</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Bilimsel Çalışmalar"
                  className="hero-profile-image"
                />
                <div className="floating-elements">
                  <div className="floating-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Öne Çıkan Yazı</h2>
          
          <div className="row">
            <div className="col-lg-8">
              <div className="card featured-post-card">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="card-img-top"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="post-meta mb-3">
                    <span className={`badge bg-${getCategoryColor(featuredPost.category)} me-2`}>
                      {getCategoryLabel(featuredPost.category)}
                    </span>
                    <span className="text-muted">
                      <i className="fas fa-calendar-alt me-1"></i>
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="text-muted ms-3">
                      <i className="fas fa-clock me-1"></i>
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h2 className="card-title">{featuredPost.title}</h2>
                  <p className="card-text">{featuredPost.excerpt}</p>
                  
                  <div className="post-tags mb-3">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="badge bg-light text-dark me-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="post-stats mb-3">
                    <span className="me-3">
                      <i className="fas fa-eye me-1"></i>
                      {featuredPost.views} görüntülenme
                    </span>
                    <span className="me-3">
                      <i className="fas fa-heart me-1"></i>
                      {featuredPost.likes} beğeni
                    </span>
                  </div>
                  
                  <div className="author-info d-flex align-items-center">
                    <img 
                      src={featuredPost.authorImage} 
                      alt={featuredPost.author}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6 className="mb-0">{featuredPost.author}</h6>
                      <small className="text-muted">Yazar</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Son Yazılar</h5>
                </div>
                <div className="card-body">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="recent-post-item mb-3">
                      <h6 className="recent-post-title">
                        <a href="#" className="text-decoration-none">
                          {post.title}
                        </a>
                      </h6>
                      <div className="recent-post-meta">
                        <small className="text-muted">
                          <i className="fas fa-calendar-alt me-1"></i>
                          {formatDate(post.date)}
                        </small>
                        <small className="text-muted ms-2">
                          <i className="fas fa-clock me-1"></i>
                          {post.readTime}
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
                        {blogPosts.filter(p => p.category === category.value).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="section-title">Tüm Yazılar</h2>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-8">
                  <input 
                    type="text" 
                    className="form-control"
                    placeholder="Yazı ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="col-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card blog-card h-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className={`badge bg-${getCategoryColor(post.category)} me-2`}>
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="text-muted">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    
                    <h5 className="blog-title">{post.title}</h5>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    
                    <div className="blog-tags mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="badge bg-light text-dark me-1">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="blog-stats mb-3">
                      <small className="text-muted me-3">
                        <i className="fas fa-eye me-1"></i>
                        {post.views}
                      </small>
                      <small className="text-muted me-3">
                        <i className="fas fa-heart me-1"></i>
                        {post.likes}
                      </small>
                      <small className="text-muted">
                        <i className="fas fa-clock me-1"></i>
                        {post.readTime}
                      </small>
                    </div>
                    
                    <div className="author-info d-flex align-items-center mb-3">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="rounded-circle me-2"
                        style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                      />
                      <small className="text-muted">{post.author}</small>
                    </div>
                    
                    <button className="btn btn-outline-primary btn-sm w-100">
                      Devamını Oku
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search mb-3" style={{ fontSize: '4rem', color: '#ccc' }}></i>
              <h4>Yazı Bulunamadı</h4>
              <p className="text-muted">Aradığınız kriterlere uygun yazı bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Blog Bülteni</h2>
              <p className="section-subtitle">
                Yeni yazılarımızdan haberdar olmak için bültenimize abone olun
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

export default Blog;
