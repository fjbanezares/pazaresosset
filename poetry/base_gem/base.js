// $(".buttonAudio").click(function pepito(){
//   alert("me pulsase")
//   var audio = new Audio("ifni.mp3");
//       audio.play();
//     })

function pepito() {
  var audio = new Audio("twilight.mp3");
  audio.play();
  alert("audio playing");
}

//document.querySelector(".buttonAudio").addEventListener("click", pepito);


document.addEventListener('DOMContentLoaded', function () {
  // --- Initialize Spanish as default ---
  document.querySelectorAll('.language').forEach(function (element) {
    element.style.display = 'none';
  });
  document.querySelectorAll('.spanish').forEach(function (element) {
    element.style.display = 'block';
  });
  document.getElementById('language-select').value = 'spanish';
  // -------------------------------------

  document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;

    // Hide all language elements
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });

    // Show selected language elements
    document.querySelectorAll('.' + selectedLanguage).forEach(function (element) {
      element.style.display = 'block';
    });

    // --- Update Multimedia based on language ---
    const imageMap = {
      'spanish': 'comic_placer_soledad/comic_spanish.png',
      'english': 'comic_placer_soledad/comic_english.png',
      'italian': 'comic_placer_soledad/comic_italian.png',
      'chinese': 'comic_placer_soledad/comic_chinese.png',
      'arabic': 'comic_placer_soledad/comic_arabic.png',
      'russian': 'comic_placer_soledad/comic_russian.png'
    };

    const audioButtonTexts = {
      'spanish': 'Escuchar Música',
      'english': 'Listen to Music',
      'italian': 'Ascolta la Musica',
      'chinese': '听音乐',
      'arabic': 'استمع إلى الموسيقى',
      'russian': 'Слушать музыку'
    };

    const audioLinks = {
      'spanish': '#',
      'english': '#',
      'italian': '#',
      'chinese': '#',
      'arabic': '#',
      'russian': '#'
    };

    document.getElementById('comic-image').src = imageMap[selectedLanguage] || imageMap['spanish'];
    document.getElementById('audio-button-text').innerText = audioButtonTexts[selectedLanguage] || audioButtonTexts['spanish'];
    document.getElementById('audio-button').href = audioLinks[selectedLanguage] || '#';
    // ------------------------------------------
  });

  ////
  // Obtiene todas las imágenes con la clase 'zoom-image'
  var zoomImages = document.querySelectorAll('.zoom-image');

  // Recorre todas las imágenes
  zoomImages.forEach(function (image) {
    // Variable para controlar el estado del zoom
    var isZoomed = false;

    // Función para realizar el zoom en la imagen
    function zoomImage() {
      if (isZoomed) {
        image.style.transform = 'scale(1)';
        isZoomed = false;
      } else {
        image.style.transform = 'scale(1.5)';
        isZoomed = true;
      }
    }

    // Asigna el evento touchstart (toque) a la imagen
    image.addEventListener('touchstart', function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del evento touchstart
      zoomImage(); // Realiza el zoom en la imagen

      // Establece un temporizador para reducir el zoom después de 3 segundos
      setTimeout(function () {
        zoomImage(); // Reduce el zoom en la imagen después de 3 segundos
      }, 3000);
    });
  });

  ////


});

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('language-select').addEventListener('change', function () {
//     // Hide all descriptions
//     document.querySelectorAll('.language-desc').forEach(function (element) {
//       element.style.display = 'none';
//     });

//     // Show selected language description
//     document.getElementById(this.value + '-desc').style.display = 'block';
//   });
// });
