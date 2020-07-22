import menuTemplate from '../templates/menuTemplate.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
const menuMarkUp = menuTemplate(menu);

menuListRef.insertAdjacentHTML('afterbegin', menuMarkUp);
