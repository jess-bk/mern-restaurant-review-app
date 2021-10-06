import express from "express";
import cors from "cors";
import morgan from "morgan";
import logger from "morgan";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(morgan("dev"));
app.use(logger("dev"));

app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));

export default app;
