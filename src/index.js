import render from './render';
import navbar from './navbar';
import home from './home';
import Home from './home.jpg';

const main = document.querySelector('.content');

const homeImg = new Image();
homeImg.src = Home;

home.style.backgroundImage = "url('../dist/a2e90d25b3bbe36387f4042035ff8e0e.jpg')";

main.appendChild(navbar);
main.appendChild(home);

document.body.appendChild(main);

const btnContainer = document.querySelector('#btn-wrap');

btnContainer.addEventListener('click', (e) => {
  console.log(e.target);
});