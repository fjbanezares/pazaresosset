document.addEventListener('DOMContentLoaded', function () {
    // --- Language Selector Logic ---
    const langBtn = document.getElementById('langBtn');
    const langPicker = document.getElementById('langPicker');
    const langOpts = document.querySelectorAll('.lang-opt');
    const body = document.body;

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langPicker.classList.toggle('active');
        });
    }

    langOpts.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-value');
            const flag = opt.querySelector('span').innerText;
            const text = opt.innerText.replace(flag, '').trim();

            body.setAttribute('data-lang', lang);
            document.getElementById('currentFlag').innerText = flag;
            document.getElementById('langText').innerText = text;
            langPicker.classList.remove('active');

            // Update Album Covers if needed (optional here as they are managed via CSS display)
        });
    });

    document.addEventListener('click', () => {
        if (langPicker) langPicker.classList.remove('active');
    });

    // --- Intersection Observer for Reveal Animations ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Canvas Effects (Golden Dust) ---
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
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5 ? '212, 165, 116' : '255, 215, 0'; // Gold/Autumn Gold
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.alpha -= 0.001;

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
        for (let i = 0; i < 120; i++) {
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
