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
    localStorage.setItem('poesia_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) langPicker.classList.remove('active');
});

const savedLang = localStorage.getItem('poesia_lang');
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

// --- Particle Effects (Cosmic Sparks) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 50;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class DivineSpark {
    constructor() { this.init(); }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = this.baseOpacity;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.pulse = Math.random() * 0.05;
        this.pulseOffset = Math.random() * Math.PI * 2;
        const colors = [
            'rgba(255, 215, 0,',   // Gold
            'rgba(138, 43, 226,',  // Violet
            'rgba(255, 0, 255,',   // Magenta
            'rgba(0, 255, 255,',   // Cyan
            'rgba(255, 255, 255,'  // White
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulse + this.pulseOffset) * 0.2;
        
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.fillStyle = this.color + '0.8)';
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color + '0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) particles.push(new DivineSpark());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

initParticles();
animate();
