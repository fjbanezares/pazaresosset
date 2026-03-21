
document.addEventListener('DOMContentLoaded', function () {
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            const selectedLanguage = this.value;
            if (selectedLanguage === 'arabic') {
                document.body.classList.add('rtl');
            } else {
                document.body.classList.remove('rtl');
            }
            // Ocultar primero
            document.querySelectorAll('.language').forEach(function (element) {
                element.style.display = 'none';
            });
            // Mostrar los seleccionados respetando su modo de display
            document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
                if (element.tagName.toLowerCase() === 'span') {
                    element.style.display = 'inline-block';
                } else {
                    element.style.display = 'block';
                }
            });
        });
    }

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

        class Mote {
            constructor() {
                this.reset();
                this.y = Math.random() * height;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 1.5 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.1;
                this.pulseOff = Math.random() * Math.PI * 2;
                this.hue = 30 + Math.random() * 20; // warm dust colors
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(Date.now()*0.001 + this.pulseOff) * 0.2;
                if (this.y < -10 || this.y > height + 10 || this.x < -10 || this.x > width + 10) {
                    this.reset();
                    if(Math.random() > 0.5) { this.y = -5; }
                }
            }

            draw() {
                const currentAlpha = this.alpha * (Math.abs(Math.sin(Date.now() * 0.001 + this.pulseOff)) * 0.5 + 0.5);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${currentAlpha})`;
                ctx.fill();
            }
        }

        const motes = [];
        for (let i = 0; i < 80; i++) {
            motes.push(new Mote());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            motes.forEach(m => {
                m.update();
                m.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }
});
