// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It adds animation classes to elements when they come into view
// Use to add Animate.css animations to elements so they animate once they are on screen

// TO USE
// Add data-aos="fade-up" to HTML elements you wish to animate
// Example: <div data-aos="fade-up">This will fade in up when scrolled into view</div>

//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation classes
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          // Optional: Unobserve the element after animation to prevent re-animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Configuration options
      threshold: 0, // Trigger when at least 10% of the element is visible
      rootMargin: '0px', // No margin around the viewport
    }
  );

  // Get all elements with data-aos="fade-up"
  const allAnimatedElements = document.querySelectorAll('[data-aos="fade-up"]');

  // Add the observer to each element
  allAnimatedElements.forEach((element) => observer.observe(element));
});
