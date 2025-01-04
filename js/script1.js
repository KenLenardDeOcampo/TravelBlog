const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const lightHeader = document.querySelector('header:first-child');
const navLinks = document.querySelectorAll('header nav a');
const lightFooter = document.querySelector('footer');


themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  lightHeader.classList.toggle('light-theme');
  lightFooter.classList.toggle('light-theme');

  // Toggle the light-theme class for each nav link
  navLinks.forEach(link => {
    link.classList.toggle('light-theme');
  });
});