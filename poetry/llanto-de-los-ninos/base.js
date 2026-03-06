document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');
  const canvases = document.getElementById('effects-canvas');
  const ctx = canvases.getContext('2d');

  // Set Spanish as default
  setLanguage('spanish');

  languageSelect.addEventListener('change', function () {
    setLanguage(this.value);
  });

  function setLanguage(lang) {
    document.querySelectorAll('.language').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.language.' + lang).forEach(el => el.style.display = 'block');

    // Update audio button text based on language
    const audioText = document.getElementById('audio-button-text');
    const texts = {
      spanish: 'Escuchar Música',
      english: 'Listen to Music',
      italian: 'Ascolta la Musica',
      chinese: '听音乐',
      arabic: 'استمع إلى الموسيقى',
      russian: 'Слушать музыку',
      aleman: 'Musik hören',
      frances: 'Écouter de la musique',
      japones: '音楽を聴く',
      portuges: 'Ouvir Música'
    };
    if (audioText) audioText.innerText = texts[lang] || texts['spanish'];
  }

  // Scroll animations for stanzas
  const stanzas = document.querySelectorAll('.stanza');
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  stanzas.forEach(stanza => observer.observe(stanza));

  // Canvas Effects: Ethereal Floating Particles
  let width, height;
  function resize() {
    width = canvases.width = window.innerWidth;
    height = canvases.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
});
