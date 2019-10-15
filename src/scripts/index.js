const SHOW_PAGE_CLASS = 'page--container_show';

const pageNavigationButtons = [...document.querySelectorAll('.page-btn')];

pageNavigationButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    const pageToRedirect = btn.getAttribute('data-go-to');

    document.querySelectorAll(`.${SHOW_PAGE_CLASS}`).forEach(page => page.classList.remove(SHOW_PAGE_CLASS));
    document.querySelector(`#${pageToRedirect}`).classList.add(SHOW_PAGE_CLASS);
  }),
);

// Username page
const usernameField = document.querySelector('#username--field');
usernameField.addEventListener('blur', e => {
  Game.playerName = e.target.value;
  document.querySelectorAll('.username-heading').forEach(h => (h.textContent = `${h.textContent}, ${Game.playerName}`));
});
