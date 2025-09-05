# Eren Olut - Kişisel Web Sitesi

Modern ve responsive bir React web sitesi. Eren Olut'un kişisel web sitesi ve Odyoloji Kulübü başkanlığını yönettiği platform. Odyoloji alanında farkındalık yaratmak, bilimsel gelişmeleri takip etmek ve toplumsal katkı sağlamak için tasarlanmıştır.

**Site Sahibi:** Eren Olut - Odyoloji Uzmanı & Kulüp Başkanı

## 🚀 Özellikler

### 📱 Responsive Tasarım

- Mobil ve masaüstü uyumlu
- Bootstrap 5 ile modern tasarım
- Temiz ve okunabilir arayüz

### 🏠 Ana Sayfa

- Etkileyici hero slider
- Kulüp özellikleri kartları
- Yaklaşan etkinlikler önizlemesi
- Son haberler bölümü
- Call-to-action bölümleri

### 👥 Hakkımızda

- Misyon ve vizyon kartları
- Değerler bölümü
- Tarihçe timeline'ı
- Ekip üyeleri kartları
- İstatistikler bölümü

### 📅 Etkinlikler

- Etkinlik listesi ve filtreleme
- Kategori ve tarih filtreleri
- Etkinlik detay kartları
- Kayıt durumu gösterimi
- Etkinlik takvimi placeholder'ı

### 📝 Blog

- Blog yazıları listesi
- Kategori filtreleme
- Arama özelliği
- Öne çıkan yazı bölümü
- Yazar bilgileri
- Sosyal medya entegrasyonu

### 📢 Duyurular & Haberler

- Duyuru ve haber listesi
- Önemli duyurular vurgulaması
- Kategori ve tip filtreleri
- İstatistikler paneli
- Sosyal medya paylaşımı

### 📞 İletişim

- İletişim formu (validasyon ile)
- İletişim bilgileri kartları
- Ekip üyeleri iletişim bilgileri
- SSS bölümü
- Harita placeholder'ı
- Sosyal medya linkleri

## 🛠️ Teknolojiler

- **React 18** - Modern React hooks ve functional components
- **React Router DOM** - Sayfa yönlendirmeleri
- **Bootstrap 5** - Responsive CSS framework
- **Font Awesome** - İkonlar
- **CSS3** - Özel stiller ve animasyonlar

## 📦 Kurulum

1. Projeyi klonlayın:

```bash
git clone <repository-url>
cd odyoloji-kulubu-website
```

2. Bağımlılıkları yükleyin:

```bash
npm install
```

3. Geliştirme sunucusunu başlatın:

```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 🏗️ Proje Yapısı

```
src/
├── components/
│   ├── Header.jsx         # Navigasyon ve header
│   └── Footer.jsx         # Footer ve sosyal medya
├── pages/
│   ├── Home.jsx           # Ana sayfa
│   ├── About.jsx          # Hakkımızda
│   ├── Events.jsx         # Etkinlikler
│   ├── Blog.jsx           # Blog
│   ├── News.jsx           # Duyurular & Haberler
│   └── Contact.jsx        # İletişim
├── App.jsx                # Ana uygulama bileşeni
├── index.jsx              # Uygulama giriş noktası
└── index.css              # Global stiller
```

## 🎨 Tasarım Sistemi

### Renk Paleti

- **Primary**: #6c5ce7 (Mor)
- **Secondary**: #a29bfe (Açık mor)
- **Accent**: #fd79a8 (Pembe)
- **Text Dark**: #2d3436 (Koyu gri)
- **Text Light**: #636e72 (Açık gri)
- **Background**: #f8f9fa (Açık gri arka plan)

### Tipografi

- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Başlık Boyutları**: 3.5rem (hero), 2.5rem (section), 1.5rem (kart)
- **Metin Boyutları**: 1rem (normal), 0.9rem (küçük)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 576px - 767px
- **Small Mobile**: <576px

## 🔧 Özelleştirme

### Renkleri Değiştirme

`src/index.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --accent-color: #fd79a8;
  /* ... diğer renkler */
}
```

### İçerik Güncelleme

Her sayfa bileşeninde örnek veriler bulunmaktadır. Gerçek içerikle değiştirmek için:

1. `pages/` klasöründeki ilgili dosyayı açın
2. Veri dizilerini (events, blogPosts, newsItems, vb.) güncelleyin
3. Görselleri `public/` klasörüne ekleyin ve URL'leri güncelleyin

## 🚀 Deployment

### Build Alma

```bash
npm run build
```

### Netlify/Vercel Deployment

1. Projeyi GitHub'a push edin
2. Netlify veya Vercel'e bağlayın
3. Build komutunu `npm run build` olarak ayarlayın
4. Publish directory'yi `build` olarak ayarlayın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Kurucu & Başkan**: Eren Olut
- **E-posta**: eren.olut@odyolojikulubu.com
- **Telefon**: +90 (212) 555 0123
- **Website**: [odyolojikulubu.com](https://odyolojikulubu.com)

## 🙏 Teşekkürler

- [Unsplash](https://unsplash.com) - Görseller için
- [Font Awesome](https://fontawesome.com) - İkonlar için
- [Bootstrap](https://getbootstrap.com) - CSS framework için
