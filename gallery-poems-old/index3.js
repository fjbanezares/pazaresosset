document.addEventListener("DOMContentLoaded", function() {
    var gallery = document.getElementById("gallery");
    var filters = document.querySelectorAll(".filter");
  
    function filterElements(className) {
      var elements = gallery.querySelectorAll("div");
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
  
        if (element.classList.contains(className)) {
          element.classList.add("animation");
          element.style.display = "block";
        } else {
          element.classList.remove("animation");
          element.style.display = "none";
        }
      }
  
      gallery.style.opacity = 1;
    }
  
    for (var i = 0; i < filters.length; i++) {
      var filter = filters[i];
  
      filter.addEventListener("click", function() {
        var selectedClass = this.getAttribute("data-rel");
  
        gallery.style.opacity = 0.1;
        setTimeout(function() {
          filterElements(selectedClass);
        }, 100);
      });
    }
  });
  