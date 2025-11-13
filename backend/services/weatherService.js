import axios from "axios";

export async function getWeatherData(city) {
  if (!city) throw new Error("City is required");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  const res = await axios.get(url);
  return {
    city: res.data.name,
    temp: res.data.main.temp,
    humidity: res.data.main.humidity,
    wind: res.data.wind.speed,
    condition: res.data.weather[0].main,
  };
}
