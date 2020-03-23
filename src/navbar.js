import './css/navbar.css';

const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const home = document.createElement('li');
home.innerHTML = 'Home';
home.classList.add('active');
const menu = document.createElement('li');
menu.innerHTML = 'Menu';
const contact = document.createElement('li');
contact.innerHTML = 'Contact';

ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(contact);

navbar.classList.add('navbar');
navbar.appendChild(ul);

export default navbar;