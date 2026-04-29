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
    localStorage.setItem('optimismo_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) langPicker.classList.remove('active');
});

const savedLang = localStorage.getItem('optimismo_lang');
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

// --- Particle Effects (Rising Sparks / Golden Pollen) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 40;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Spark {
    constructor() { this.init(); }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = -(Math.random() * 0.6 + 0.2);
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulse = Math.random() * 0.02;
        this.pulseOffset = Math.random() * Math.PI * 2;
        const golds = [
            'rgba(255, 215, 0,',
            'rgba(255, 200, 50,',
            'rgba(255, 180, 0,',
            'rgba(255, 160, 60,',
            'rgba(255, 240, 150,'
        ];
        this.color = golds[Math.floor(Math.random() * golds.length)];
    }

    update() {
        this.x += this.speedX + Math.sin(Date.now() * 0.001 + this.pulseOffset) * 0.2;
        this.y += this.speedY;
        this.opacity += Math.sin(Date.now() * this.pulse + this.pulseOffset) * 0.003;
        if (this.y < -20) { this.y = canvas.height + 20; this.x = Math.random() * canvas.width; }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0.05, this.opacity);
        ctx.fillStyle = this.color + '0.8)';
        ctx.shadowColor = this.color + '0.4)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) particles.push(new Spark());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

initParticles();
animate();
