// --- Language Toggle ---
const langBtn = document.getElementById('langBtn');
const langPicker = document.getElementById('langPicker');
const langText = document.getElementById('langText');
const currentFlag = document.getElementById('currentFlag');

langBtn.addEventListener('click', () => langPicker.classList.toggle('active'));

function updateLangUI(opt) {
    const lang = opt.getAttribute('data-value');
    const flag = opt.querySelector('span').innerText;
    const text = opt.innerText.replace(flag, '').trim();
    document.body.setAttribute('data-lang', lang);
    langText.innerText = text;
    currentFlag.innerText = flag;
    langPicker.classList.remove('active');
    localStorage.setItem('amor_poesia_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) langPicker.classList.remove('active');
});

const savedLang = localStorage.getItem('amor_poesia_lang');
if (savedLang) {
    const savedOpt = document.querySelector(`.lang-opt[data-value="${savedLang}"]`);
    if (savedOpt) updateLangUI(savedOpt);
}

// --- Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Particle Effects (Falling Rose Petals) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 35;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class FallingPetal {
    constructor() { this.init(); }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = -20 - Math.random() * 100;
        this.size = Math.random() * 4 + 2;
        this.opacity = Math.random() * 0.3 + 0.05;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.wobble = Math.random() * 0.02;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        const colors = [
            'rgba(196, 112, 122,',   // Rose
            'rgba(212, 165, 116,',   // Gold-sepia
            'rgba(155, 126, 168,',   // Mauve
            'rgba(180, 80, 100,',    // Wine-rose
            'rgba(230, 200, 190,'    // Pale petal
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(Date.now() * this.wobble + this.wobbleOffset) * 0.3;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height + 20) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw petal shape
        ctx.fillStyle = this.color + '0.8)';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color + '0.3)';
        ctx.fill();

        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        const p = new FallingPetal();
        p.y = Math.random() * canvas.height; // start scattered
        particles.push(p);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

initParticles();
animate();
