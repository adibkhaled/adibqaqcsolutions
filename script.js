// Extracted from index.html
// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Contact form submit
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#00c853';
    form.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      btn.style.background = '';
    }, 3000);
  }, 1000);
});
