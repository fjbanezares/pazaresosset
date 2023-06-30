document.getElementById('language-select').addEventListener('change', function () {
    changeLanguage(this.value);
});

function changeLanguage(lang) {
    var descriptions = document.querySelectorAll('#artwork-description p');
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = 'none';
    }
    var selectedDescription = document.querySelector('#description-' + lang);
    selectedDescription.style.display = 'block';
    selectedDescription.style.height = '100px';
    selectedDescription.style.overflow = 'hidden';
    document.getElementById('expand-button').style.display = 'block';
}

document.getElementById('expand-button').addEventListener('click', function () {
    var selectedDescription = document.querySelector('#artwork-description p[style*="block"]');
    if (selectedDescription.style.height == '100px') {
        selectedDescription.style.height = 'auto';
        this.textContent = 'Contraer texto';
    } else {
        selectedDescription.style.height = '100px';
        this.textContent = 'Expandir texto';
    }
});

// Inicializar la página con la descripción en español visible
changeLanguage('es');
