import React from 'react';

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="current-weather">
        
      <h2>Current Weather in {weather.name}</h2>
      <img src={iconUrl} alt={weather.description} />
      <p>Temperature: {weather.temp}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.wind} km/h</p>
      <p>Conditions: {weather.description}</p>
    </div>
  );
};

export default CurrentWeather;
