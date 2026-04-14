document.addEventListener('DOMContentLoaded', function () {
  // --- Language Selector ---
  var langSelect = document.getElementById('language-select');

  function switchLanguage(selectedLanguage) {
    document.querySelectorAll('.language').forEach(function (el) {
      el.style.display = 'none';
    });

    document.querySelectorAll('.' + selectedLanguage).forEach(function (el) {
      if (el.tagName === 'DIV' || el.classList.contains('stanza')) {
        el.style.display = 'block';
      } else {
        el.style.display = 'inline';
      }
    });

    if (selectedLanguage === 'arabic' || selectedLanguage === 'hebrew') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // Persist selection
    localStorage.setItem('preferred_language', selectedLanguage);
  }

  // Init
  var savedLang = localStorage.getItem('preferred_language') || 'spanish';
  switchLanguage(savedLang);
  if (langSelect) langSelect.value = savedLang;

  if (langSelect) {
    langSelect.addEventListener('change', function () {
      switchLanguage(this.value);
    });
  }

  // --- Scroll Reveal ---
  try {
    var observerOptions = { threshold: 0.15 };
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.stanza').forEach(function (stanza) {
      revealObserver.observe(stanza);
    });
  } catch (e) {
    document.querySelectorAll('.stanza').forEach(function (s) { s.classList.add('reveal'); });
  }

  // --- Particle Effects (Mystical Pollen & Sparkles) ---
  try {
    var canvas = document.getElementById('effects-canvas');
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var width, height;

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      function Particle() { this.reset(); }
      Particle.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.5 + 0.1;
        var colors = ['255, 255, 255', '255, 200, 220', '200, 255, 200', '255, 255, 150'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      };
      Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.0005;
        if (this.alpha <= 0) this.reset();
      };
      Particle.prototype.draw = function () {
        ctx.fillStyle = 'rgba(' + this.color + ', ' + this.alpha + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      };

      var particles = [];
      for (var i = 0; i < 60; i++) particles.push(new Particle());

      function animate() {
        ctx.clearRect(0, 0, width, height);
        for (var j = 0; j < particles.length; j++) {
          particles[j].update();
          particles[j].draw();
        }
        requestAnimationFrame(animate);
      }
      animate();
    }
  } catch (e) {}
});
