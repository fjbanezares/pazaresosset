
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

        class Spark {
            constructor() {
                this.reset();
                this.y = Math.random() * height;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.speedY = Math.random() * 0.8 + 0.2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.pulseOff = Math.random() * Math.PI * 2;
                this.hue = 40 + Math.random() * 20; // 황금색
            }

            update() {
                this.y -= this.speedY;
                this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
                if (this.y < -10) {
                    this.reset();
                }
            }

            draw() {
                const alpha = Math.abs(Math.sin(Date.now() * 0.002 + this.pulseOff)) * 0.8 + 0.2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${alpha})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = `hsla(${this.hue}, 100%, 50%, 1)`;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        const sparks = [];
        for (let i = 0; i < 60; i++) {
            sparks.push(new Spark());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            sparks.forEach(s => {
                s.update();
                s.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }
});
