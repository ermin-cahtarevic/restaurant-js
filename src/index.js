import render from './render';
import navbar from './navbar';
import home from './home';
import aboutContent from './about';
import menuContent from './menu';
import contactContent from './contact';

const main = document.createElement('div');
main.classList.add('content')

main.appendChild(navbar);
main.appendChild(home);
home.appendChild(aboutContent);
home.appendChild(menuContent);
home.appendChild(contactContent);

document.body.appendChild(main);

const logo = document.querySelector('#logo');
const btnContainer = document.querySelector('#btn-wrap');

logo.addEventListener('click', () => {
  window.location.reload(true);
});

btnContainer.addEventListener('click', (e) => {
  render(e.target);
});