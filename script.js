document.addEventListener("DOMContentLoaded", function () {
  const joinBtn = document.getElementById("joinBtn");

  joinBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    const secim = prompt(
      "Hangi sunucuya katılmak istiyorsun?\n\n1️⃣ Kod Sunucusu\n2️⃣ Owo Sunucusu\n\n(1 veya 2 yaz)"
    );

    if (secim === "1") {
      window.open("https://discord.gg/HNMpeecPdB", "_blank");
    } else if (secim === "2") {
      window.open("https://discord.gg/owohunt", "_blank");
    } else {
      alert("Geçersiz seçim yaptın.");
    }
  });
});
