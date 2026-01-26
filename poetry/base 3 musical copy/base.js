// Espera a que todo el contenido HTML de la página se haya cargado
document.addEventListener('DOMContentLoaded', function () {

  // --- INICIO: CÓDIGO PARA IDIOMA POR DEFECTO ---
  // Esta sección se asegura de que la página cargue en español

  // 1. Oculta todos los elementos 'english' (que el HTML original podría mostrar)
  document.querySelectorAll('.english').forEach(function (element) {
    element.style.display = 'none';
  });

  // 2. Muestra todos los elementos 'spanish'
  document.querySelectorAll('.spanish').forEach(function (element) {
    element.style.display = 'block';
  });

  // 3. Pone el menú <select> en la opción "Español"
  document.getElementById('language-select').value = 'spanish';

  // --- FIN: CÓDIGO PARA IDIOMA POR DEFECTO ---


  // --- INICIO: MANEJADOR DEL CAMBIO DE IDIOMA ---
  // Este código se ejecuta CADA VEZ que el usuario cambia el idioma en el <select>
  document.getElementById('language-select').addEventListener('change', function () {

    // 1. Oculta TODOS los elementos de idioma
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });

    // 2. Muestra SÓLO los elementos del idioma seleccionado
    // (Usa el 'value' del select, ej: "spanish", "english", etc.)
    document.querySelectorAll('.' + this.value).forEach(function (element) {
      element.style.display = 'block';
    });
  });
  // --- FIN: MANEJADOR DEL CAMBIO DE IDIOMA ---


  // --- INICIO: SCRIPT DE ZOOM PARA MÓVILES (TOUCH) ---
  // (Este código venía en tu HTML original, lo he movido aquí)
  var zoomImages = document.querySelectorAll('.zoom-image');

  zoomImages.forEach(function (image) {
    var isZoomed = false;

    function zoomImage() {
      if (isZoomed) {
        image.style.transform = 'scale(1)';
        isZoomed = false;
      } else {
        image.style.transform = 'scale(1.5)';
        isZoomed = true;
      }
    }

    // Al tocar la imagen
    image.addEventListener('touchstart', function (event) {
      event.preventDefault(); // Evita comportamientos extraños del navegador
      zoomImage(); // Aplica el zoom

      // Quita el zoom automáticamente después de 3 segundos
      setTimeout(function () {
        zoomImage();
      }, 3000);
    });
  });
  // --- FIN: SCRIPT DE ZOOM ---

});