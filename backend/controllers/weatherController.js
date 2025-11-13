import { getWeatherData } from "../services/weatherService.js";
import { validateCity } from "../utils/validateCity.js";

export async function fetchWeather(req, res, next) {
  try {
    const city = req.query.city;

    if (!validateCity(city)) {
      return res.status(400).json({
        success: false,
        message: "Invalid city name",
      });
    }

    const data = await getWeatherData(city);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}
