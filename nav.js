document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav').forEach(function (nav, index) {
    const links = nav.querySelector('.nav-links');
    if (!links || nav.querySelector('.nav-toggle')) return;

    const button = document.createElement('button');
    const menuId = links.id || 'nav-links-' + index;

    links.id = menuId;
    button.className = 'nav-toggle';
    button.type = 'button';
    button.setAttribute('aria-label', 'Navigation öffnen');
    button.setAttribute('aria-controls', menuId);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span></span>';

    button.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Navigation schließen' : 'Navigation öffnen');
    });

    links.addEventListener('click', function (event) {
      if (!event.target.closest('a')) return;
      nav.classList.remove('nav-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Navigation öffnen');
    });

    nav.appendChild(button);
  });
});
