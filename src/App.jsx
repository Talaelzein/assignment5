
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    if (city.trim() === "") {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setSearchedCity(city.trim());
    setSearchCount((count) => count + 1);
  }

  useEffect(() => {
    if (searchCount === 0) return;

    if (!API_KEY) {
      setError("API key is missing. Check your .env.local file.");
      setWeather(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchWeather() {
      setLoading(true);
      setError("");
      setWeather(null);

      try {
        const url =
          `https://api.openweathermap.org/data/2.5/weather` +
          `?q=${encodeURIComponent(searchedCity)}` +
          `&appid=${API_KEY}&units=metric`;

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("City not found. Please try again.");
          }

          if (response.status === 401) {
            throw new Error("Invalid API key.");
          }

          throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setWeather(data);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [searchedCity, searchCount]);

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <p className="header-label">
          YOUR DAILY LITTLE FORECAST ✦
        </p>

        <h1>☁ Weather Dashboard</h1>

        <p className="subtitle">
          Your little window to the sky ♡
        </p>
      </header>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <LoadingSpinner />}

      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && weather && (
        <WeatherCard weather={weather} />
      )}

      <footer>
        <p>A little forecast, a little magic ✧</p>
      </footer>
    </main>
  );
}

export default App;
