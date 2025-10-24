import express from "express";
import { embedData } from "../controller/embedding.js";

export const embeddingRoure = express.Router();

embeddingRoure.post('/add-data',embedData)