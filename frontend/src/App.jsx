import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function getWeather() {
    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();
    setWeather(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center p-5">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Live Weather App
        </h1>

        <SearchBox city={city} setCity={setCity} getWeather={getWeather} />

        {weather && weather.success && (
          <WeatherCard data={weather.data} />
        )}

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
