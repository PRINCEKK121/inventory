import {select, selectAll} from './selector.js';

const barIcon = select('header i');
const sideBar = select('aside');
const sideIconsLabel = selectAll('aside span');

barIcon.addEventListener('click', () => {
  sideBar.classList.toggle('toggle-menu-items');
  sideIconsLabel.forEach(icon => icon.classList.toggle('hide-menu-item-text'));
});