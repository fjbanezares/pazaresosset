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

      const imageMapOld = {
        'spanish': 'comic_soy_paz/soy_paz_spanish.png',
        'english': 'comic_soy_paz/soy_paz_english.png',
        'italian': 'comic_soy_paz/soy_paz_italian.png',
        'chinese': 'comic_soy_paz/soy_paz_chino.png',
        'arabic': 'comic_soy_paz/soy_paz_arabe.png',
        'russian': 'comic_soy_paz/soy_paz_russian.png',
        'aleman': 'comic_soy_paz/soy_paz_spanish.png', // Fallback
        'frances': 'comic_soy_paz/soy_paz_spanish.png',
        'japones': 'comic_soy_paz/soy_paz_spanish.png',
        'portuges': 'comic_soy_paz/soy_paz_spanish.png'
      };

      const imageMap = {
        'spanish': 'comic_soy_paz/comic_soy_paz_espanol.png',
        'english': 'comic_soy_paz/comic_soy_paz_ingles.png',
        'italian': 'comic_soy_paz/comic_soy_paz_italiano.png',
        'chinese': 'comic_soy_paz/comic_soy_paz_chino.png',
        'arabic': 'comic_soy_paz/comic_soy_paz_arabe.png',
        'russian': 'comic_soy_paz/comic_soy_paz_ruso.png',
        'aleman': 'comic_soy_paz/comic_soy_paz_aleman.png',
        'frances': 'comic_soy_paz/comic_soy_paz_frances.png',
        'japones': 'comic_soy_paz/comic_soy_paz_japones.png',
        'portuges': 'comic_soy_paz/comic_soy_paz_portuges.png'
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

      const comicImageOld = document.getElementById('comic-image-old');
      if (comicImageOld) {
        comicImageOld.src = imageMapOld[selectedLanguage] || imageMapOld['spanish'];
      }

      const comicImage = document.getElementById('comic-image');
      if (comicImage) {
        comicImage.src = imageMap[selectedLanguage] || imageMap['spanish'];
      }
      const audioButtonText = document.getElementById('audio-button-text');
      if (audioButtonText) {
        audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
      }

      // Spotify update logic will go here when links are provided
    });
  }

  // --- Scroll Reveal ---
  const observerOptions = { threshold: 0.1 };
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

  // --- Canvas Effects (Underwater/Bubbles) ---
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

    class Bubble {
      constructor() {
        this.reset();
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.oscillation = Math.random() * 2;
        this.oscTime = 0;
      }

      update() {
        this.y -= this.speed;
        this.oscTime += 0.05;
        this.x += Math.sin(this.oscTime) * this.oscillation;
        if (this.y < -this.size) {
          this.reset();
        }
      }

      draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    const bubbles = [];
    for (let i = 0; i < 40; i++) {
      bubbles.push(new Bubble());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Suttle Blueish overlay based on scroll
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      ctx.fillStyle = `rgba(0, 30, 60, ${0.1 + scrollPercent * 0.2})`;
      ctx.fillRect(0, 0, width, height);

      bubbles.forEach(b => {
        b.update();
        b.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }
});
