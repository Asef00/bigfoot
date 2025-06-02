// Preloader animation handler
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  // Function to hide preloader with Animate.css
  const hidePreloader = () => {
    if (preloader) {
      // Add Animate.css classes for fade out
      preloader.classList.add('animate__animated', 'animate__fadeOut');

      // Remove preloader from DOM after animation completes
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000); // Animate.css fadeOut duration is 1s
    }
  };

  // Hide preloader when page is fully loaded
  window.addEventListener('load', () => {
    // Add a small delay to ensure smooth transition
    setTimeout(hidePreloader, 1000);
  });
});
