function SearchBox({ city, setCity, getWeather }) {
  return (
    <div className="flex gap-3 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none shadow-sm"
      />

      <button
        onClick={getWeather}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBox;
