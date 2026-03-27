let baslik =document.title;
window.onblur=() =>
document.title="Geri Gel :(";
window.onfocus= () =>
document.title=baslik;

function copyEmail() {
  const email = "seninmail@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email kopyalandı!");
  });
}


