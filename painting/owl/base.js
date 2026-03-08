document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');

  function setLanguage(lang) {
    const normalizedLang = lang.split('-')[0].toLowerCase();

    // Proactively set Spanish if no valid language is selected or if explicitly requested
    const targetLang = normalizedLang || 'es';
    localStorage.setItem('selectedLanguage', targetLang);

    const elements = document.querySelectorAll('.language');

    elements.forEach(el => {
      if (el.classList.contains(targetLang)) {
        const tag = el.tagName.toLowerCase();
        if (tag === 'span') {
          el.style.display = 'inline-block';
        } else {
          el.style.display = 'block';
        }
      } else {
        el.style.display = 'none';
      }
    });

    if (targetLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = targetLang;
    }

    if (languageSelect) {
      languageSelect.value = targetLang;
    }
  }

  const savedLang = localStorage.getItem('selectedLanguage') || 'es';
  setLanguage(savedLang);

  if (languageSelect) {
    languageSelect.addEventListener('change', function (e) {
      setLanguage(e.target.value);
    });
  }

  // Zoom logic
  var zoomImages = document.querySelectorAll('.zoom-image');
  zoomImages.forEach(function (image) {
    var isZoomed = false;
    function zoomImage() {
      if (isZoomed) {
        image.style.transform = 'scale(1)';
        isZoomed = false;
      } else {
        image.style.transform = 'scale(1.5)';
        isZoomed = true;
      }
    }
    image.addEventListener('touchstart', function (event) {
      event.preventDefault();
      zoomImage();
      setTimeout(function () {
        zoomImage();
      }, 3000);
    });
  });
});
