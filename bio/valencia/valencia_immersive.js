document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');
    const stages = document.querySelectorAll('.stage');
    const main = document.querySelector('main');
    const langSelect = document.getElementById('language-select');

    // Scroll Observer
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const index = entry.target.dataset.index;
                const stageId = entry.target.dataset.stage;

                // Update Sections
                entry.target.classList.add('visible');

                // Update Dots
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');

                // Update Stages
                stages.forEach(stage => stage.classList.remove('active'));
                const activeStage = document.getElementById(`stage-${stageId}`);
                if (activeStage) activeStage.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Dot Navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.dataset.index;
            const targetView = sections[index];
            targetView.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Language Switching
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const transTable = {
            'english': 'en',
            'spanish': 'es',
            'italian': 'it',
            'chinese': 'zh',
            'arabic': 'ar'
        };

        document.querySelectorAll('.lang-content').forEach(el => {
            el.style.display = 'none';
        });

        document.querySelectorAll(`.lang-${lang}`).forEach(el => {
            el.style.display = 'block';
        });

        // Direction adjustment for Arabic
        if (lang === 'arabic') {
            document.body.style.direction = 'rtl';
        } else {
            document.body.style.direction = 'ltr';
        }
    });

    // Initial Language setup (default Spanish or English based on user preference)
    // For now, let's trigger the change to show Spanish if available
    langSelect.dispatchEvent(new Event('change'));

    // Subtle parallax effect on cards
    main.addEventListener('scroll', () => {
        const scrolled = main.scrollTop;
        document.querySelectorAll('.content-card').forEach(card => {
            const speed = 0.05;
            const rect = card.getBoundingClientRect();
            const yPos = -(rect.top * speed);
            card.style.transform = `translateY(${yPos}px)`;
        });
    });
});
