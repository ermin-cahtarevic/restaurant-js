import './css/contact.css';

const contactContent = document.createElement('div');
const h3 = document.createElement('h3');
const h4 = document.createElement('h4');
const form = document.createElement('form');
const nameLabel = document.createElement('label');
const emailLabel = document.createElement('label');
const messageLabel = document.createElement('label');
const name = document.createElement('input');
const email = document.createElement('input');
const message = document.createElement('textarea');
const topInput = document.createElement('div');
const nameWrap = document.createElement('div');
const emailWrap = document.createElement('div');
const submit = document.createElement('button');


contactContent.classList.add('contact-content');
contactContent.classList.add('d-none');

h3.classList.add('tagline');
h3.innerText = 'Contact';

h4.classList.add('contact-text');
h4.innerText = 'Do you have a question, or suggestion?';

topInput.classList.add('top-input');
form.classList.add('form');
nameLabel.innerText = 'Name';
emailLabel.innerText = 'Email';
messageLabel.innerText = 'Message';

name.setAttribute('type', 'text');
email.setAttribute('type', 'text');
message.setAttribute('rows', '4');
message.classList.add('textarea');

nameWrap.appendChild(nameLabel);
nameWrap.appendChild(name);

emailWrap.appendChild(emailLabel);
emailWrap.appendChild(email);

topInput.appendChild(nameWrap);
topInput.appendChild(emailWrap);

submit.innerText = 'Submit';
submit.classList.add('submit-btn');

form.appendChild(topInput);
form.appendChild(messageLabel);
form.appendChild(message);
form.appendChild(submit);


contactContent.appendChild(h3);
contactContent.appendChild(h4);
contactContent.appendChild(form);

contactContent.id = 'contact';

export default contactContent;