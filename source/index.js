import getLocation from './utils';

const render = () => {
  const searchCel = document.querySelector('#search-c');
  const searchFah = document.querySelector('#search-f');
  searchCel.addEventListener('click', () => {
    getLocation('metric');
  });
  searchFah.addEventListener('click', () => {
    getLocation('imperial');
  });
};

render();