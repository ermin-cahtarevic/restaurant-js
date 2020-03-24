import './css/navbar.css';

const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const about = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

about.innerHTML = 'About';
// home.classList.add('active');
menu.innerHTML = 'Menu';
contact.innerHTML = 'Contact';

ul.setAttribute('id', 'btn-wrap');
ul.appendChild(about);
ul.appendChild(menu);
ul.appendChild(contact);

navbar.classList.add('navbar');
navbar.appendChild(ul);

export default navbar;