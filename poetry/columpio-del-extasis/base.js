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

      const imageMap = {
        'spanish': 'comic_escstasy/comic_espanol.png',
        'english': 'comic_escstasy/comic_ingles.png',
        'italian': 'comic_escstasy/comic_italiano.png',
        'chinese': 'comic_escstasy/comic_chino.png',
        'arabic': 'comic_escstasy/comic_arabe.png',
        'russian': 'comic_escstasy/comic_ruso.png',
        'aleman': 'comic_escstasy/comic_aleman.png',
        'frances': 'comic_escstasy/comic_frances.png',
        'japones': 'comic_escstasy/comic_japones.png',
        'portuges': 'comic_escstasy/comic_portuges.png'
      };

      const audioButtonTexts = {
        'spanish': 'Escuchar Música',
        'english': 'Listen to Music',
        'italian': 'Ascolta la Musica',
        'chinese': '听音乐',
        'arabic': 'استمع إلى الموسيقى',
        'russian': 'Слушать музыку',
        'aleman': 'Musik hören',
        'frances': 'Écouter la musique',
        'japones': '音楽を聴く',
        'portuges': 'Ouvir música'
      };

      const spotifyMapping = {
        'spanish': {
          'album_link': 'https://open.spotify.com/intl-es/album/7EbYxl2hFKbFuWyjYlgnsh?si=cSaetHupSPijqDtQpjDwzQ',
          'album_iframe': 'https://open.spotify.com/embed/album/7EbYxl2hFKbFuWyjYlgnsh?utm_source=generator'
        }
        // Other languages will fallback to Spanish for now
      };

      const comicImage = document.getElementById('comic-image');
      if (comicImage && imageMap[selectedLanguage]) {
        comicImage.src = imageMap[selectedLanguage];
        comicImage.style.display = 'block';
      }
      const audioButtonText = document.getElementById('audio-button-text');
      if (audioButtonText) {
        audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
      }

      // Update Spotify link and iframe
      const spotifyLink = document.getElementById('spotify-link');
      const spotifyIframe = document.getElementById('spotify-iframe');
      const spotifyPlaceholder = document.getElementById('spotify-placeholder');
      
      const spotifyData = spotifyMapping[selectedLanguage] || spotifyMapping['spanish'];
      
      if (spotifyLink) {
        spotifyLink.href = spotifyData.album_link;
      }
      
      if (spotifyIframe) {
        spotifyIframe.src = spotifyData.album_iframe;
        spotifyIframe.style.display = 'block';
        if (spotifyPlaceholder) spotifyPlaceholder.style.display = 'none';
      }
    });
  }

  // --- Initial Spotify state ---
  const initialSpotifyData = {
    'album_link': 'https://open.spotify.com/intl-es/album/7EbYxl2hFKbFuWyjYlgnsh?si=cSaetHupSPijqDtQpjDwzQ',
    'album_iframe': 'https://open.spotify.com/embed/album/7EbYxl2hFKbFuWyjYlgnsh?utm_source=generator'
  };
  const initialSpotifyLink = document.getElementById('spotify-link');
  const initialSpotifyIframe = document.getElementById('spotify-iframe');
  const initialSpotifyPlaceholder = document.getElementById('spotify-placeholder');
  
  if (initialSpotifyLink) initialSpotifyLink.href = initialSpotifyData.album_link;
  if (initialSpotifyIframe) {
    initialSpotifyIframe.src = initialSpotifyData.album_iframe;
    initialSpotifyIframe.style.display = 'block';
    if (initialSpotifyPlaceholder) initialSpotifyPlaceholder.style.display = 'none';
  }

  // --- 1. Background Transition on Scroll (Sunset to Cosmic) ---
  window.addEventListener('scroll', function () {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Darkened overlay transition
    const r = Math.floor(scrollPercent * 20);
    const g = Math.floor(scrollPercent * 10);
    const b = Math.floor(scrollPercent * 40);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  // --- 2. Scroll Reveal Animation for Stanzas ---
  const observerOptions = {
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stanza').forEach(stanza => {
    revealObserver.observe(stanza);
  });

  // --- 3. Canvas Effects (Golden Cosmic Dust) ---
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
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '255, 215, 0' : '255, 165, 0'; // Gold or Orange
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.002;

        if (this.alpha <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }
    animate();
  }
});
