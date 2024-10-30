# Weather Dashboard
#### This is a Weather Dashboard built with React that displays the current weather and a 5-day forecast for a city searched by the user. The app uses the OpenWeatherMap API to fetch real-time weather data, allowing users to search any city and view details about temperature, humidity, wind speed, and weather conditions.

## Table of Contents
* Features
* Installation
* Usage
* Technologies Used
* API Setup

## Features
* **City Search:** Allows users to search for weather data by entering a city name.
* **Current Weather** Display:
  * Temperature
  * Humidity
  * Wind Speed
  * Weather conditions with icons for sun, clouds, rain, etc.
* **5-Day Forecast:**
  * Shows the date, weather condition, and high/low temperatures for the next 5 days.
  * Animated loading effect on each card for every search.
* **Responsive Design:** Fully responsive on both desktop and mobile devices.
* **Error Handling:** Displays appropriate error messages if weather data can't be retrieved.
## Installation
### 1. Clone the repository:
    git clone https://github.com/Pavankumar2431/weather-app.git
### 2. Navigate to the project directory:

    cd weather-app
### 3. Install dependencies:
    npm install
### 4. Start the application:
    npm start
### Usage
* **Search for a City:** Type in the name of a city in the search bar to view its current weather and a 5-day forecast.
* **View Weather Information:** The app will display the temperature, humidity, wind speed, and weather conditions with icons.
* **Responsive Experience:** Use the app on any device; it adjusts its layout for mobile and desktop views.
### Technologies Used
* **React:** For building the user interface and managing component state.
* **Axios:** For handling API requests to the OpenWeatherMap API.
* **CSS** (or TailwindCSS/Bootstrap): For styling and responsive design.
* **OpenWeatherMap API:** Provides real-time weather data.
### API Setup
To use the OpenWeatherMap API:

* **1. Sign up** at OpenWeatherMap and create an account.
* **Get your API key** from the API keys section.
* **Add the API key** to your project by creating a .env file in the project root:
  
      REACT_APP_OPENWEATHER_API_KEY=your_api_key_here

* **Restart the application** if it’s already running.
  
