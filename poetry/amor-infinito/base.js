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
  document.getElementById('language-select').addEventListener('change', function () {
    // Hide all language elements
    document.querySelectorAll('.language').forEach(function (element) {
      element.style.display = 'none';
    });

    // Show selected language elements
    document.querySelectorAll('.' + this.value).forEach(function (element) {
      element.style.display = 'block';
    });
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
