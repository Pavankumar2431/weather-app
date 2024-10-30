import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const fetchWeatherData = async (city) => {
    setError('');
    setLoading(true); // Start loading when fetch begins
    try {
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );

      setWeather({
        name: currentWeatherResponse.data.name,
        temp: currentWeatherResponse.data.main.temp,
        humidity: currentWeatherResponse.data.main.humidity,
        wind: currentWeatherResponse.data.wind.speed,
        description: currentWeatherResponse.data.weather[0].description,
        icon: currentWeatherResponse.data.weather[0].icon,
      });

      const dailyForecast = forecastResponse.data.list
        .filter((_, index) => index % 8 === 0)
        .map((day) => ({
          date: day.dt_txt,
          temp_max: day.main.temp_max,
          temp_min: day.main.temp_min,
          description: day.weather[0].description,
          icon: day.weather[0].icon,
        }));

      setForecast(dailyForecast);
    } catch (error) {
      setError('City not found or API failure');
    } finally {
      setLoading(false); // End loading regardless of success or error
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchWeatherData} />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <div className="loading-spinner">Loading weather data...</div>
      ) : (
        <>
          <CurrentWeather weather={weather} />
          <Forecast forecast={forecast} />
        </>
      )}
    </div>
  );
};

export default App;
