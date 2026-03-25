document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('language-select');

    // Mantenemos la lógica normal para el selector del idioma en la cabecera
    languageSelect.addEventListener('change', function () {
        const lang = this.value;

        document.querySelectorAll('.language').forEach(el => {
            el.style.display = 'none';
        });

        // Seleccionamos los elementos del idioma elegido. Ojo con NO forzar "block" en spans.
        document.querySelectorAll('.language.' + lang).forEach(el => {
            if (el.tagName.toLowerCase() === 'span') {
                el.style.display = 'inline-block';
            } else {
                el.style.display = 'block';
            }
        });

        // Configuración RTL para árabe
        if (lang === 'arabic') {
            document.body.classList.add('arabic');
        } else {
            document.body.classList.remove('arabic');
        }

        // Trigger reveal manually as elements were initially hidden
        setTimeout(revealStanzas, 50);
    });

    // Fuerza a que se ejecute la lógica de idioma con el seleccionado inicial
    languageSelect.dispatchEvent(new Event('change'));

    // Intersection Observer for stanza reveal
    const revealStanzas = () => {
        const activeLangContainer = document.querySelector(`.language.${languageSelect.value}:not(span)`);
        if (!activeLangContainer) return;
        
        const stanzas = activeLangContainer.querySelectorAll('.stanza');
        
        stanzas.forEach((stanza, index) => {
            if (stanza.getBoundingClientRect().top < window.innerHeight - 50) {
                setTimeout(() => {
                    stanza.classList.add('reveal');
                }, index * 100); // staggered reveal
            }
        });
    };

    window.addEventListener('scroll', revealStanzas);
    revealStanzas();

    // Canvas Background Effect - Subtle honey-like golden drops floating
    const canvas = document.getElementById('effects-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class HoneyDrop {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedY = Math.random() * 0.5 + 0.1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.glow = Math.random() * 10 + 5;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;

            if (this.y < -this.size) {
                this.y = canvas.height + this.size;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.shadowBlur = this.glow;
            ctx.shadowColor = `rgba(255, 215, 0, ${this.alpha})`;
            ctx.fillStyle = `rgba(255, 223, 0, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }

    const drops = [];
    for (let i = 0; i < 40; i++) {
        drops.push(new HoneyDrop());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drops.forEach(drop => {
            drop.update();
            drop.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
});
