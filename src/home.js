import './css/home.css';
import Home from './home.jpg';

const homeImg = new Image();
homeImg.src = Home;

const home = document.createElement('div');
const h1 = document.createElement('h1');

home.style.backgroundImage = "url('../dist/a2e90d25b3bbe36387f4042035ff8e0e.jpg')";

home.classList.add('home');
h1.innerHTML = 'Burger Shack';
h1.id = 'logo';

home.appendChild(h1);

export default home;