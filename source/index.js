import getLocation from './utils'

const render = () => {
  const search_c = document.querySelector('#search-c');
  const search_f = document.querySelector('#search-f');
  search_c.addEventListener('click', () => {
    getLocation('metric');
  });
  search_f.addEventListener('click', () => {
    getLocation('imperial');
  });
};

render();