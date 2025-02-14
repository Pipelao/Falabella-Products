import { Request, Response } from "express";
import pool from "../database/config";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products." });
  }
};
