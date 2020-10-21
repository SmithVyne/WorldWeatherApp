const displayData = (temp, location, descrptn, humidity, date, unit_icon) => {
  const container = document.querySelector('#weather-data');
  container.innerHTML = `
    <p class="data-obj" id="temper">${temp}&#176;${unit_icon}</p>
    <p class="data-obj" id="location">${location}</p>
    <p class="data-obj" id="date">${date}</p>
    <p class="data-obj" id="descrptn">${descrptn}</p>
    <p class="data-obj" id="humidity">${humidity}</p>
  `;
};

export default displayData;