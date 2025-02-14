import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getProducts } from "./controllers/productController";
import { SERVER_PORT } from "./constants/constants";

dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT || SERVER_PORT;

app.use(cors());
app.use(express.json());

app.get("/items", getProducts);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
