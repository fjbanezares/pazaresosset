document.addEventListener('DOMContentLoaded', function () {
    // --- Initialize Spanish as default ---
    document.querySelectorAll('.language').forEach(function (element) {
        element.style.display = 'none';
    });
    document.querySelectorAll('.spanish').forEach(function (element) {
        element.style.display = 'block';
    });
    const langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = 'spanish';

    // --- Language Selector ---
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            const selectedLanguage = this.value;
            document.querySelectorAll('.language').forEach(function (element) {
                element.style.display = 'none';
            });
            document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
                element.style.display = 'block';
            });

            const imageMap = {
                'spanish': 'comic_julio/comic_julio_espanol.png',
                'english': 'comic_julio/comic_julio_ingles.png',
                'italian': 'comic_julio/comic_julio_italiano.png',
                'chinese': 'comic_julio/comic_julio_chino.png',
                'arabic': 'comic_julio/comic_julio_arabe.png',
                'russian': 'comic_julio/comic_julio_ruso.png',
                'aleman': 'comic_julio/comic_julio_aleman.png',
                'frances': 'comic_julio/comic_julio_frances.png',
                'japones': 'comic_julio/comic_julio_japones.png',
                'portuges': 'comic_julio/comic_julio_portuges.png'
            };

            const spotifyMap = {
                'spanish': 'placeholder', // Update when available
                'english': 'placeholder',
                'italian': 'placeholder',
                'russian': 'placeholder',
                'chinese': 'placeholder',
                'arabic': 'placeholder',
                'aleman': 'placeholder',
                'frances': 'placeholder',
                'japones': 'placeholder',
                'portuges': 'placeholder'
            };

            const audioButtonTexts = {
                'spanish': 'Escuchar Música',
                'english': 'Listen to Music',
                'italian': 'Ascolta la Musica',
                'chinese': '听音乐',
                'arabic': 'استمع إلى الموسيقى',
                'russian': 'Слушать музыку',
                'aleman': 'Musik hören',
                'frances': 'Écouter la musique',
                'japones': '音楽を聴く',
                'portuges': 'Ouvir música'
            };

            const comicImage = document.getElementById('comic-image');
            if (comicImage) {
                comicImage.src = imageMap[selectedLanguage] || imageMap['spanish'];
            }
            const audioButtonText = document.getElementById('audio-button-text');
            if (audioButtonText) {
                audioButtonText.innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
            }

            // Update Spotify UI
            const spotifyId = spotifyMap[selectedLanguage] || spotifyMap['spanish'];
            const spotifyIframe = document.getElementById('spotify-iframe');
            const spotifyLink = document.getElementById('spotify-link');

            if (spotifyId !== 'placeholder') {
                if (spotifyIframe) {
                    spotifyIframe.src = `https://open.spotify.com/embed/album/${spotifyId}?utm_source=generator`;
                }
                if (spotifyLink) {
                    spotifyLink.href = `https://open.spotify.com/album/${spotifyId}`;
                }
            }
        });
    }

    // --- 1. Background Transition on Scroll (Thunder/Night theme) ---
    window.addEventListener('scroll', function () {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        // RGB(0,0,0) -> RGB(10, 15, 30) (Dark Blue Night)
        const r = Math.floor(scrollPercent * 10);
        const g = Math.floor(scrollPercent * 15);
        const b = Math.floor(scrollPercent * 30);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

    // --- 2. Scroll Reveal Animation for Stanzas ---
    const observerOptions = {
        threshold: 0.2
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stanza').forEach(stanza => {
        revealObserver.observe(stanza);
    });

    // --- 3. Canvas Effects (Thunder/Rain - IMPROVED VISIBILITY) ---
    const canvas = document.getElementById('effects-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Raindrop {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * -height;
                this.speed = Math.random() * 5 + 5;
                this.length = Math.random() * 20 + 10;
                this.alpha = Math.random() * 0.3 + 0.1;
            }

            update() {
                this.y += this.speed;
                if (this.y > height) {
                    this.reset();
                }
            }

            draw() {
                ctx.strokeStyle = `rgba(173, 216, 230, ${this.alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.stroke();
            }
        }

        const raindrops = [];
        for (let i = 0; i < 100; i++) {
            raindrops.push(new Raindrop());
        }

        let nextLightning = Date.now() + Math.random() * 5000 + 2000;
        let lightningOpacity = 0;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            // Draw Rain
            raindrops.forEach(rd => {
                rd.update();
                rd.draw();
            });

            // Simple Lightning effect
            if (Date.now() > nextLightning) {
                lightningOpacity = 0.3;
                nextLightning = Date.now() + Math.random() * 8000 + 3000;
            }

            if (lightningOpacity > 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${lightningOpacity})`;
                ctx.fillRect(0, 0, width, height);
                lightningOpacity -= 0.02;
            }

            requestAnimationFrame(animate);
        }
        animate();
    }
});
