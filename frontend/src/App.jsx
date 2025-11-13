import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getWeather() {
    setLoading(true); // Start the  loading
    setWeather(null); // Clears old data

    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();

    setWeather(data);
    setLoading(false); // Stops loading
  }
  function getLocationWeather() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    setLoading(true);
    setWeather(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("LAT:", latitude, "LON:", longitude);

        const res = await fetch(
          `http://localhost:5000/weather/geo?lat=${latitude}&lon=${longitude}`
        );

        const data = await res.json();

        setWeather(data);
        setLoading(false);
      },
      (err) => {
        console.error("GEO ERROR:", err);
        alert("Error getting location");
        setLoading(false);
      }
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-5 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
    
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Live Weather App
        </h1>

        <SearchBox city={city} setCity={setCity} getWeather={getWeather} />

        <button
          onClick={getLocationWeather}
          className="px-4 py-2 mt-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow w-full"
        >
          Use My Location
        </button>

        {loading && (
          <div className="flex justify-center mt-6">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {weather && weather.success && <WeatherCard data={weather.data} />}

        {weather && weather.success === false && (
          <p className="mt-4 text-red-500 text-center font-medium">
            City not found
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
