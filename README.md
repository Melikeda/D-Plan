# D-Plan web sitesi: dil ve siyah-beyaz ekran

Küçük bir arayüz denemesi. [D-Plan](https://dplan-app.com/) pazarlama sitesinde eksik olan iki kontrolü gösterir: dil seçimi ve siyah ya da beyaz ekran.

Canlı siteyi değiştirmez. Kaynak kodu bu çalışmada yoktu; site derlenmiş bir sayfa olarak yayında. Bu klasör, aynı vaadin çalışan örneğidir.

## Vaka kapsamında ne istendi

Staj vaka çalışması, verilen ürünün içinde küçük bir geliştirme noktası bulmayı istiyordu. Ürün D-Plan, incelenen yüzey [dplan-app.com](https://dplan-app.com/). İstenen çıktı bir öneri, gerekçesi, alternatiflerle kıyas ve uygulanmış küçük bir parça.

## Ne inceledim

D-Plan bir iOS planlama uygulaması. Sitede görevler, alışkanlıklar, haftalık plan, odak sayacı ve yapay zeka ile gün taslağı anlatılıyor. Uygulamanın 16 dilde çalıştığı ve ekran görüntülerinde açık ile koyu görünüm arasında geçiş olduğu yazıyor.

Sitenin kendisi tek dilde. Sayfa dili İngilizce. Ekran rengi de tek: koyu zemin. Ziyaretçi dili veya rengi değiştiremiyor.

## Neden bunu seçtim

Seçtiğim iş, sitenin zaten söylediği iki şeyi sitenin kendi ekranına taşır.

Uygulama 16 dilde konuşuyor. Ziyaretçi siteyi açınca yalnızca İngilizce görüyor. Türkçe ve İngilizce arasında geçiş, bu boşluğun küçük ve görünür hali. On altı dilin tamamını bu örnekte çevirmedim; iki dil, düğmenin nasıl çalıştığını göstermek için yeterli.

Uygulama görsellerinde açık ekran var. Site ise hep koyu. **Beyaz** düğmesi ekranı açar, **Siyah** düğmesi geri koyulaştırır. Pembe vurgu iki renkte de durur, böylece sayfa D-Plan’dan kopmaz.

Bu ikisini seçmemin nedeni, ikisinin de hesap, sunucu ve yapay zeka anahtarı istememesi. Seçim tarayıcıda kalır.

## Neyi eledim

| Seçenek | Neden durdurdum |
|---|---|
| Cümleden örnek gün planı | Yazılan metin plana aynen taşınıyordu. Düşünüp düzenleyen bir katman yoktu. Bunu dürüst yapmak için bir modele istek gerekir; vakanın küçük sınırı bunun dışındaydı. |
| İletişimde Gmail yerine posta uygulaması | [İletişim sayfası](https://dplan-app.com/contact) butonu Gmail’i açıyor, adres tıklanmıyor. Gerçek bir pürüz. Kapsamı ekran ve dile çevirince bu denemeyi kaldırdım. |
| On altı dilin hepsi | Ürün vaadi bu. Örnekte her sayfayı çevirmek işi büyütürdü. TR ve EN, davranışı kanıtlar. |

## Ne yaptım

Kontroller sağ üstte duran iki kapsül değil. Başlığın altında tek bir kadran var.

- **TR** ve **EN** kadranın iki ucunda, büyük harfle durur. Seçilen dile pembe bir ibre döner. Başlık ve açıklama birlikte değişir.
- Ortadaki daire siyah-beyaz bir tutulmadır. Siyah disk kayınca ekran açılır, geri kapanınca kararır. Düğmenin üzerinde Beyaz veya Siyah yazısı yoktur; anlamı hareket verir.

Sayfa yenilense de son seçim durur. Kayıt `localStorage` içindedir. Metin ve renk tercihi sunucuya gitmez.

Dosyalar:

| Dosya | Görevi |
|---|---|
| `index.html` | Sayfa iskeleti ve düğmeler |
| `styles.css` | Siyah ve beyaz renkler, D-Plan pembe vurgusu |
| `app.js` | Dil metinleri, renk değişimi, kayıt |

## Nasıl çalışıyor

Dil metinleri `app.js` içinde hazır bir listededir. Düğme, ilgili metni öğelere yazar. Kullanıcının yazdığı bir şey sayfaya kod olarak basılmaz.

Renk, sayfanın `data-theme` değeridir. `dark` siyah ekran, `light` beyaz ekrandır. CSS bu değere göre zemini ve yazıyı değiştirir.

İlk açılış Türkçe ve siyah ekrandır. Bu, canlı sitenin koyu görünümüne uyar.

## Sınır

Bu örnek [dplan-app.com](https://dplan-app.com/) içine kendiliğinden eklenmez. Canlı sitenin kaynak kodu burada olmadığı için oraya koymak ayrı bir iştir. Gizlilik, koşullar ve SSS sayfaları bu örneğe dahil değildir.

## Nasıl açılır

`index.html` dosyasını tarayıcıda aç. Ek kurulum, API anahtarı veya veritabanı gerekmez.

## GitHub

https://github.com/Melikeda/D-Plan
