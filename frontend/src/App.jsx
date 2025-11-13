import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  async function getWeather() {
    const res = await fetch(`http://localhost:5000/weather?city=${city}`);
    const data = await res.json();
    console.log(data); // TEMP step
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
      </div>
    </div>
  );
}

export default App;
