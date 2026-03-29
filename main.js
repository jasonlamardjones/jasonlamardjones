// ── Navigation ──────────────────────────────────────────

(function () {
  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = links.classList.contains('open') ? 'rotate(45deg) translate(4px, 4.5px)' : '';
      spans[1].style.opacity   = links.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = links.classList.contains('open') ? 'rotate(-45deg) translate(4px, -4.5px)' : '';
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Scroll fade-up animations ────────────────────────────

(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
})();

// ── Timeline toggle ──────────────────────────────────────

function tlToggle(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.tl-entry.open').forEach(e => e.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}
