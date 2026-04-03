let baslik = document.title;
window.onblur = () =>
  document.title = "Geri Gel :(";
window.onfocus = () =>
  document.title = baslik;

function copyEmail() {
  const email = "[Yesilarda83@gmail.com]";
  navigator.clipboard.writeText(email).then(() => {
    alert("Email kopyalandı!");
  });
}

// Tema değiştirme (Dark/Light mode)
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById("theme-icon");
  if (document.body.classList.contains('dark-mode')) {
    // Karanlık moddaysak, güneş simgesini göster
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    // Aydınlık moddaysak, ay simgesini göster
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
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
});
