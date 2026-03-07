document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');

  // Set default language to Spanish
  languageSelect.value = 'spanish';
  setLanguage('spanish');

  languageSelect.addEventListener('change', function () {
    setLanguage(this.value);
  });

  function setLanguage(lang) {
    // Hide all language elements
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });

    // Show elements for selected language
    document.querySelectorAll('.language.' + lang).forEach(function (element) {
      if (element.tagName === 'SPAN') {
        element.style.display = 'inline-block';
      } else {
        element.style.display = 'block';
      }
    });

    // Handle RTL for Arabic
    if (lang === 'arabic') {
      document.body.style.direction = 'rtl';
    } else {
      document.body.style.direction = 'ltr';
    }
  }

  // Star Background Generation
  const starsContainer = document.getElementById('stars-container');
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    // Random position and size
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    starsContainer.appendChild(star);
  }

  // Animation reveal on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }, observerOptions);

  // Targets for animation could be added here if needed
});
