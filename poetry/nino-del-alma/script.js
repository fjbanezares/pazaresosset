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
    langText.innerText = text; currentFlag.innerText = flag;
    langPicker.classList.remove('active');
    localStorage.setItem('nino_del_alma_lang', lang);
}
document.querySelectorAll('.lang-opt').forEach(opt => opt.addEventListener('click', () => updateLangUI(opt)));
window.addEventListener('click', (e) => { if (!langBtn.contains(e.target)) langPicker.classList.remove('active'); });
const savedLang = localStorage.getItem('nino_del_alma_lang');
if (savedLang) { const savedOpt = document.querySelector(`.lang-opt[data-value="${savedLang}"]`); if (savedOpt) updateLangUI(savedOpt); }

// --- Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Particle Effects (Mystical Golden Dust) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 45;
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

class GoldenDust {
    constructor() { this.init(); }
    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.4;
        this.baseOpacity = Math.random() * 0.3 + 0.05;
        this.opacity = this.baseOpacity;
        this.speedX = (Math.random() - 0.5) * 0.12;
        this.speedY = (Math.random() - 0.5) * 0.12 - 0.05;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.008;
        const colors = [
            'rgba(229,184,105,',  // warm gold
            'rgba(252,211,77,',   // light crescent gold
            'rgba(244,63,94,',    // crimson spark
            'rgba(148,163,184,',  // night cloud slate
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX + Math.sin(Date.now() * 0.0006 + this.pulseOffset) * 0.06;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.12;
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) { this.y = canvas.height + 10; this.x = Math.random() * canvas.width; }
        if (this.y > canvas.height + 10) { this.y = -10; this.x = Math.random() * canvas.width; }
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.opacity);
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color + '0.9)';
        ctx.shadowBlur = 10; ctx.shadowColor = this.color + '0.4)';
        ctx.beginPath(); ctx.arc(0, 0, this.size, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }
}
function initParticles() { particles = []; for (let i = 0; i < particleCount; i++) particles.push(new GoldenDust()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
initParticles(); animate();
