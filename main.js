document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const setupTimelines = () => {
    const mobile = window.innerWidth <= 720;
    document.querySelectorAll('.tl-entry').forEach((entry, index) => {
      if (mobile) {
        entry.classList.toggle('open', index === 0);
      } else {
        entry.classList.add('open');
      }
    });
  };

  window.tlToggle = function(entry) {
    if (window.innerWidth > 720) return;
    entry.classList.toggle('open');
  };

  setupTimelines();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupTimelines, 120);
  });
});
