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

    // Update the dropdown value to match the visual state
    if (languageSelect) {
      languageSelect.value = targetLang;
    }
  }

  // Force Spanish as default if it's the first time or no preference is set
  const savedLang = localStorage.getItem('selectedLanguage') || 'es';
  setLanguage(savedLang);

  if (languageSelect) {
    languageSelect.addEventListener('change', function (e) {
      setLanguage(e.target.value);
    });
  }
});
