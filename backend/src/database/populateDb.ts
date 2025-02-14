import axios from "axios";
import pool from "./config"
import { API_URL } from "../constants/constants";

const populateDB = async () => {
  try {
    const res = await pool.query("SELECT COUNT(*) FROM products");
    const rowCount = parseInt(res.rows[0].count, 10);

    if (rowCount > 0) {
      console.log("Database already populated.");
      return;
    }

    console.log("Fetching sample data...");
    const { data } = await axios.get(API_URL);

    for (const product of data) {
      await pool.query(
        `INSERT INTO products (product_id, title, price, description, category, image)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          product.id,
          product.title,
          product.price,
          product.description,
          product.category,
          product.image
        ]
      );
    }

    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    pool.end();
  }
};

populateDB();
