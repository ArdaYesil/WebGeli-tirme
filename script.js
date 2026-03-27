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


