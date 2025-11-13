import axios from "axios";
import { apiConfig } from "../config/apiConfig.js";

export async function getWeatherData(city) {
  if (!city) throw new Error("City is required");

  const url = `${apiConfig.baseUrl}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=${apiConfig.units}`;

  const res = await axios.get(url);

  return {
    city: res.data.name,
    temp: res.data.main.temp,
    humidity: res.data.main.humidity,
    wind: res.data.wind.speed,
    condition: res.data.weather[0].main,
    description: res.data.weather[0].description,
    icon: res.data.weather[0].icon,
  };
}
