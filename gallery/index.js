document.addEventListener('DOMContentLoaded', function () {
  // Initialize Isotope
  var grid = document.querySelector('.gallery-grid');
  var iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    percentPosition: true
  });

  // Layout Isotope after each image loads
  imagesLoaded(grid).on('progress', function () {
    iso.layout();
  });

  // Filter functions
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filterValue = btn.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      // Update button state
      filterBtns.forEach(b => b.classList.remove('is-checked'));
      btn.classList.add('is-checked');
    });
  });

  // Language management
  const languageSelect = document.getElementById('languageSelect');

  function updateLanguage(language) {
    // Normalize language codes
    if (language === 'spanish') language = 'es';
    if (language === 'english') language = 'en';
    if (language === 'italian') language = 'it';
    // ... normalize others if they exist in old storage

    localStorage.setItem('selectedLanguage', language);
    const elements = document.querySelectorAll('[data-es]'); // Use existence of data-es as anchor

    elements.forEach(el => {
      const translation = el.getAttribute('data-' + language);
      if (translation) {
        el.textContent = translation;
      } else {
        // Fallback to Spanish or English if translation is missing
        el.textContent = el.getAttribute('data-es') || el.getAttribute('data-en') || el.textContent;
      }
    });
  }

  let savedLang = localStorage.getItem('selectedLanguage') || 'es';
  if (savedLang === 'spanish') savedLang = 'es';
  if (savedLang === 'english') savedLang = 'en';
  if (savedLang === 'italian') savedLang = 'it';

  languageSelect.value = savedLang;
  updateLanguage(savedLang);

  languageSelect.addEventListener('change', function (e) {
    updateLanguage(e.target.value);
  });
});
