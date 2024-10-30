import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import './Forecast.css';

const Forecast = ({ forecast }) => {
  const [renderKey, setRenderKey] = useState(Date.now());

  // Update render key each time forecast changes
  useEffect(() => {
    setRenderKey(Date.now());
  }, [forecast]);

  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-card">
        {forecast.map((day, index) => (
          <WeatherCard 
            key={`${index}-${renderKey}`} // Unique key for each update
            weather={day} 
            style={{ animationDelay: `${index * 0.2}s` }} 
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
