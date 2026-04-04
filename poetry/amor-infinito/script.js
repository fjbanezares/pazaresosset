document.addEventListener('DOMContentLoaded', function () {
  // --- Language Selector ---
  var langSelect = document.getElementById('language-select');

  function switchLanguage(selectedLanguage) {
    // Hide all language elements
    document.querySelectorAll('.language').forEach(function (el) {
      el.style.display = 'none';
    });

    // Show elements of the selected language
    document.querySelectorAll('.' + selectedLanguage).forEach(function (el) {
      if (el.tagName === 'DIV') {
        el.style.display = 'block';
      } else {
        el.style.display = 'inline';
      }
    });

    // Handle RTL for Arabic
    if (selectedLanguage === 'arabic') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }

  // Initialize: ensure Spanish is visible
  switchLanguage('spanish');
  if (langSelect) langSelect.value = 'spanish';

  // Listen for language changes
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      switchLanguage(this.value);
    });
  }

  // --- Scroll Reveal Animation ---
  try {
    var observerOptions = { threshold: 0.1 };
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
      });
    }, observerOptions);

    document.querySelectorAll('.stanza').forEach(function (stanza) {
      revealObserver.observe(stanza);
    });
  } catch (e) {
    document.querySelectorAll('.stanza').forEach(function (stanza) {
      stanza.classList.add('reveal');
    });
  }

  // --- Canvas Effects (Rose-Gold Divine Particles) ---
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
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = -Math.random() * 0.3 - 0.05; // gentle upward float
        this.alpha = Math.random() * 0.5 + 0.1;
        // Alternate between warm gold and rose tones
        var colors = ['255, 200, 100', '255, 180, 150', '255, 220, 180', '220, 180, 255'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      };
      Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.0008;
        if (this.alpha <= 0 || this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
      };
      Particle.prototype.draw = function () {
        ctx.fillStyle = 'rgba(' + this.color + ', ' + this.alpha + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      };

      var particles = [];
      for (var i = 0; i < 70; i++) particles.push(new Particle());

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
  } catch (e) {
    // Canvas effects are non-critical
  }
});
