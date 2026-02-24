const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');

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
