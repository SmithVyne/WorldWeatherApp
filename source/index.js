import getLocation from './utils';
import '../assets/style.css';
import '../assets/weather-icon.png';

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