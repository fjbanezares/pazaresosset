document.addEventListener('DOMContentLoaded', function () {
  const langSelect = document.getElementById('language-select');
  const initialLang = 'spanish';

  function updateLanguage(selectedLanguage) {
    // Hide all language elements
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });

    // Show selected language elements
    document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
      // Logic for grid elements (album cards)
      if (element.classList.contains('col-lg-3') || element.classList.contains('col-md-6')) {
        element.style.display = 'block';
      } else {
        element.style.display = 'block';
      }
    });
  }

  // Initialize with Spanish
  if (langSelect) {
    langSelect.value = initialLang;
    updateLanguage(initialLang);

    langSelect.addEventListener('change', function () {
      updateLanguage(this.value);
    });
  }

  // --- Scroll Reveal Animation for Stanzas ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, observerOptions);

  // Observe stanzas
  document.querySelectorAll('.stanza').forEach(stanza => {
    revealObserver.observe(stanza);
  });

  // Observe individual lines in poem-text if stanzas are not used
  document.querySelectorAll('.poem-text p').forEach(p => {
    revealObserver.observe(p);
  });
});
