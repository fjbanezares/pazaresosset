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

  // --- Filter Dropdown Logic ---
  const filterBtn = document.getElementById('filter-dropdown-btn');
  const filterMenu = document.getElementById('filter-menu');
  const filterOptions = document.querySelectorAll('.filter-option');
  let activeFilters = [];

  // Toggle dropdown
  if (filterBtn) {
    filterBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      filterMenu.classList.toggle('show');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', function () {
    if (filterMenu) filterMenu.classList.remove('show');
  });

  // Filtering Logic
  filterOptions.forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.stopPropagation();
      const val = opt.getAttribute('data-filter');

      if (val === '*') {
        activeFilters = []; // Select All
        filterOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        iso.arrange({ filter: '*' });
      } else {
        const index = activeFilters.indexOf(val);
        if (index > -1) {
          activeFilters.splice(index, 1);
          opt.classList.remove('active');
        } else {
          activeFilters.push(val);
          opt.classList.add('active');
        }

        // Uncheck "All"
        document.querySelector('.filter-option[data-filter="*"]').classList.remove('active');

        // If nothing selected, go back to '*'
        if (activeFilters.length === 0) {
          iso.arrange({ filter: '*' });
          document.querySelector('.filter-option[data-filter="*"]').classList.add('active');
        } else {
          iso.arrange({ filter: activeFilters.join('') });
        }
      }
    });
  });

  // Init "Todo" as active
  const allOption = document.querySelector('.filter-option[data-filter="*"]');
  if (allOption) allOption.classList.add('active');


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
