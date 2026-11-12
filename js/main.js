// ===== Dust Busst — Shared JS =====

// ---- Mobile nav toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
    // Close on link click
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  // ---- Navbar scroll effect (only on pages with .navbar-transparent) ----
  const navbar = document.querySelector('.navbar');
  if (navbar && navbar.classList.contains('navbar-transparent')) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Fade-in on scroll ----
  const faders = document.querySelectorAll('.fade-in');
  if (faders.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    faders.forEach(el => io.observe(el));
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasActive = item.classList.contains('active');
      // Close all
      document.querySelectorAll('.faq-item.active').forEach(i => i.classList.remove('active'));
      if (!wasActive) item.classList.add('active');
    });
  });

  // ---- Active nav link highlight ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('font-bold');
    }
  });
});
