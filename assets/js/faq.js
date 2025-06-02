// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqLinks = document.querySelectorAll('.card-link');

  // Add transition styles to collapse elements
  document.querySelectorAll('.collapse').forEach((collapse) => {
    collapse.style.transition = 'all 0.3s ease-in-out';
    collapse.style.maxHeight = '0';
    collapse.style.overflow = 'hidden';
  });

  // Add transition styles to icons
  document.querySelectorAll('.collapsed, .expanded').forEach((icon) => {
    icon.style.transition = 'all 0.3s ease-in-out';
  });

  faqLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the target collapse element
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Close all other FAQ items
      document.querySelectorAll('.collapse').forEach((collapse) => {
        if (collapse !== targetElement && collapse.classList.contains('show')) {
          // Set the height to the current height before transitioning
          collapse.style.maxHeight = collapse.scrollHeight + 'px';
          // Force a reflow
          collapse.offsetHeight;
          // Remove show class and set height to 0
          setTimeout(() => collapse.classList.remove('show'), 1000);
          collapse.style.maxHeight = '0';

          // Reset the plus/minus icon with transition
          const parentLink =
            collapse.previousElementSibling.querySelector('.card-link');
          const collapsedIcon = parentLink.querySelector('.collapsed');
          const expandedIcon = parentLink.querySelector('.expanded');
          collapsedIcon.style.opacity = '1';
          expandedIcon.style.opacity = '0';
          setTimeout(() => {
            collapsedIcon.style.display = 'block';
            expandedIcon.style.display = 'none';
          }, 300);
        }
      });

      // Toggle the clicked item
      if (targetElement.classList.contains('show')) {
        // If closing, set the height to current height first
        targetElement.style.maxHeight = targetElement.scrollHeight + 'px';
        // Force a reflow
        targetElement.offsetHeight;
        // Remove show class and set height to 0
        setTimeout(() => targetElement.classList.remove('show'), 1000);
        targetElement.style.maxHeight = '0';

        // Toggle icons
        const collapsedIcon = link.querySelector('.collapsed');
        const expandedIcon = link.querySelector('.expanded');
        collapsedIcon.style.opacity = '1';
        expandedIcon.style.opacity = '0';
        setTimeout(() => {
          collapsedIcon.style.display = 'block';
          expandedIcon.style.display = 'none';
        }, 300);
      } else {
        // If opening, add show class and set height to scrollHeight
        targetElement.classList.add('show');
        targetElement.style.maxHeight = targetElement.scrollHeight + 'px';

        // Toggle icons
        const collapsedIcon = link.querySelector('.collapsed');
        const expandedIcon = link.querySelector('.expanded');
        collapsedIcon.style.opacity = '0';
        expandedIcon.style.opacity = '1';
        setTimeout(() => {
          collapsedIcon.style.display = 'none';
          expandedIcon.style.display = 'block';
        }, 300);
      }
    });
  });
});
