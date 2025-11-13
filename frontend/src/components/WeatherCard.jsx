

function getEmoji(condition) {
  const map = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌁",
    Smoke: "💨",
  };

  return map[condition] || "🌍";
}

function WeatherCard({ data }) {
  return (
    <div className="mt-6 p-6 bg-blue-50 rounded-xl shadow-lg text-center">

      {/* Emoji Icon */}
      <div className="text-6xl mb-3">
        {getEmoji(data.condition)}
      </div>

      <h2 className="text-2xl font-bold mb-1 text-gray-800">
        {data.city}
      </h2>

      <p className="text-4xl font-bold text-blue-600 mb-4">
        {data.temp}°C
      </p>

      <p className="text-gray-700 capitalize mb-1 text-lg">
        {data.description}
      </p>

      <div className="flex justify-around mt-4 text-sm text-gray-600">
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind} km/h</p>
      </div>

      

    </div>
  );
}

export default WeatherCard;
