
function toggleLanguage(language) {
  if (language === "en") {
    document.getElementById("content-en").style.display = "block";
    document.getElementById("content-lt").style.display = "none";
    document.getElementById("content-ru").style.display = "none";
    localStorage.setItem("selectedLanguage", "en");
  } else if (language === "lt") {
    document.getElementById("content-en").style.display = "none";
    document.getElementById("content-lt").style.display = "block";
    document.getElementById("content-ru").style.display = "none";
    localStorage.setItem("selectedLanguage", "lt");
  } else if (language === "ru") {
    document.getElementById("content-en").style.display = "none";
    document.getElementById("content-lt").style.display = "none";
    document.getElementById("content-ru").style.display = "block";
    localStorage.setItem("selectedLanguage", "ru");
  }

  if (language === "en") {
    document.getElementById("navAboutId").innerHTML =
      '<a href="./index.html">About</a>';
    document.getElementById("navServiceId").innerHTML =
      '<a href="./service.html">Services</a>';
    document.getElementById("navNewsId").innerHTML =
      '<a href="./news.html">News</a>';
    document.getElementById("navGalleryId").innerHTML =
      '<a href="./gallery.html">Gallery</a>';
    document.getElementById("navContactsId").innerHTML =
      '<a href="./contacts.html">Contacts</a>';
  } else if (language === "lt") {
    document.getElementById("navAboutId").innerHTML =
      '<a href="./index.html">Apie</a>';
    document.getElementById("navServiceId").innerHTML =
      '<a href="./service.html">Paslaugos</a>';
    document.getElementById("navNewsId").innerHTML =
      '<a href="./news.html">Naujienos</a>';
    document.getElementById("navGalleryId").innerHTML =
      '<a href="./gallery.html">Galerija</a>';
    document.getElementById("navContactsId").innerHTML =
      '<a href="./contacts.html">Kontaktai</a>';
  } else if (language === "ru") {
    document.getElementById("navAboutId").innerHTML =
      '<a href="./index.html">О нас</a>';
    document.getElementById("navServiceId").innerHTML =
      '<a href="./service.html">Услуги</a>';
    document.getElementById("navNewsId").innerHTML =
      '<a href="./news.html">Новости</a>';
    document.getElementById("navGalleryId").innerHTML =
      '<a href="./gallery.html">Галерея</a>';
    document.getElementById("navContactsId").innerHTML =
      '<a href="./contacts.html">Контакты</a>';
  }
}

function initLanguage() {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
    toggleLanguage(selectedLanguage);
  } else {

    toggleLanguage("en");
  }
}
document.addEventListener("DOMContentLoaded", initLanguage);
