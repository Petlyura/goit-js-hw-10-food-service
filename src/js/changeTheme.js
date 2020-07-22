const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  switchInput: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

refs.switchInput.addEventListener('change', handleSwitchInput);

saveThemeOnReload();

if (localStorage.getItem('current-theme') === Theme.DARK) {
  refs.switchInput.checked = true;
}

function handleSwitchInput() {
  if (refs.switchInput.checked) {
    refs.body.setAttribute('class', Theme.DARK);
    localStorage.setItem('current-theme', refs.body.classList);
  } else {
    refs.body.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('current-theme', refs.body.classList);
  }
}

function saveThemeOnReload() {
  const savedTheme = localStorage.getItem('current-theme');

  if (savedTheme) {
    refs.body.classList.add(savedTheme);
  }
}
