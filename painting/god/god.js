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

document.querySelector(".buttonAudio").addEventListener("click", pepito);


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
