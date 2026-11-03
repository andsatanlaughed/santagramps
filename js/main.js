// Santa GRAMPS — minimal site JS
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  // The open-menu look lives in css/styles.css (.main-nav.is-open), so
  // resizing back to desktop never leaves stale inline styles behind.
  if (toggle && nav) {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Dated events carry data-ends. Until then the top bar shows; afterwards the
  // event swaps to its data-when="past" copy, drops its booking links and
  // moves below the upcoming ones (.is-past), so it stays up as a past appearance.
  const now = Date.now();
  document.querySelectorAll('[data-ends]').forEach((el) => {
    const over = now > Date.parse(el.dataset.ends);
    if (el.classList.contains('event-bar')) {
      el.hidden = over;
      return;
    }
    el.classList.toggle('is-past', over);
    el.querySelectorAll('[data-when]').forEach((part) => {
      part.hidden = (part.dataset.when === 'past') !== over;
    });
    if (over) {
      el.querySelectorAll('a[data-booking]').forEach((a) => a.removeAttribute('href'));
    }
  });
});
