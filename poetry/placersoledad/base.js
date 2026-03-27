document.addEventListener('DOMContentLoaded', function () {
  // --- Initialize Spanish as default ---
  document.querySelectorAll('.language').forEach(function (element) {
    element.style.display = 'none';
  });
  document.querySelectorAll('.spanish').forEach(function (element) {
    element.style.display = 'block';
  });
  const langSelect = document.getElementById('language-select');
  if (langSelect) langSelect.value = 'spanish';

  // --- Language Selector ---
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      const selectedLanguage = this.value;
      document.querySelectorAll('.language').forEach(function (element) {
        element.style.display = 'none';
      });
      document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
        element.style.display = 'block';
      });

      const audioButtonTexts = {
        'spanish': 'Escuchar Música (ES)',
        'english': 'Listen to Music (EN)',
        'italian': 'Ascolta la Musica (IT)',
        'chinese': '听音乐 (ZH)',
        'arabic': 'استمع إلى الموسيقى (AR)',
        'russian': 'Слушать музыку (RU)',
        'aleman': 'Musik hören (DE)',
        'frances': 'Écouter la musique (FR)',
        'japones': '音楽を聴く (JA)',
        'portuges': 'Ouvir música (PT)',
        'ukrainian': 'Слухати музику (UK)'
      };

      const spotifyMapping = {
        'spanish': {
          'album_link': 'https://open.spotify.com/intl-es/album/6CYcCa7JLOUxMg73MkSnju?si=HLDmvAOcRc6jsxjGRy9uiA',
          'album_iframe': 'https://open.spotify.com/embed/album/6CYcCa7JLOUxMg73MkSnju?utm_source=generator'
        },
        'russian': {
          'album_link': 'https://open.spotify.com/album/1FOXBeSKtgwe0X8MUHTyFn?si=LfPYTipnSN-Bp2vwtqAe_Q',
          'album_iframe': 'https://open.spotify.com/embed/album/1FOXBeSKtgwe0X8MUHTyFn?utm_source=generator'
        }
      };

      const audioButtonText = document.getElementById('audio-button-text');
      if (audioButtonText) {
        audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
      }

      // Update Linktree or top Spotify link
      const spotifyLink = document.getElementById('spotify-link');
      if (spotifyLink) {
        spotifyLink.href = spotifyMapping[selectedLanguage]?.album_link || spotifyMapping['spanish'].album_link;
      }
    });
  }

  // --- Initial state ---
  const initialSpotifyLink = document.getElementById('spotify-link');
  if (initialSpotifyLink) initialSpotifyLink.href = 'https://open.spotify.com/intl-es/album/6CYcCa7JLOUxMg73MkSnju?si=HLDmvAOcRc6jsxjGRy9uiA';

  // --- Scroll Reveal Animation ---
  const observerOptions = { threshold: 0.1 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
  }, observerOptions);

  document.querySelectorAll('.stanza').forEach(stanza => revealObserver.observe(stanza));

  // --- Canvas Effects (Nature Dust) ---
  const canvas = document.getElementById('effects-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.5 ? '150, 255, 150' : '200, 255, 100'; // Nature Green/Yellow
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.001;
        if (this.alpha <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();
  }
});
