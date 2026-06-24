const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Recuperar tema salvo ou usar preferência do sistema
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  setTheme(initialTheme);
}

// Definir tema
function setTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    html.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Toggle tema
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

// Inicializar tema ao carregar a página
initializeTheme();

if (button && mobileNavbar) {
  button.addEventListener('click', function () {
    const isActive = mobileNavbar.classList.toggle('active');
    button.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', function () {
    if (mobileNavbar && button) {
      mobileNavbar.classList.remove('active');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('scroll', function () {
  if (!navbar) return;

  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
    return;
  }

  navbar.classList.remove('active');
});
