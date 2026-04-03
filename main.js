document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  window.tlToggle = function(entry) {
    entry.classList.toggle('open');
  };

  const revealables = document.querySelectorAll('.reveal, .tl-entry');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});
  revealables.forEach(el => observer.observe(el));
  const triggers = document.querySelectorAll('.lightbox-trigger');
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');

  if (triggers.length && lightbox && lightboxImg && closeBtn) {
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const img = trigger.querySelector('img');
        const fullSrc = trigger.getAttribute('href');
        lightboxImg.src = fullSrc;
        lightboxImg.alt = img ? img.alt : '';
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
  }

});
