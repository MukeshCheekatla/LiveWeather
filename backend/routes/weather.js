import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City name is required",
      });
    }

    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    res.json({
      success: true,
      data: {
        city: data.name,
        temp: data.main.temp,
        min: data.main.temp_min,
        max: data.main.temp_max,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
    });
  } catch (error) {
    next(error); 
  }
});

export default router;
