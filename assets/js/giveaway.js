document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const modal = document.getElementById('giveawayModal');
    if (modal) {
      modal.style.display = 'block';
      modal.classList.add('show');
      document.body.classList.add('modal-open'); // Prevent background scroll
      // Calculate scrollbar width and add padding
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = scrollbarWidth + 'px';
      }
      // Create and append the backdrop
      const backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      backdrop.id = 'giveaway-backdrop';
      document.body.appendChild(backdrop);
    }

    // Helper to close modal and remove backdrop
    function closeModal() {
      modal.style.display = 'none';
      modal.classList.remove('show');
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      const backdrop = document.getElementById('giveaway-backdrop');
      if (backdrop) backdrop.remove();
    }

    // Close modal on close button click
    const closeBtn = modal.querySelector('.close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    // Also close on clicking outside the modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }, 6000);
});
