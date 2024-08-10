document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior

          // Get the section class from the data-section attribute
          const sectionClass = this.getAttribute('data-section');

          // Find the first element with the class name
          const section = document.querySelector(`.${sectionClass}`);

          if (section) {
              // Scroll to the section
              section.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});
