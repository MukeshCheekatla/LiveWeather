import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function getWeather() {
    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();
    setWeather(data); 
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Live Weather App
        </h1>

        <div className="flex gap-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />

          <button
            onClick={getWeather}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Clean Weather Card */}
        {weather && weather.success && (
          <div className="mt-6 p-4 rounded-lg border">
            <h2 className="text-xl font-bold">{weather.data.city}</h2>
            <p>Temperature: {weather.data.temp}°C</p>
            <p>Humidity: {weather.data.humidity}%</p>
            <p>Wind: {weather.data.wind} km/h</p>
            <p>Condition: {weather.data.condition}</p>
            <p className="capitalize">{weather.data.description}</p>
          </div>
        )}

        {/* If city invalid */}
        {weather && weather.success === false && (
          <p className="mt-4 text-red-500 text-center">
            City not found
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
