document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  // Add transition styles
  navbarCollapse.style.transition = 'all 0.3s ease-in-out';
  navbarCollapse.style.maxHeight = '0';
  navbarCollapse.style.overflow = 'hidden';

  navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('collapsed');

    if (navbarCollapse.classList.contains('show')) {
      // If closing, set height to current height first
      navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
      // Force a reflow
      navbarCollapse.offsetHeight;
      // Remove show class and set height to 0
      setTimeout(() => {
        navbarCollapse.classList.remove('show');
      }, 500);
      navbarCollapse.style.maxHeight = '0';
    } else {
      // If opening, add show class and set height to scrollHeight
      navbarCollapse.classList.add('show');
      navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
    }
  });

  // Close navbar when clicking outside
  document.addEventListener('click', (e) => {
    if (
      !navbarToggler.contains(e.target) &&
      !navbarCollapse.contains(e.target)
    ) {
      if (navbarCollapse.classList.contains('show')) {
        // Set height to current height before transitioning
        navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
        // Force a reflow
        navbarCollapse.offsetHeight;
        // Remove show class and set height to 0
        setTimeout(() => {
          navbarCollapse.classList.remove('show');
        }, 500);
        navbarCollapse.style.maxHeight = '0';
        navbarToggler.classList.add('collapsed');
      }
    }
  });

  // Close navbar when clicking on a nav link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        // Set height to current height before transitioning
        navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
        // Force a reflow
        navbarCollapse.offsetHeight;
        // Remove show class and set height to 0
        navbarCollapse.classList.remove('show');
        navbarCollapse.style.maxHeight = '0';
        navbarToggler.classList.add('collapsed');
      }
    });
  });
});
