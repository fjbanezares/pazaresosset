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
    localStorage.setItem('madres_buscadoras_lang', lang);
}

document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.addEventListener('click', () => updateLangUI(opt));
});

window.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target)) {
        langPicker.classList.remove('active');
    }
});

const savedLang = localStorage.getItem('madres_buscadoras_lang');
if (savedLang) {
    const savedOpt = document.querySelector(`.lang-opt[data-value="${savedLang}"]`);
    if (savedOpt) updateLangUI(savedOpt);
}

// --- Scroll Reveal ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal, .stanza').forEach(el => observer.observe(el));

// --- Particle Effects (Floating Light Sparks) ---
const canvas = document.getElementById('effects-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 45; // Más partículas para crear una atmósfera rica

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Spark {
    constructor() {
        this.init(true);
    }

    init(firstStart = false) {
        this.x = Math.random() * canvas.width;
        this.y = firstStart ? Math.random() * canvas.height : canvas.height + 20;
        this.size = Math.random() * 5 + 1.5; // Tamaños variados
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = -(Math.random() * 0.6 + 0.3); // Flotando hacia ARRIBA
        this.baseOpacity = Math.random() * 0.4 + 0.15;
        this.opacity = this.baseOpacity;
        this.flickerSpeed = Math.random() * 0.015 + 0.005;
        this.flickerOffset = Math.random() * Math.PI * 2;
        this.wobble = Math.random() * 0.008 + 0.003;
        this.wobbleOffset = Math.random() * Math.PI * 2;
        
        // Paleta de colores cálida y brillante (Velitas / Estrellas doradas)
        const warmColors = [
            'rgba(255, 179, 0,',   // Oro intenso
            'rgba(255, 215, 0,',   // Amarillo dorado
            'rgba(255, 224, 130,',  // Ámbar suave
            'rgba(255, 248, 225,',  // Blanco cálido
            'rgba(255, 112, 67,'    // Naranja amanecer sutil
        ];
        this.color = warmColors[Math.floor(Math.random() * warmColors.length)];
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(Date.now() * this.wobble + this.wobbleOffset) * 0.35;
        
        // Simular parpadeo de vela
        this.opacity = this.baseOpacity + Math.sin(Date.now() * this.flickerSpeed + this.flickerOffset) * 0.12;
        if (this.opacity < 0.02) this.opacity = 0.02;

        // Resetear al salir de la pantalla por arriba
        if (this.y < -20) {
            this.init(false);
        }
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Crear un brillo radial de aureola para simular luz premium
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 2);
        grad.addColorStop(0, this.color + this.opacity + ')');
        grad.addColorStop(0.3, this.color + (this.opacity * 0.4) + ')');
        grad.addColorStop(1, this.color + '0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Dibujar el núcleo de la chispa
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (this.opacity * 0.95) + ')';
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Spark());
    }
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
