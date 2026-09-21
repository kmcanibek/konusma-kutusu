# 🎤 Konuşma Kutusu

5. sınıf Türkçe konuşma dersleri için hazırlanmış, tarayıcıda çalışan sınıf içi konuşma uygulaması.

## Özellikler

- Rastgele konuşma kartı çekme
- 5 kategori: Günlük, Durum, İkna, Hayal, Rol
- Düşünme süresi sayacı
- Konuşma süresi sayacı
- Süreleri öğretmenin değiştirebilmesi
- Düşünme süresi bitince otomatik olarak konuşma aşamasına geçiş
- Sesli aşama uyarısı
- Duraklatma ve sıfırlama
- Telefon, tablet ve akıllı tahta uyumlu tasarım
- PWA desteği: uygun tarayıcılarda ana ekrana / bilgisayara uygulama gibi kurulabilir
- İnternet bağlantısı kesilse de önbellek sayesinde çalışmaya devam edebilir

## Yerelde çalıştırma

Dosyaları aynı klasörde tutun. Basit bir yerel sunucu açmanız yeterlidir.

Python yüklüyse:

```bash
python -m http.server 8000
```

Ardından tarayıcıdan `http://localhost:8000` adresini açın.

> `index.html` dosyası doğrudan da açılabilir. Ancak PWA / çevrimdışı özellikleri için HTTP üzerinden çalıştırmak gerekir.

## GitHub Pages ile yayınlama

1. GitHub'da yeni bir depo oluşturun. Örnek ad: `konusma-kutusu`
2. Bu klasördeki tüm dosyaları deponun ana dizinine yükleyin.
3. GitHub deposunda **Settings → Pages** bölümüne girin.
4. **Build and deployment** altında kaynak olarak **Deploy from a branch** seçin.
5. Branch olarak `main`, klasör olarak `/ (root)` seçin ve kaydedin.
6. GitHub kısa süre sonra size yayın bağlantısını gösterecektir.

Genellikle bağlantı şu yapıda olur:

`https://KULLANICI-ADINIZ.github.io/konusma-kutusu/`

## Kartları değiştirme

Konuşma kartları `app.js` dosyasının en üstündeki `prompts` dizisinde bulunur. Yeni kart eklemek için şu yapıyı kullanın:

```js
{ category: 'Hayal', icon: '🚀', text: 'Ay’da bir okul kursaydın nasıl olurdu?' }
```

Kullanılabilen kategori adları: `Günlük`, `Durum`, `İkna`, `Hayal`, `Rol`.

## Önerilen sınıf akışı

1. Öğrenci kart çeker.
2. Düşünme sayacı başlatılır.
3. Süre bittiğinde uygulama otomatik olarak konuşma sayacına geçer.
4. Öğrenci konuşmasını tamamlar.
5. Bir dinleyici şu kalıpla olumlu geri bildirim verir: “Konuşmanda en çok … kısmını beğendim çünkü …”
6. Yeni öğrenci için yeni kart çekilir.

## Teknoloji

Saf HTML + CSS + JavaScript kullanır. Herhangi bir paket, framework veya kurulum gerektirmez.
