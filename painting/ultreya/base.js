function setLanguage(lang) {
  // Normalize language code
  const langMap = {
    'spanish': 'es', 'english': 'en', 'italian': 'it', 'russian': 'ru',
    'chinese': 'zh', 'arabic': 'ar', 'german': 'de', 'french': 'fr',
    'japanese': 'ja', 'portuguese': 'pt', 'aleman': 'de', 'frances': 'fr',
    'japones': 'ja', 'portugues': 'pt'
  };

  const targetLang = langMap[lang] || lang;
  localStorage.setItem('selectedLanguage', targetLang);

  const elements = document.querySelectorAll('.language');
  elements.forEach(el => {
    if (el.classList.contains(targetLang)) {
      // Use empty string to revert to default (often inline for spans) or block if needed
      el.style.display = el.tagName.toLowerCase() === 'span' ? 'inline' : 'block';
      el.classList.add('animate-fade');
      // For Arabic, set RTL
      if (targetLang === 'ar') document.body.style.direction = 'rtl';
      else document.body.style.direction = 'ltr';
    } else {
      el.style.display = 'none';
      el.classList.remove('animate-fade');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language-select');
  let savedLang = localStorage.getItem('selectedLanguage') || 'es';

  // Handle migration from old 'spanish' etc to 'es'
  if (savedLang === 'spanish') savedLang = 'es';
  if (savedLang.length > 2 && savedLang !== 'portuguese' && savedLang !== 'russian') {
    // Basic mapping if needed, but let's just default to es if it's weird
  }

  languageSelect.value = savedLang;
  setLanguage(savedLang);

  languageSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
});
