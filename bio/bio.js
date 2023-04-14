$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


$('.english').push({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

//document.getElementsByClassName('english')[0].style.display = 'block';

//document.getElementsByClassName('english')[0].style.display = 'none';
// for (let el of document.querySelectorAll('.english')) el.style.visibility = 'hidden';
// perfecto para aplicar a todo el documento
//si quiero aplicarlo solo al div donde esta el boton??

function hide(elem) {
    for (let el of elem.parentElement.querySelectorAll('.language')) el.style.display = 'none';
}

function setEnglishInDiv(elem) {
  for (let el of elem.parentElement.querySelectorAll('.language')) el.style.display = 'none';
  for (let el of elem.parentElement.querySelectorAll('.english.language')) el.style.display = 'block';
}

function setSpanishInDiv(elem) {
  for (let el of elem.parentElement.querySelectorAll('.language')) el.style.display = 'none';
  for (let el of elem.parentElement.querySelectorAll('.spanish.language')) el.style.display = 'block';
}


function doublehide(elem) {
    for (let el of elem.parentElement.parentElement.querySelectorAll('.language')) el.style.display = 'none';
}

function doublesetEnglishInDiv(elem) {
  for (let el of elem.parentElement.parentElement.querySelectorAll('.language')) el.style.display = 'none';
  for (let el of elem.parentElement.parentElement.querySelectorAll('.english.language')) el.style.display = 'block';
}

function doublesetSpanishInDiv(elem) {
  for (let el of elem.parentElement.parentElement.querySelectorAll('.language')) el.style.display = 'none';
  for (let el of elem.parentElement.parentElement.querySelectorAll('.spanish.language')) el.style.display = 'block';
}



function myFunction() {
  var x = document.getElementsByTagName("english");
  var y = document.getElementsByTagName("spanish");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (x.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
