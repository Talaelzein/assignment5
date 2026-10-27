
function SearchBar({ city, setCity, onSearch, loading }) {
  return (
    <form className="weather-form" onSubmit={onSearch}>
      <label htmlFor="city-input">City Name</label>

      <input
        id="city-input"
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        autoComplete="off"
      />

      <button type="submit" disabled={loading}>
        {loading ? "Searching..." : "Search Weather"}
      </button>
    </form>
  );
}

export default SearchBar;
