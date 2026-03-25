document.addEventListener('DOMContentLoaded', function () {
    // --- Initialize Spanish as default ---
    document.querySelectorAll('.language').forEach(function (element) {
        element.style.display = 'none';
    });
    document.querySelectorAll('.spanish').forEach(function (element) {
        if (element.tagName.toLowerCase() === 'span') {
            element.style.display = 'inline-block';
        } else {
            element.style.display = 'block';
        }
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
                if (element.tagName.toLowerCase() === 'span') {
                    element.style.display = 'inline-block';
                } else {
                    element.style.display = 'block';
                }
            });

            if (selectedLanguage === 'arabic') {
                document.body.classList.add('arabic');
            } else {
                document.body.classList.remove('arabic');
            }

            // Re-observe stanzas after language change
            document.querySelectorAll('.stanza').forEach(stanza => {
                revealObserver.observe(stanza);
            });
        });
    }

    // --- Scroll Reveal Animation for Stanzas ---
    const observerOptions = { threshold: 0.15 };
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

    // --- Canvas Effects: Subtle dust motes / golden particles ---
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
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * -0.4 - 0.1;
                this.alpha = Math.random() * 0.4 + 0.1;
                this.glow = Math.random() * 8 + 3;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                if (this.y < -this.size) {
                    this.y = height + this.size;
                    this.x = Math.random() * width;
                }
            }
            draw() {
                ctx.shadowBlur = this.glow;
                ctx.shadowColor = `rgba(192, 160, 96, ${this.alpha})`;
                ctx.fillStyle = `rgba(192, 160, 96, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const particles = [];
        for (let i = 0; i < 35; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    }
});
