import express from "express";
import { fetchWeather, fetchWeatherByCoords } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", fetchWeather);

// GEO LOCATION ROUTE
router.get("/geo", fetchWeatherByCoords);

export default router;
