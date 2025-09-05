import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    membership: false,
    newsletter: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Adres",
      content: "Eren Olut Odyoloji Merkezi\nİstanbul, Türkiye\nMerkez Mahallesi, Sağlık Sokak No: 15",
      color: "primary",
      action: "Yol Tarifi Al"
    },
    {
      icon: "fas fa-phone",
      title: "Telefon",
      content: "+90 (212) 555 0123\n+90 (532) 555 0124\nPazartesi - Cuma: 09:00 - 18:00",
      color: "success",
      action: "Hemen Ara"
    },
    {
      icon: "fas fa-envelope",
      title: "E-posta",
      content: "eren.olut@odyolojikulubu.com\ninfo@erenolut.com\netkinlik@erenolut.com",
      color: "info",
      action: "E-posta Gönder"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Randevu",
      content: "Online randevu sistemi\nPazartesi - Cuma: 09:00 - 18:00\nCumartesi: 10:00 - 16:00",
      color: "warning",
      action: "Randevu Al"
    }
  ];

  const teamMembers = [
    {
      name: "Eren Olut",
      role: "Odyoloji Uzmanı & Kulüp Başkanı",
      email: "eren.olut@odyolojikulubu.com",
      phone: "+90 (212) 555 0125",
      image: "https://www.shutterstock.com/image-photo/head-shot-woman-wearing-white-600nw-1529466836.jpg"
    },
    {
      name: "Elif Demir",
      role: "Genel Sekreter",
      email: "elif.demir@odyolojikulubu.com",
      phone: "+90 (212) 555 0126",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Can Özkan",
      role: "Etkinlik Koordinatörü",
      email: "can.ozkan@odyolojikulubu.com",
      phone: "+90 (212) 555 0127",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const faqItems = [
    {
      question: "Kulüp üyeliği nasıl yapılır?",
      answer: "Kulüp üyeliği için iletişim formumuzu doldurarak başvuru yapabilirsiniz. Başvurunuz değerlendirildikten sonra size geri dönüş yapılacaktır. Üyelik koşulları hakkında detaylı bilgi için lütfen iletişime geçin."
    },
    {
      question: "Etkinliklere katılım ücretli mi?",
      answer: "Etkinliklerimizin çoğu ücretsizdir. Bazı özel workshop ve eğitim programları için ücret alınabilir. Etkinlik detaylarında ücret bilgisi belirtilir."
    },
    {
      question: "Hangi konularda danışmanlık alabilirim?",
      answer: "İşitme sağlığı, odyoloji testleri, işitme cihazları, koklear implantlar ve vestibüler sistem konularında danışmanlık hizmeti veriyoruz."
    },
    {
      question: "Online eğitim programları var mı?",
      answer: "Evet, online eğitim platformumuz üzerinden çeşitli eğitim programları sunuyoruz. Platforma üye olarak 7/24 eğitim materyallerine erişebilirsiniz."
    },
    {
      question: "Araştırma projelerine nasıl katılabilirim?",
      answer: "Araştırma projelerimize katılmak için öncelikle kulüp üyesi olmanız gerekmektedir. Üye olduktan sonra araştırma koordinatörümüzle iletişime geçebilirsiniz."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Ad Soyad gereklidir';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Konu gereklidir';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Mesaj gereklidir';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Mesaj en az 10 karakter olmalıdır';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        membership: false,
        newsletter: false
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">İletişime Geçin</h1>
                <p className="hero-subtitle">
                  Sorularınız, randevu talepleriniz veya işbirliği önerileriniz için 
                  benimle iletişime geçin. Size en kısa sürede dönüş yapacağım.
                </p>
              </div>
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
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="floating-icon">
                    <i className="fas fa-calendar"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">İletişim Bilgileri</h2>
          <p className="section-subtitle">
            Size en uygun iletişim yöntemini seçin
          </p>
          
          <div className="row">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="card contact-info-card h-100">
                  <div className="card-body text-center">
                    <div className="contact-icon-wrapper">
                      <i className={`${info.icon} contact-icon`}></i>
                    </div>
                    <h5 className="contact-title">{info.title}</h5>
                    <p className="contact-content" style={{ whiteSpace: 'pre-line' }}>
                      {info.content}
                    </p>
                    <button className={`btn btn-${info.color} btn-sm contact-action-btn`}>
                      {info.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="modern-contact-form">
                <div className="form-header">
                  <h3 className="form-title">Mesaj Gönderin</h3>
                  <p className="form-subtitle">Size en kısa sürede dönüş yapacağım</p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success" role="alert">
                    <i className="fas fa-check-circle me-2"></i>
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    <i className="fas fa-exclamation-circle me-2"></i>
                    Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="modern-form">
                  <div className="form-body" style={{ padding: '40px' }}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Ad Soyad *</label>
                          <input
                            type="text"
                            className={`form-control modern-input ${formErrors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Adınızı ve soyadınızı giriniz"
                          />
                          {formErrors.name && (
                            <div className="invalid-feedback">{formErrors.name}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">E-posta *</label>
                          <input
                            type="email"
                            className={`form-control modern-input ${formErrors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="ornek@email.com"
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">{formErrors.email}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Telefon</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+90 (5XX) XXX XX XX"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Konu *</label>
                      <select
                        className={`form-select ${formErrors.subject ? 'is-invalid' : ''}`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="uyelik">Üyelik Başvurusu</option>
                        <option value="etkinlik">Etkinlik Bilgisi</option>
                        <option value="danismanlik">Danışmanlık</option>
                        <option value="egitim">Eğitim Programı</option>
                        <option value="arastirma">Araştırma Projesi</option>
                        <option value="diger">Diğer</option>
                      </select>
                      {formErrors.subject && (
                        <div className="invalid-feedback">{formErrors.subject}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Mesaj *</label>
                    <textarea
                      className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mesajınızı buraya yazınız..."
                    ></textarea>
                    {formErrors.message && (
                      <div className="invalid-feedback">{formErrors.message}</div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="membership"
                        name="membership"
                        checked={formData.membership}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="membership">
                        Kulüp üyeliği hakkında bilgi almak istiyorum
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        E-posta bültenine abone olmak istiyorum
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Mesaj Gönder
                      </>
                    )}
                  </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="mb-0">Ekip Üyeleri</h5>
                </div>
                <div className="card-body">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="team-contact-item mb-3">
                      <div className="d-flex align-items-center">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="rounded-circle me-3"
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="mb-1">{member.name}</h6>
                          <small className="text-muted">{member.role}</small>
                        </div>
                      </div>
                      <div className="mt-2">
                        <small className="text-muted d-block">
                          <i className="fas fa-envelope me-1"></i>
                          {member.email}
                        </small>
                        <small className="text-muted">
                          <i className="fas fa-phone me-1"></i>
                          {member.phone}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card mt-4">
                <div className="card-header">
                  <h5 className="mb-0">Sık Sorulan Sorular</h5>
                </div>
                <div className="card-body">
                  {faqItems.slice(0, 3).map((faq, index) => (
                    <div key={index} className="faq-item mb-3">
                      <h6 className="faq-question">{faq.question}</h6>
                      <p className="faq-answer text-muted small">{faq.answer}</p>
                    </div>
                  ))}
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Tüm Soruları Gör
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Konumumuz</h2>
          <p className="section-subtitle">
            Kulüp merkezimizi harita üzerinde görebilirsiniz
          </p>
          
          <div className="row">
            <div className="col-12">
              <div className="map-placeholder">
                <div className="card">
                  <div className="card-body text-center py-5">
                    <i className="fas fa-map-marked-alt mb-3" style={{ fontSize: '4rem', color: 'var(--primary-color)' }}></i>
                    <h4>Harita</h4>
                    <p className="text-muted">
                      İnteraktif harita burada görüntülenecektir. 
                      Google Maps veya benzeri bir harita servisi entegre edilebilir.
                    </p>
                    <button className="btn btn-primary">
                      <i className="fas fa-directions me-2"></i>
                      Yol Tarifi Al
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Sosyal Medyada Takip Edin</h2>
              <p className="section-subtitle">
                Güncel haberler ve etkinlikler için sosyal medya hesaplarımızı takip edin
              </p>
              
              <div className="social-media-links">
                <a href="#" className="btn btn-outline-primary me-3 mb-3">
                  <i className="fab fa-facebook-f me-2"></i>
                  Facebook
                </a>
                <a href="#" className="btn btn-outline-info me-3 mb-3">
                  <i className="fab fa-twitter me-2"></i>
                  Twitter
                </a>
                <a href="#" className="btn btn-outline-danger me-3 mb-3">
                  <i className="fab fa-instagram me-2"></i>
                  Instagram
                </a>
                <a href="#" className="btn btn-outline-primary me-3 mb-3">
                  <i className="fab fa-linkedin-in me-2"></i>
                  LinkedIn
                </a>
                <a href="#" className="btn btn-outline-success me-3 mb-3">
                  <i className="fab fa-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
