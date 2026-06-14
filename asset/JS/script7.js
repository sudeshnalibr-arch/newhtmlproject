document.addEventListener('DOMContentLoaded', () => {
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');

  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.accordion-item');
      const isAlreadyActive = currentItem.classList.contains('active');

      // OPTIONAL: Close all other open accordion items first (Solo Mode)
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        // Reset all icons to chevron-down
        const icon = item.querySelector('.accordion-trigger i');
        if (icon) {
          icon.className = 'fa-solid fa-chevron-down';
        }
      });

      // Toggle the clicked item
      if (!isAlreadyActive) {
        currentItem.classList.add('active');
        // Switch icon to chevron-up
        trigger.querySelector('i').className = 'fa-solid fa-chevron-up';
      } else {
        currentItem.classList.remove('active');
        // Switch icon back to chevron-down
        trigger.querySelector('i').className = 'fa-solid fa-chevron-down';
      }
    });
  });
});