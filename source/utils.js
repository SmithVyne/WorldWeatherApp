import { format } from 'date-fns';
import displayData from './displayData';

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

export default getLocation;