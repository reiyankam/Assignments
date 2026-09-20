function SearchBar({ city, setCity, onSearch }) {
  return (
    <form className="search-bar" onSubmit={onSearch}>
      <span>⌕</span>

      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;