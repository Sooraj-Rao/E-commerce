import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const Connect = async () => {
  let DB_URL = process.env.DATABASE_URL;
  await mongoose
    .connect(DB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log("DB connection failed", err));
};
