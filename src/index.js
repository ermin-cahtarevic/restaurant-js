import navbar from './navbar';
import home from './home';

const main = document.querySelector('.content');

main.appendChild(navbar);
main.appendChild(home);

document.body.appendChild(main);
