import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Eren Olut",
      role: "Odyoloji Uzmanı & Kulüp Başkanı",
      image: "https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg",
      description: "Odyoloji alanında uzman olan Eren Olut, Odyoloji Kulübü'nün kurucusu ve başkanıdır. İşitme sağlığı konusunda toplumsal farkındalık yaratmak için çalışmaktadır.",
      education: "İstanbul Üniversitesi Odyoloji Bölümü",
      experience: "12 yıl"
    },
    {
      id: 2,
      name: "Prof. Dr. Mehmet Kaya",
      role: "Akademik Danışman",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Odyoloji alanında önde gelen akademisyenlerden biri olarak kulübümüze rehberlik ediyor.",
      education: "Hacettepe Üniversitesi Odyoloji Bölümü",
      experience: "20 yıl"
    },
    {
      id: 3,
      name: "Elif Demir",
      role: "Genel Sekreter",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Kulüp faaliyetlerinin koordinasyonu ve üye ilişkilerinden sorumludur.",
      education: "Marmara Üniversitesi Odyoloji Bölümü",
      experience: "8 yıl"
    },
    {
      id: 4,
      name: "Can Özkan",
      role: "Etkinlik Koordinatörü",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Seminer, workshop ve diğer etkinliklerin organizasyonundan sorumludur.",
      education: "Ankara Üniversitesi Odyoloji Bölümü",
      experience: "6 yıl"
    },
    {
      id: 5,
      name: "Zeynep Arslan",
      role: "Sosyal Medya Sorumlusu",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Kulübümüzün dijital varlığını yönetir ve iletişim stratejilerini geliştirir.",
      education: "Boğaziçi Üniversitesi Psikoloji Bölümü",
      experience: "4 yıl"
    },
    {
      id: 6,
      name: "Burak Şahin",
      role: "Mali İşler Sorumlusu",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      description: "Kulübümüzün mali işlerini yönetir ve bütçe planlaması yapar.",
      education: "İstanbul Teknik Üniversitesi Endüstri Mühendisliği",
      experience: "10 yıl"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Kulübün Kuruluşu",
      description: "Eren Olut tarafından odyoloji alanında farkındalık yaratmak amacıyla kurulduk."
    },
    {
      year: "2019",
      title: "İlk Büyük Etkinlik",
      description: "500 katılımcılı 'İşitme Sağlığı Sempozyumu' düzenledik."
    },
    {
      year: "2020",
      title: "Online Etkinlikler",
      description: "Pandemi döneminde dijital platformlara geçiş yaptık."
    },
    {
      year: "2021",
      title: "Uluslararası İşbirliği",
      description: "Avrupa Odyoloji Dernekleri ile işbirliği anlaşması imzaladık."
    },
    {
      year: "2022",
      title: "Araştırma Merkezi",
      description: "Kendi araştırma laboratuvarımızı kurduk."
    },
    {
      year: "2023",
      title: "Toplumsal Projeler",
      description: "İşitme engelli çocuklar için özel eğitim programları başlattık."
    }
  ];

  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "İnovasyon",
      description: "Odyoloji alanındaki en son teknolojileri ve yöntemleri takip ediyoruz."
    },
    {
      icon: "fas fa-handshake",
      title: "İşbirliği",
      description: "Farklı disiplinlerden uzmanlarla işbirliği yaparak güçlü bir ağ oluşturuyoruz."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Eğitim",
      description: "Sürekli öğrenme ve gelişim odaklı bir yaklaşım benimsiyoruz."
    },
    {
      icon: "fas fa-heart",
      title: "Toplumsal Sorumluluk",
      description: "İşitme sağlığı konusunda toplumsal farkındalık yaratmayı hedefliyoruz."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">Hakkımda</h1>
              <p className="hero-subtitle">
                Odyoloji alanında uzman, Odyoloji Kulübü başkanı ve kurucusu. 
                İşitme sağlığı konusunda toplumsal farkındalık yaratmak için çalışıyorum.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img 
                  src="https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg"
                  alt="Eren Olut"
                  className="hero-profile-image"
                />
                <div className="floating-elements">
                  <div className="floating-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-bullseye mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                  <h3 className="card-title">Misyonum</h3>
                  <p className="card-text">
                    İşitme sağlığı konusunda toplumsal farkındalık yaratmak, odyoloji alanındaki 
                    bilimsel gelişmeleri takip etmek ve bu alanda çalışan profesyonelleri 
                    bir araya getirerek bilgi paylaşımını artırmaktır.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <i className="fas fa-eye mb-3" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}></i>
                  <h3 className="card-title">Vizyonum</h3>
                  <p className="card-text">
                    Türkiye'de odyoloji alanının öncü isimlerinden biri olmak, 
                    işitme engelli bireylerin yaşam kalitesini artırmak ve bu alanda 
                    çalışan profesyonellerin gelişimine katkı sağlamaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Değerlerim</h2>
          <p className="section-subtitle">
            Çalışmalarımı yönlendiren temel değerler
          </p>
          
          <div className="row">
            {values.map((value, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card text-center h-100">
                  <div className="card-body">
                    <i className={value.icon} style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                    <h5 className="card-title mt-3">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Kariyerim</h2>
          <p className="section-subtitle">
            Odyoloji alanındaki kariyerimden önemli kilometre taşları
          </p>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="timeline-year">{milestone.year}</span>
                </div>
                <div className="timeline-content">
                  <h5 className="timeline-title">{milestone.title}</h5>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Ekip Arkadaşlarım</h2>
          <p className="section-subtitle">
            Odyoloji Kulübü'nde birlikte çalıştığım değerli ekip arkadaşlarım
          </p>
          
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-4">
                <div className="team-card">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-photo"
                  />
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  <div className="team-details">
                    <p><strong>Eğitim:</strong> {member.education}</p>
                    <p><strong>Deneyim:</strong> {member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Rakamlarla Başarılarım</h2>
          <p className="section-subtitle">
            Bugüne kadar gerçekleştirdiğim çalışmaların özeti
          </p>
          
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card">
                <i className="fas fa-users mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                <h3 className="stat-number">250+</h3>
                <p className="stat-label">Aktif Üye</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card">
                <i className="fas fa-calendar-alt mb-3" style={{ fontSize: '3rem', color: 'var(--secondary-color)' }}></i>
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Etkinlik</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card">
                <i className="fas fa-graduation-cap mb-3" style={{ fontSize: '3rem', color: 'var(--accent-color)' }}></i>
                <h3 className="stat-number">1000+</h3>
                <p className="stat-label">Eğitim Alan Kişi</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-card">
                <i className="fas fa-handshake mb-3" style={{ fontSize: '3rem', color: 'var(--primary-color)' }}></i>
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">İşbirliği Anlaşması</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
