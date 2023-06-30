document.getElementById('language-select').addEventListener('change', function () {
    changeLanguage(this.value);
});

function changeLanguage(lang) {
    var descriptions = document.querySelectorAll('[id^="description-"]');
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = 'none';
    }
    document.getElementById('description-' + lang).style.display = 'block';
}

// Inicializar la página con la descripción en español visible
changeLanguage('es');
