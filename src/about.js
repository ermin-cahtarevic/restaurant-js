import './css/about.css';

const aboutContent = document.createElement('div');
const tagline = document.createElement('h3');
const h4 = document.createElement('h4');

tagline.classList.add('tagline');
tagline.innerHTML = 'The Burger Shack Promise';

h4.classList.add('h4');
h4.innerHTML =
  `The Burger Shack promise is to give people delicious, quality food in a setting that is 
  <span class="red-text">warm, inviting and unpretentious.</span> By using only the finest ingredients, we aim to deliver a dining 
  experience that cannot be found elsewhere.`

aboutContent.classList.add('about-content');
aboutContent.classList.add('d-none');
aboutContent.appendChild(tagline);
aboutContent.appendChild(h4);

aboutContent.id = 'about';

export default aboutContent;