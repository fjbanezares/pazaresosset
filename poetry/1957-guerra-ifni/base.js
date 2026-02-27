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

      // Comic identical for all languages (visual storytelling without text bubbles)
      const globalComicPath = 'comic/comic_1957.png';
      const imageMap = {
        'spanish': globalComicPath,
        'english': globalComicPath,
        'italian': globalComicPath,
        'chinese': globalComicPath,
        'arabic': globalComicPath,
        'russian': globalComicPath,
        'aleman': globalComicPath,
        'frances': globalComicPath,
        'japones': globalComicPath,
        'portuges': globalComicPath
      };

      const spotifyMap = {
        'spanish': 'placeholder',
        'english': 'placeholder',
        'italian': 'placeholder',
        'russian': 'placeholder',
        'chinese': 'placeholder',
        'arabic': 'placeholder',
        'aleman': 'placeholder',
        'frances': 'placeholder',
        'japones': 'placeholder',
        'portuges': 'placeholder'
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

      const comicImage = document.getElementById('comic-image');
      if (comicImage) {
        comicImage.src = imageMap[selectedLanguage] || globalComicPath;
      }
      const audioButtonText = document.getElementById('audio-button-text');
      if (audioButtonText) {
        audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
      }

      // Update Spotify UI
      const spotifyId = spotifyMap[selectedLanguage] || spotifyMap['spanish'];
      const spotifyIframe = document.getElementById('spotify-iframe');
      const spotifyLink = document.getElementById('spotify-link');

      if (spotifyId !== 'placeholder') {
        if (spotifyIframe) {
          spotifyIframe.src = `https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator`;
          spotifyIframe.style.display = 'block';
        }
        if (spotifyLink) {
          spotifyLink.href = `https://open.spotify.com/album/${spotifyId}`;
          spotifyLink.style.display = 'inline-flex';
        }
      } else {
        if (spotifyIframe) {
          spotifyIframe.style.display = 'none';
        }
      }
    });
  }

  // --- 1. Background Transition on Scroll ---
  window.addEventListener('scroll', function () {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Subtle tint change to darker
    const r = Math.floor(scrollPercent * 10);
    const g = Math.floor(scrollPercent * 10);
    const b = Math.floor(scrollPercent * 10);

    // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 
  });

  // --- 2. Scroll Reveal Animation for Stanzas ---
  const observerOptions = {
    threshold: 0.2
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

  // --- 3. Canvas Effects (Subtle dust/sand for Ifni war mood) ---
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
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.color = `rgba(200, 150, 100, ${this.alpha})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }

      draw() {
        ctx.fillStyle = this.color;
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
