import mongoose from "mongoose";

export class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const DB_URL = process.env.DB_URL;
    mongoose
      .connect(DB_URL)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB: " + err));
  }
}
