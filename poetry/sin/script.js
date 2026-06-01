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
    localStorage.setItem('sin_lang', lang);
}
document.querySelectorAll('.lang-opt').forEach(opt => opt.addEventListener('click', () => updateLangUI(opt)));
window.addEventListener('click', (e) => { if (!langBtn.contains(e.target)) langPicker.classList.remove('active'); });
const savedLang = localStorage.getItem('sin_lang');
if (savedLang) { const savedOpt = document.querySelector(`.lang-opt[data-value="${savedLang}"]`); if (savedOpt) updateLangUI(savedOpt); }

// --- Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Particle Effects (Broken Glass & Golden Dust) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 55;
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

class GoldenDust {
    constructor() { this.init(); }
    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.baseOpacity = Math.random() * 0.35 + 0.05;
        this.opacity = this.baseOpacity;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15 - 0.08;
        this.pulseSpeed = Math.random() * 0.02 + 0.008;
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.01;
        const colors = [
            'rgba(212,168,83,',   // gold
            'rgba(240,208,128,',  // warm dawn
            'rgba(200,180,220,',  // violet mist
            'rgba(255,240,200,',  // cream light
            'rgba(180,140,100,',  // amber
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Some particles are glass shards (angular)
        this.isShard = Math.random() < 0.15;
    }
    update() {
        this.x += this.speedX + Math.sin(Date.now() * 0.0008 + this.pulseOffset) * 0.08;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.pulseSpeed + this.pulseOffset) * 0.15;
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
        if (this.isShard) {
            // Draw angular glass shard
            ctx.fillStyle = 'rgba(200,220,255,0.6)';
            ctx.shadowBlur = 8; ctx.shadowColor = 'rgba(200,220,255,0.4)';
            ctx.beginPath();
            ctx.moveTo(0, -this.size * 2);
            ctx.lineTo(this.size, this.size);
            ctx.lineTo(-this.size * 0.5, this.size * 0.5);
            ctx.closePath();
            ctx.fill();
        } else {
            // Draw round golden particle
            ctx.fillStyle = this.color + '0.9)';
            ctx.shadowBlur = 15; ctx.shadowColor = this.color + '0.5)';
            ctx.beginPath(); ctx.arc(0, 0, this.size, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    }
}
function initParticles() { particles = []; for (let i = 0; i < particleCount; i++) particles.push(new GoldenDust()); }
function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
initParticles(); animate();
