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



