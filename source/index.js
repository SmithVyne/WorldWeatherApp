import getLocation from './utils';
import '../assets/style.css';
import '../assets/weather-icon.png';

const render = () => {
  const searches = document.querySelectorAll('.search');
  searches.forEach(search => {
    search.addEventListener('click', (evt) => {
      const unit = evt.target.getAttribute('unit');
      getLocation(unit);
    });
  });
};

render();