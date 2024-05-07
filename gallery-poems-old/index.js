//////////// OR

// $(document).ready(function () {
//   var selectedCategories = [];

//   $(".filter").click(function () {
//     var category = $(this).data('rel');

//     // Add or remove the category from the selectedCategories array
//     var index = selectedCategories.indexOf(category);
//     if (index === -1) {
//       selectedCategories.push(category);
//       // Change the background color of the button to indicate it's selected
//       $(this).css('background-color', 'gray');
//     } else {
//       selectedCategories.splice(index, 1);
//       // Change the background color of the button back to its original color
//       $(this).css('background-color', '');
//     }

//     // Hide all the images
//     $("#gallery .pics").hide();

//     // Show the images that have a class that is in the selectedCategories array
//     selectedCategories.forEach(function (category) {
//       $("#gallery .pics." + category).show();
//     });
//   });


// });

/////////////////////////////////////// AND
// $(document).ready(function () {
//   var selectedCategories = [];

//   $(".filter").click(function () {
//     var category = $(this).data('rel');

//     // Add or remove the category from the selectedCategories array
//     var index = selectedCategories.indexOf(category);
//     if (index === -1) {
//       selectedCategories.push(category);
//       // Change the background color of the button to indicate it's selected
//       $(this).css('background-color', 'gray');
//     } else {
//       selectedCategories.splice(index, 1);
//       // Change the background color of the button back to its original color
//       $(this).css('background-color', '');
//     }

//     // Hide all the images
//     $("#gallery .pics").hide();

//     // Show the images that have a class that is in the selectedCategories array
//     $("#gallery .pics").each(function () {
//       var showImage = true;
//       for (var i = 0; i < selectedCategories.length; i++) {
//         if (!$(this).hasClass(selectedCategories[i])) {
//           showImage = false;
//           break;
//         }
//       }
//       if (showImage) {
//         $(this).show();
//       }
//     });
//   });
// });
/////

// document.addEventListener('DOMContentLoaded', function () {
//   var selectedCategories = [];

//   document.querySelectorAll('.filter').forEach(function (button) {
//     button.addEventListener('click', function () {
//       var category = this.getAttribute('data-rel');

//       var index = selectedCategories.indexOf(category);
//       if (index === -1) {
//         selectedCategories.push(category);
//         this.style.backgroundColor = 'gray';
//       } else {
//         selectedCategories.splice(index, 1);
//         this.style.backgroundColor = '';
//       }

//       document.querySelectorAll('#gallery .pics').forEach(function (pic) {
//         pic.style.display = 'none';
//       });

//       selectedCategories.forEach(function (category) {
//         document.querySelectorAll("#gallery .pics." + category).forEach(function (pic) {
//           pic.style.display = 'block';
//         });
//       });
//     });
//   });

//   document.querySelector('#resetButton').addEventListener('click', function () {
//     selectedCategories = [];
//     document.querySelectorAll('.filter').forEach(function (button) {
//       button.style.backgroundColor = '';
//     });
//     document.querySelectorAll('#gallery .pics').forEach(function (pic) {
//       pic.style.display = 'block';
//     });
//   });
// });

/////////////

// document.addEventListener('DOMContentLoaded', function () {
//   var selectedCategories = [];

//   document.querySelectorAll('.filter').forEach(function (button) {
//     button.addEventListener('click', function () {
//       var category = this.getAttribute('data-rel');

//       var index = selectedCategories.indexOf(category);
//       if (index === -1) {
//         selectedCategories.push(category);
//         this.style.backgroundColor = 'gray';
//       } else {
//         selectedCategories.splice(index, 1);
//         this.style.backgroundColor = '';
//       }

//       document.querySelectorAll('#gallery .pics').forEach(function (pic) {
//         var picClasses = pic.className.split(' ');
//         if (selectedCategories.every(val => picClasses.includes(val))) {
//           pic.style.display = 'block';
//         } else {
//           pic.style.display = 'none';
//         }
//       });
//     });
//   });

//   document.querySelector('#resetButton').addEventListener('click', function () {
//     selectedCategories = [];
//     document.querySelectorAll('.filter').forEach(function (button) {
//       button.style.backgroundColor = '';
//     });
//     document.querySelectorAll('#gallery .pics').forEach(function (pic) {
//       pic.style.display = 'block';
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var selectedCategories = [];

//   document.querySelector('#categorySelect').addEventListener('change', function (event) {
//     var category = event.target.value;

//     // Add or remove the category from the selectedCategories array
//     var index = selectedCategories.indexOf(category);
//     if (index === -1) {
//       selectedCategories.push(category);
//     } else {
//       selectedCategories.splice(index, 1);
//     }

//     // Hide all the images
//     var pics = document.querySelectorAll('#gallery .pics');
//     pics.forEach(function (pic) {
//       pic.style.display = 'none';
//     });

//     // Show the images that have a class that is in the selectedCategories array
//     selectedCategories.forEach(function (category) {
//       var picsToShow = document.querySelectorAll('#gallery .pics.' + category);
//       picsToShow.forEach(function (pic) {
//         pic.style.display = 'block';
//       });
//     });
//   });

//   document.querySelector('#resetButton').addEventListener('click', function () {
//     selectedCategories = [];

//     // Reset the select element
//     document.querySelector('#categorySelect').selectedIndex = 0;

//     // Show all the images
//     var pics = document.querySelectorAll('#gallery .pics');
//     pics.forEach(function (pic) {
//       pic.style.display = 'block';
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   var selectedCategories = [];

//   var categorySelect = document.getElementById('categorySelect');
//   categorySelect.addEventListener('change', function () {
//     // Reset the selectedCategories array
//     selectedCategories = [];

//     // Get all the selected options
//     var selectedOptions = categorySelect.querySelectorAll('option:checked');

//     // Add the value of each selected option to the selectedCategories array
//     selectedOptions.forEach(function (option) {
//       selectedCategories.push(option.value);
//     });

//     // Hide all the images
//     var images = document.querySelectorAll('#gallery .pics');
//     images.forEach(function (image) {
//       image.style.display = 'none';
//     });

//     // Show the images that have all the classes in the selectedCategories array
//     images.forEach(function (image) {
//       var showImage = selectedCategories.every(function (category) {
//         return image.classList.contains(category);
//       });

//       if (showImage) {
//         image.style.display = 'block';
//       }
//     });
//   });

//   var resetButton = document.getElementById('resetButton');
//   resetButton.addEventListener('click', function () {
//     // Reset the selectedCategories array
//     selectedCategories = [];

//     // Deselect all the options
//     var options = categorySelect.querySelectorAll('option');
//     options.forEach(function (option) {
//       option.selected = false;
//     });

//     // Show all the images
//     var images = document.querySelectorAll('#gallery .pics');
//     images.forEach(function (image) {
//       image.style.display = 'block';
//     });
//   });
// });


// $(function () {
//     var selectedClass = "";

//     $(".filter").click(function(){
//       selectedClass = $(this).attr("data-rel");

//       $("#gallery").fadeTo(100, 0.1);

//       $("#gallery div")
//         .not("."+selectedClass)
//         .fadeOut()
//         .removeClass('animation');

//       setTimeout(function() {
//         $("."+selectedClass)
//           .fadeIn()
//           .addClass('animation');

//         $("#gallery").fadeTo(300, 1);
//       }, 300);
//     });
//   });


document.addEventListener('DOMContentLoaded', function () {
  var selectedCategories = [];

  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (filter) {
    filter.addEventListener('change', function () {
      var category = this.value;

      // Add or remove the category from the selectedCategories array
      var index = selectedCategories.indexOf(category);
      if (index === -1) {
        selectedCategories.push(category);
      } else {
        selectedCategories.splice(index, 1);
      }

      // Hide all the images
      var images = document.querySelectorAll('#gallery .pics');
      images.forEach(function (image) {
        image.style.display = 'none';
      });

      // Show the images that have all the classes in the selectedCategories array
      images.forEach(function (image) {
        var showImage = selectedCategories.every(function (category) {
          return image.classList.contains(category);
        });

        if (showImage) {
          image.style.display = 'block';
        }
      });
    });
  });

  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function () {
    // Reset the selectedCategories array
    selectedCategories = [];

    // Deselect all the checkboxes
    filters.forEach(function (filter) {
      filter.checked = false;
    });

    // Show all the images
    var images = document.querySelectorAll('#gallery .pics');
    images.forEach(function (image) {
      image.style.display = 'block';
    });
  });
});





// $(function() {
// var selectedClass = "";
// $(".filter").click(function(){
// selectedClass = $(this).attr("data-rel");
// $("#gallery").fadeTo(100, 0.1);
// $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
// setTimeout(function() {
// $("."+selectedClass).fadeIn().addClass('animation');
// $("#gallery").fadeTo(300, 1);
// }, 300);
// });
// });
