import { format } from 'date-fns';

const displayData = (temp, location, descrptn, humidity, date, unit_icon) => {
  const container = document.querySelector('#weather-data');
  container.innerHTML = `
    <p class="data-obj" id="temper">${temp}&#176;${unit_icon}</p>
    <p class="data-obj" id="location">${location}</p>
    <p class="data-obj" id="date">${date}</p>
    <p class="data-obj" id="descrptn">${descrptn}</p>
    <p class="data-obj" id="humidity">${humidity}%</p>
  `;
};

const formatData = (response, unit) => {
  const temp = response.main.temp;
  const location = `${response.name}, ${response.sys.country}`;
  const descrptn = response.weather[0].description;
  const humidity = `Hum: ${response.main.humidity} %`;
  const date = format(new Date(), 'do, MMM, yyyy');
  let unit_icon = (unit == 'metric') ? 'C' : 'F'
  displayData(temp, location, descrptn, humidity, date, unit_icon);
};

const getLocation = async (unit) => {
  const locationInpt = document.querySelector('#locationInpt');
  const loc = locationInpt.value;
  try{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=2c8924de1b3de10d32a5b5a33e4055c1&units=${unit}`;
    const locationData = await fetch(url);
    const response = await locationData.json();
    console.log(response);
    locationInpt.value = '';
    formatData(response, unit);
  }
  catch(err) {
    console.log(err);
  }
};

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