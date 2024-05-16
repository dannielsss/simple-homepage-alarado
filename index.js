const ALARADO_ICON_DARK_IMG = './images/alarado-icon-homepage-dark.svg';
const ALARADO_ICON_LIGHT_IMG = './images/alarado-icon-homepage.svg';

const SUN_DARK = './images/Sun_fill.svg';
const SUN_LIGHT = './images/Sun_fill_light.svg';

const MOON_DARK = './images/Moon_fill.svg';
const MOON_LIGHT = './images/Moon_fill_light.svg';

const alaradoIconImg = document.getElementById('alarado-icon-img');
const switchThemeBtn = document.getElementById('switch-theme-btn');
const toggleNavBtn = document.getElementById('toggle-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const navItems = document.getElementById('nav-items');

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const app = document.getElementById('app');
let currentTheme = app.classList[0]; // light or dark

switchThemeBtn.addEventListener('click', () => {
  app.classList.toggle('dark');

  if (app.classList.contains('dark')) {
    moon.parentElement.classList.add('active');
    sun.parentElement.classList.remove('active');

    alaradoIconImg.src = ALARADO_ICON_DARK_IMG;
    sun.src = SUN_LIGHT;
    moon.src = MOON_DARK;
  } else {
    sun.parentElement.classList.add('active');
    moon.parentElement.classList.remove('active');

    alaradoIconImg.src = ALARADO_ICON_LIGHT_IMG;
    sun.src = SUN_DARK;
    moon.src = MOON_LIGHT;
  }
});

toggleNavBtn.addEventListener('click', () => {
  navItems.classList.toggle('show-nav');
  closeNavBtn.classList.toggle('show-nav');
});

closeNavBtn.addEventListener('click', () => {
  navItems.classList.toggle('show-nav');
  closeNavBtn.classList.toggle('show-nav');

  navItems.classList.add('hidden-nav');
  closeNavBtn.classList.add('hidden-nav');

  setTimeout(() => {
    navItems.classList.remove('hidden-nav');
    closeNavBtn.classList.remove('hidden-nav');
  }, 400);
});
