// --- Language Toggle ---
const langBtn = document.getElementById('langBtn');
const langPicker = document.getElementById('langPicker');
const langText = document.getElementById('langText');
const currentFlag = document.getElementById('currentFlag');

langBtn.addEventListener('click', () => {
    langPicker.classList.toggle('active');
});

function updateLangUI(opt) {
    const lang = opt.getAttribute('data-value');
    const flag = opt.querySelector('span').innerText;
    const text = opt.innerText.replace(flag, '').trim();

    document.body.setAttribute('data-lang', lang);
    langText.innerText = text;
    currentFlag.innerText = flag;
    langPicker.classList.remove('active');
    localStorage.setItem('latido_verde_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) {
        langPicker.classList.remove('active');
    }
});

const savedLang = localStorage.getItem('latido_verde_lang');
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

// --- Particle Effects (Floating Leaves) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 30;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Leaf {
    constructor() {
        this.init();
    }

    init() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.3 + 0.05;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.02 - 0.01;
        this.wobble = Math.random() * 0.02;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        // Green palette
        const greens = [
            'rgba(76, 175, 80,',
            'rgba(129, 199, 132,',
            'rgba(165, 214, 167,',
            'rgba(200, 230, 201,',
            'rgba(255, 215, 0,'
        ];
        this.color = greens[Math.floor(Math.random() * greens.length)];
    }

    update() {
        this.x += this.speedX + Math.sin(Date.now() * this.wobble + this.wobbleOffset) * 0.3;
        this.y += this.speedY;
        this.angle += this.spin;

        if (this.y > canvas.height + 20) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
        }
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color + '0.6)';
        ctx.strokeStyle = this.color + '0.3)';
        ctx.lineWidth = 0.5;
        
        // Draw a simple leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(this.size * 0.8, -this.size * 0.3, 0, this.size);
        ctx.quadraticCurveTo(-this.size * 0.8, -this.size * 0.3, 0, -this.size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Leaf vein
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.lineTo(0, this.size);
        ctx.stroke();
        
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) particles.push(new Leaf());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

initParticles();
animate();
