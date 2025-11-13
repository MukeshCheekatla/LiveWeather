import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import weatherRoute from "./routes/weather.js";
import { requestLogger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import healthRoute from "./routes/health.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use("/weather", weatherRoute);
app.use("/health", healthRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
