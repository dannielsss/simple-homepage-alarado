const ALARADO_ICON_DARK_IMG = './images/alarado-icon-homepage-dark.svg';
const ALARADO_ICON_LIGHT_IMG = './images/alarado-icon-homepage.svg';
const SUN_DARK = './images/Sun_fill.svg';
const SUN_LIGHT = './images/Sun_fill_light.svg';
const MOON_DARK = './images/Moon_fill.svg';
const MOON_LIGHT = './images/Moon_fill_light.svg';

const alaradoIconImg = document.getElementById('alarado-icon-img');
const navItems = document.getElementById('nav-items');

const switchThemeBtn = document.getElementById('switch-theme-btn');
const toggleNavBtn = document.getElementById('toggle-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

const app = document.getElementById('app');

const handleToggleTheme = () => {
  app.classList.toggle('dark');
  const currentTheme = app.classList[0];

  if (currentTheme === 'dark') {
    moon.parentElement.classList.add('active');
    sun.parentElement.classList.remove('active');

    alaradoIconImg.src = ALARADO_ICON_DARK_IMG;
    sun.src = SUN_LIGHT;
    moon.src = MOON_DARK;
    return;
  }

  sun.parentElement.classList.add('active');
  moon.parentElement.classList.remove('active');

  alaradoIconImg.src = ALARADO_ICON_LIGHT_IMG;
  sun.src = SUN_DARK;
  moon.src = MOON_LIGHT;
};

/**
 *
 * @param {boolean} show
 */
const handleToggleNav = (show) => {
  if (show) {
    navItems.classList.add('show-nav');
    closeNavBtn.classList.add('show-nav');
    return;
  }

  navItems.classList.remove('show-nav');
  closeNavBtn.classList.remove('show-nav');

  navItems.classList.add('hidden-nav');
  closeNavBtn.classList.add('hidden-nav');

  setTimeout(() => {
    navItems.classList.remove('hidden-nav');
    closeNavBtn.classList.remove('hidden-nav');
  }, 400);
};

switchThemeBtn.addEventListener('click', () => handleToggleTheme());
toggleNavBtn.addEventListener('click', () => handleToggleNav(true));
closeNavBtn.addEventListener('click', () => handleToggleNav(false));
