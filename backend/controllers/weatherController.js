import { getWeatherData } from "../services/weatherService.js";

export async function fetchWeather(req, res, next) {
  try {
    const city = req.query.city;
    const data = await getWeatherData(city);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}
