import axios from "axios";
import { BASE_URL } from "../config/apiConfig.js";
import { getCache, setCache } from "../utils/cache.js";


// CITY SEARCH
export async function getWeatherData(city) {
  const cacheKey = `city-${city.toLowerCase()}`;
  const cached = getCache(cacheKey);

  if (cached) return cached;

  const url = `${BASE_URL}/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
  const res = await axios.get(url);

  const data = {
    city: res.data.name,
    temp: res.data.main.temp,
    humidity: res.data.main.humidity,
    wind: res.data.wind.speed,
    condition: res.data.weather[0].main,
    description: res.data.weather[0].description,
    icon: res.data.weather[0].icon,
  };

  setCache(cacheKey, data);
  return data;
}


// NEW: COORDINATES SEARCH
export async function getWeatherByCoords(lat, lon) {
  const cacheKey = `geo-${lat}-${lon}`;
  const cached = getCache(cacheKey);

  if (cached) return cached;

  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
  const res = await axios.get(url);

  const data = {
    city: res.data.name,
    temp: res.data.main.temp,
    humidity: res.data.main.humidity,
    wind: res.data.wind.speed,
    condition: res.data.weather[0].main,
    description: res.data.weather[0].description,
    icon: res.data.weather[0].icon,
  };

  setCache(cacheKey, data);
  return data;
}

