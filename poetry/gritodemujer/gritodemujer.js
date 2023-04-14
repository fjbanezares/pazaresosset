// $(".buttonAudio").click(function pepito(){
//   alert("me pulsase")
//   var audio = new Audio("ifni.mp3");
//       audio.play();
//     })

function pepito() {
  var audio = new Audio("ifni.mp3");
     audio.play();
   alert("audio playing");}

document.querySelector(".buttonAudio").addEventListener("click", pepito);
