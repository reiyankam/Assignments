function WeatherCard({ weather }) {
  const icon = weather.weather[0].icon;

  return (
    <div className="weather-card">
      <div className="location">
        <span>📍</span>
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.sys.country}</p>
        </div>
      </div>

      <div className="main-weather">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weather.weather[0].description}
        />

        <div>
          <div className="temperature">
            {Math.round(weather.main.temp)}°C
          </div>

          <p>
            {weather.weather[0].description}
          </p>
        </div>
      </div>

      <div className="feels">
        Feels like {Math.round(weather.main.feels_like)}°C
      </div>
    </div>
  );
}

export default WeatherCard;