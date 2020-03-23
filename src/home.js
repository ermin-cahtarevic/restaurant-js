import './css/home.css';

const home = document.createElement('div');
const h1 = document.createElement('h1');
const content = document.createElement('div');
const tagline = document.createElement('h3');
const h4 = document.createElement('h4');

home.classList.add('home');
h1.innerHTML = 'Burger Shack';

tagline.classList.add('tagline');
tagline.innerHTML = 'The Burger Shack Promise';

h4.classList.add('h4');
h4.innerHTML =
  `The Burger Shack promise is to give people delicious, quality food in a setting that is 
  <span class="red-text">warm, inviting and unpretentious.</span> By using only the finest ingredients, we aim to deliver a dining 
  experience that cannot be found elsewhere.`

content.classList.add('home-content');
content.appendChild(tagline);
content.appendChild(h4);

home.appendChild(h1);
home.appendChild(content);

export default home;