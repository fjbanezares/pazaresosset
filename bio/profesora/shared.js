// Shared JS for La Profesora sub-chapters
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Navbar solidify on scroll
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 80
        ? 'rgba(5,5,5,0.95)'
        : 'linear-gradient(to bottom, rgba(0,0,0,0.95), transparent)';
});
