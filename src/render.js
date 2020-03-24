const render = (tab) => {
  const items = tab.parentNode.children;

  for(let el of items) {
    if(el.classList.contains('active')) {
      el.classList.remove('active');
    };
    if(!(document.getElementById(el.innerText.toLowerCase()).classList.contains('d-none'))) {
      document.getElementById(el.innerText.toLowerCase()).classList.add('d-none');
    };
  }

  tab.classList.add('active');

  const id = tab.innerText.toLowerCase();
  const element = document.getElementById(id);

  element.classList.remove('d-none');
};

export default render;