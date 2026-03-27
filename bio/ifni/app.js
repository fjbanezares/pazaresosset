document.addEventListener('DOMContentLoaded', function () {
  const ALL_LANGS = ['spanish','english','russian','ukrainian','italian','chinese','arabic','aleman','frances','japones','portuges'];

  function setLang(lang) {
    // Hide all inline lang spans
    document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
    // Show selected language inline spans
    document.querySelectorAll('.lang.' + lang).forEach(el => el.style.display = 'inline');
    // Handle block-level language containers (bio, poem narrative)
    document.querySelectorAll('.lang-block').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang-block.' + lang).forEach(el => el.style.display = 'block');
  }

  setLang('spanish');
  const sel = document.getElementById('language-select');
  if (sel) {
    sel.value = 'spanish';
    sel.addEventListener('change', function () { setLang(this.value); });
  }

  // --- Scroll Reveal ---
  setTimeout(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('reveal'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.bio-block').forEach(b => obs.observe(b));
  }, 200);
});
