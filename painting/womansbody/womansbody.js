document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');

  function setLanguage(lang) {
    // Normalize language code
    const normalizedLang = lang.split('-')[0].toLowerCase();

    // Store in localStorage
    localStorage.setItem('selectedLanguage', normalizedLang);

    // Update visibility of elements
    const allLangs = ['es', 'en', 'it', 'ru', 'zh', 'ar', 'de', 'fr', 'ja', 'pt'];
    const elements = document.querySelectorAll('.language');

    elements.forEach(el => {
      if (el.classList.contains(normalizedLang)) {
        // Handle display type based on element tag
        const tag = el.tagName.toLowerCase();
        if (tag === 'span') {
          el.style.display = 'inline-block';
        } else if (tag === 'div' || tag === 'p') {
          el.style.display = 'block';
        } else {
          el.style.display = 'initial';
        }
      } else {
        el.style.display = 'none';
      }
    });

    // Handle RTL for Arabic
    if (normalizedLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = normalizedLang;
    }
  }

  // Load saved language or default to browser language / Spanish
  const savedLang = localStorage.getItem('selectedLanguage') || 'es';
  languageSelect.value = savedLang;
  setLanguage(savedLang);

  languageSelect.addEventListener('change', function (e) {
    setLanguage(e.target.value);
  });
});
