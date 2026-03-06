document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const allLangs = document.querySelectorAll('.lang');

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;

        // Toggle visibility
        allLangs.forEach(el => {
            el.classList.remove('active');
            if (el.classList.contains(selectedLang)) {
                el.classList.add('active');
            }
        });

        // Handle RTL for Arabic
        if (selectedLang === 'ar') {
            document.body.classList.add('rtl-body');
        } else {
            document.body.classList.remove('rtl-body');
        }
    });

    // Check for stored language or default to ES
    const storedLang = languageSelect.value;
    if (storedLang) {
        languageSelect.dispatchEvent(new Event('change'));
    }
});
