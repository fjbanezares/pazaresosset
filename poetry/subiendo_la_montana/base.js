document.addEventListener('DOMContentLoaded', function () {
  // --- Initialize Spanish as default ---
  document.querySelectorAll('.language').forEach(function (element) {
    element.style.display = 'none';
  });
  document.querySelectorAll('.spanish').forEach(function (element) {
    element.style.display = 'block';
  });
  document.getElementById('language-select').value = 'spanish';

  // --- Language Selector ---
  document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });
    document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
      element.style.display = 'block';
    });

    const imageMap = {
      'spanish': 'comic_subiendo/comic_subiendo_la_montana_espanol.png',
      'english': 'comic_subiendo/comic_subiendo_la_montana_ingles.png',
      'italian': 'comic_subiendo/comic_subiendo_la_montana_italiano.png',
      'chinese': 'comic_subiendo/comic_subiendo_la_montana_chino.png',
      'arabic': 'comic_subiendo/comic_subiendo_la_montana_arabe.png',
      'russian': 'comic_subiendo/comic_subiendo_la_montana_ruso.png',
      'aleman': 'comic_subiendo/comic_subiendo_la_montana_aleman.png',
      'frances': 'comic_subiendo/comic_subiendo_la_montana_frances.png',
      'japones': 'comic_subiendo/comic_subiendo_la_montana_japones.png',
      'portuges': 'comic_subiendo/comic_subiendo_la_montana_portuges.png'
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
      comicImage.src = imageMap[selectedLanguage] || imageMap['spanish'];
    }
    const audioButtonText = document.getElementById('audio-button-text');
    if (audioButtonText) {
      audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
    }
  });

  // --- 1. Background Transition on Scroll (MORE VISIBLE) ---
  window.addEventListener('scroll', function () {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // From Black to a clearer Deep Blue/Gold
    // RGB(0,0,0) -> RGB(60, 40, 20)
    const r = Math.floor(scrollPercent * 60);
    const g = Math.floor(scrollPercent * 40);
    const b = Math.floor(scrollPercent * 20);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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

  // --- 3. Canvas Effects (Spiderwebs and Vibrations - IMPROVED VISIBILITY) ---
  const canvas = document.getElementById('effects-canvas');
  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor(type) {
      this.type = type; // 'web' or 'vibration'
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.alpha = 0;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

      if (this.type === 'web') {
        this.alpha = (1 - scrollPercent) * 0.3;
      } else {
        this.alpha = scrollPercent * 0.4;
        this.speedX += Math.sin(Date.now() * 0.002 + this.x) * 0.02;
      }

      if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
        this.reset();
      }
    }

    draw() {
      if (this.alpha <= 0) return;

      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();

      if (this.type === 'web') {
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 0.5;
        // Draw a small cross-like web part
        ctx.moveTo(this.x - 10, this.y - 10);
        ctx.lineTo(this.x + 10, this.y + 10);
        ctx.moveTo(this.x + 10, this.y - 10);
        ctx.lineTo(this.x - 10, this.y + 10);
      } else {
        ctx.strokeStyle = '#ffd700'; // Gold
        ctx.lineWidth = 1;
        // Draw a wave-like line
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        ctx.arc(this.x, this.y, 10, 0, Math.PI * (scrollPercent || 0.1));
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  const particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push(new Particle('web'));
    particles.push(new Particle('vibration'));
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
});
