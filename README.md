# Hepsiburada Front-End Developer Çalışması

# Projenin ayağa kaldırılması için izlenecek adımlar

npm install
npm run start

# Docker info

docker run --rm -it --name react-test-case -p 8080:8080 react-docker:1.0.0-dev

# Arama

İş yoğunluğundan dolayı arama kısmı geliştirilmemiştir. Ancak fuzzy search ve filter yöntemi ile bu işlem gerçekleştirilebilir.

# Filtreleme

İş yoğunluğundan dolayı filtreleme kısmı geliştirilememiştir. Renk ve marka filtrelemeleri için örnek olarak key ve value değerlerini tutan bir object tanımlayıp daha sonra renklere göre mapping işlemi yapılır. Daha sonra yapılan mapping sonucu object içine kayıt edilir ve ekranda gösterilir : colorFilter[{key:2,value:’Sarı’]. Aynı işlemler marka için de gerçekleştirilir.

# Sepet

Sepet kısmı gerçekleştirilmiştir. Sadece silme işleminde gösterilen uyarı mesajı yoğunluktan dolayı eklenmemiştir.

# Sayfalama

Redux kullanılarak state mantığı ile sayfalama gerçekleştirilmiştir. Sadece sayfa numaraları için react-bootstrap Pagination componenti kullanılmıştır.

# Ürün ve sepet verisi

Veri modeli oluşturulmuştur ve local storage ile saklanmaktadır.

# Projede kullanılan araçlar

•	Vscode
•	Reactjs
•	Nodejs
•	Html
•	Css
•	React-bootstrap(Yalnızca pagination componenti için)
•	Docker(Containerization)
