import './css/menu.css';
import Burger from './img/burger.svg';
import Hotdog from './img/hotdog.svg';
import Steak from './img/steak.svg';

const menuContent = document.createElement('div');
const h3 = document.createElement('h3');
const iconWrap = document.createElement('div');
const burgerDiv = document.createElement('div');
const hotdogDiv = document.createElement('div');
const steakDiv = document.createElement('div');

burgerDiv.classList.add('icon-circle');
hotdogDiv.classList.add('icon-circle');
steakDiv.classList.add('icon-circle');

const burger = new Image();
burger.src = Burger;
burger.classList.add('menu-img');
burgerDiv.appendChild(burger);

const hotdog = new Image();
hotdog.src = Hotdog;
hotdog.classList.add('menu-img');
hotdogDiv.appendChild(hotdog);

const steak = new Image();
steak.src = Steak;
steak.classList.add('menu-img');
steakDiv.appendChild(steak);

menuContent.classList.add('menu-content');
menuContent.classList.add('d-none');

h3.classList.add('tagline');
h3.innerText = 'Menu';

iconWrap.classList.add('icon-wrap');
iconWrap.appendChild(burgerDiv);
iconWrap.appendChild(hotdogDiv);
iconWrap.appendChild(steakDiv);

menuContent.appendChild(h3);
menuContent.appendChild(iconWrap);

menuContent.id = 'menu';

export default menuContent;