const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const nav = document.querySelector('header nav');
const sections = document.querySelectorAll('.section');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';
});

menuOverlay.addEventListener('click', () => {
  nav.classList.remove('active');
  menuOverlay.style.display = 'none';
});

document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 1;
    if (isVisible) {
      section.classList.add('active');
    }
  });
});
