# 🌤️ WeatherNow

WeatherNow is a full-stack weather web application built with **Node.js + Express** and **React + Tailwind**, using the **OpenWeather API** to fetch and display real-time weather data. It provides a clean, responsive UI with background visuals for a better experience.

---

## 📸 Demo
![WeatherNow Screenshot](./frontend/public/screenshots/app-preview.png)

---

## 🛠️ Tech Stack

### Backend
- Node.js  
- Express  
- OpenWeather API  
- In-memory caching  

### Frontend
- React  
- TailwindCSS  
- Axios  

---

## 📦 Features
- 🔍 Search weather by city name  
- 📍 Get weather using geolocation  
- 🌡️ Real-time temperature, humidity, conditions  
- 🎨 Responsive UI with background image  
- 🕒 Last 5 searches saved (LocalStorage)  
- ⚡ Faster responses via backend caching  
- 🔁 Handles loading, errors, and unknown cities gracefully  

---

## 🔗 API Endpoints
- **City Weather:**  
  `GET /weather?city=Hyderabad`

- **Geo Weather:**  
  `GET /weather/geo?lat=17.3&lon=78.4`

---
