import { Pool } from "pg";
import * as dotenv from "dotenv";
import { DB_PORT } from "../constants/constants";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || DB_PORT,
});

export default pool;
