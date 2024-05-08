
document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation links
  var navLinks = document.querySelectorAll('header nav ul li a');

  
  navLinks.forEach(function (link) {
   
    link.addEventListener('click', function (event) {
      event.preventDefault(); 

      
      var targetId = this.getAttribute('href').substring(1); // Remove the leading '#'
      var targetElement = document.getElementById(targetId);

      
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

//scroll blur

window.addEventListener('scroll', function () {

  var header = document.querySelector('header');
  header.style.backdropFilter = 'blur(' + (window.scrollY / 50) + 'px)';
  header.style.boxShadow = "0 2px 8px #A19FD5";
  if (window.scrollY < 110) {
    header.style.boxShadow = "none";

  }

});

