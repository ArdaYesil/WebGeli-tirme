let baslik =document.title;
window.onblur=() =>
document.title="Geri Gel :(";
window.onfocus= () =>
document.title=baslik;
// Butonu ve mesaj elementini seçiyoruz
const buton = document.getElementById('kopyalaButon');
const mesaj = document.getElementById('mesaj');

// Kopyalanmasını istediğin Gmail adresin
const gmailAdresi = "seninadın@gmail.com";

buton.addEventListener('click', () => {
    // Kopyalama işlemini başlatan komut
    navigator.clipboard.writeText(gmailAdresi).then(() => {
        // İşlem başarılıysa burası çalışır
        mesaj.style.display = 'inline';
        
        // 2 saniye sonra "Kopyalandı" yazısını geri gizleyelim
        setTimeout(() => {
            mesaj.style.display = 'none';
        }, 2000);
        
        console.log("E-posta başarıyla kopyalandı!");
    }).catch(err => {
        // Bir hata oluşursa burası çalışır
        console.error("Kopyalama başarısız oldu: ", err);
    });
});



