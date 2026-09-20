import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import WeatherDetails from "./Components/WeatherDetails";
import Footer from "./Components/Footer";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (searchCity) => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found.");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message || "Unable to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather("Kolkata");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span>WEATHER</span>
          <strong>NOW</strong>
        </div>

        <div className="live-status">
          <span className="status-dot"></span>
          Live Weather
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">REAL-TIME WEATHER DASHBOARD</p>

            <h1>
              Know the weather.
              <br />
              Plan your day.
            </h1>

            <p className="subtitle">
              Search any city to get current weather conditions,
              temperature, wind, humidity and more.
            </p>

            <SearchBar
              city={city}
              setCity={setCity}
              onSearch={handleSearch}
            />
          </div>

          <div className="weather-symbol">☁</div>
        </section>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-box">
            <span>⚠</span>
            <div>
              <strong>Unable to find weather</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {weather && !loading && !error && (
          <section className="weather-section">
            <WeatherCard weather={weather} />

            <WeatherDetails weather={weather} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;