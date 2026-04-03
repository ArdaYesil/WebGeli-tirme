let baslik =document.title;
window.onblur=() =>
document.title="Geri Gel :(";
window.onfocus= () =>
document.title=baslik;

function copyEmail() {
  const email = "yesilarda83@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email kopyalandı!");
  });
}


const apiKey = "66E34E3FCE0A2BCD77AB23C16F9F39BC";
const steamID = "76561199184319290";

fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamID}&include_appinfo=true`)
.then(res => res.json())
.then(data => {

  const games = data.response.games;

  const cs = games.find(game => game.appid === 730);

  if(cs){
    const hours = (cs.playtime_forever / 60).toFixed(1);
    document.getElementById("cs-hours").innerText =
      "CS2 Oynama Süresi: " + hours + " saat";
  } else {
    document.getElementById("cs-hours").innerText =
      "CS bulunamadı";
  }

});




// Tema değiştirme (Dark/Light mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById("theme-icon");
    if (document.body.classList.contains('dark-mode')) {
        // Karanlık moddaysak, geri dönmek için güneş simgesini göster
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        // Aydınlık moddaysak, karanlık moda geçmek için ay simgesini göster
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Sayfa yüklendiğinde önceki seçimi uygula
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById("theme-icon");
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
});
