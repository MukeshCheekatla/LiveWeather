import { getWeatherData, getWeatherByCoords } from "../services/weatherService.js";
import { validateCity } from "../utils/validateCity.js";

export async function fetchWeather(req, res, next) {
  try {
    const city = req.query.city;

    if (!validateCity(city)) {
      return res.status(400).json({ success: false, message: "Invalid city name" });
    }

    const data = await getWeatherData(city);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

//  CONTROLLER FOR GEOLOCATION
export async function fetchWeatherByCoords(req, res, next) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({ success: false, message: "Missing coordinates" });
    }
    console.log("LAT:", lat, "LON:", lon);

    const data = await getWeatherByCoords(lat, lon);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}
