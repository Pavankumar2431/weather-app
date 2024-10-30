import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather, style }) => (
  <div className="weather-card" style={style}>
    <p className="weather-date">{new Date(weather.date).toLocaleDateString()}</p>
    <img
      src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
      alt={weather.description}
      className="weather-icon"
    />
    <div className='weather-details'>
    <p>{weather.description}</p>
    <p>High: {weather.temp_max}°C</p>
    <p>Low: {weather.temp_min}°C</p>
    </div>
  </div>
);

export default WeatherCard;
