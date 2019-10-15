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
  document.querySelectorAll('.username-heading').forEach(h => {
    h.textContent = `${h.textContent} ${Game.playerName}`;
  });
});

// Game config page
const characBtns = document.querySelectorAll('.charac-btn');
characBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    characBtns.forEach(btn => {
      btn.removeAttribute('disabled');
      btn.textContent = 'Select';
    });

    btn.textContent = 'Selected';
    btn.setAttribute('disabled', true);

    Game.setPlayerType(btn.getAttribute('data-charac-type'));
  });
});

const ACTIVE_LEVEL_BTN_CLASS = 'level-btn--selected';
const levelBtns = document.querySelectorAll('.level-btn');
levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(`.${ACTIVE_LEVEL_BTN_CLASS}`).classList.remove(ACTIVE_LEVEL_BTN_CLASS);

    btn.classList.add(ACTIVE_LEVEL_BTN_CLASS);
    Game.setLevel(btn.getAttribute('data-level'));
  });
});

document.querySelector('#startGame').addEventListener('click', () => {
  Game.start();
});
