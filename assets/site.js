// Enhance the native menu with scroll locking and keyboard focus management.
const menu = document.querySelector('.s-mobile-menu');

if (menu) {
  const toggle = menu.querySelector('summary');
  const background = [...document.querySelectorAll('main, .s-footer, .s-name, .s-navlinks')];
  const update = () => {
    toggle.setAttribute('aria-expanded', String(menu.open));
    document.body.classList.toggle('menu-open', menu.open);
    background.forEach(element => { element.inert = menu.open; });
  };
  const close = (restoreFocus = false) => {
    menu.open = false;
    update();
    if (restoreFocus) toggle.focus();
  };

  menu.addEventListener('toggle', update);
  menu.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      close();
      const target = document.getElementById(link.hash.slice(1));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
      }
    });
  });
  menu.addEventListener('keydown', event => {
    if (!menu.open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close(true);
    } else if (event.key === 'Tab') {
      const controls = [toggle, ...menu.querySelectorAll('nav a')];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });
  matchMedia('(min-width: 701px)').addEventListener('change', event => {
    if (event.matches) close();
  });
  update();
}
