
function WeatherCard({ weather }) {
  return (
    <section className="weather-result">
      <div className="weather-header">
        <div>
          <h2 className="city-name">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="weather-label">Current weather</p>
        </div>

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="weather-icon"
        />
      </div>

      <div className="weather-main">
        <h3>{Math.round(weather.main.temp)}°C</h3>
        <p className="description">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="weather-details">
        <div className="detail-card">
          <p>💧 Humidity</p>
          <h3>{weather.main.humidity}%</h3>
        </div>

        <div className="detail-card">
          <p>💨 Wind Speed</p>
          <h3>{weather.wind.speed} m/s</h3>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
