
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    var navLinks = document.querySelectorAll('header nav ul li a');
  
    // Loop through each navigation link
    navLinks.forEach(function(link) {
      // Add click event listener to each link
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Get the target element (section) based on the href attribute
        var targetId = this.getAttribute('href').substring(1); // Remove the leading '#'
        var targetElement = document.getElementById(targetId);
        
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });