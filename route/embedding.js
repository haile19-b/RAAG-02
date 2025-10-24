import express from "express";
import { TakeData } from "../controller/embedding.js";

export const embeddingRoure = express.Router();

embeddingRoure.post('/add-data',TakeData)