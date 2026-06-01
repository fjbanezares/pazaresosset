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
    localStorage.setItem('atardeceres_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) langPicker.classList.remove('active');
});

const savedLang = localStorage.getItem('atardeceres_lang');
if (savedLang) {
    const savedOpt = document.querySelector(`.lang-opt[data-value="${savedLang}"]`);
    if (savedOpt) updateLangUI(savedOpt);
}

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Particles: Sequin Night & Golden Dust
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.init();
    }
    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random();
        this.color = Math.random() > 0.5 ? '#e2b04c' : '#ffffff'; // Gold or Sequin White
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        this.opacity += (Math.random() - 0.5) * 0.02;
        if (this.opacity < 0) this.opacity = 0;
        if (this.opacity > 1) this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();
