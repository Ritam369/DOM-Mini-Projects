const apiKey = 'e10beb12b8592b7a7cffe2326d14c028';
const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const weatherInfoDiv = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    weatherInfoDiv.innerHTML = "";
    if(!input.value.trim()) {
        alert('Please enter a place name');
        return;
    }
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`, 
        { method: 'GET' }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const weatherInfo = document.createElement('div');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherInfoDiv.appendChild(weatherInfo);
        input.value = "";

    })
    .catch(err => {
    if (err.message === "CITY_NOT_FOUND") {
      weatherInfoDiv.innerHTML = `<p>City not found. Try another name.</p>`;
    } else {
      weatherInfoDiv.innerHTML = `<p>Something went wrong. Please try again.</p>`;
      console.error(err);
    }
  });
})