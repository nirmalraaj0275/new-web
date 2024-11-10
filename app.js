require('dotenv').config(); // Ensure this is at the top

const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const authorRouter = require("./routes/authors.js");

const app = express();
const PORT = process.env.PORT || 3000;

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI); // Check if the URI is loaded properly
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to DB");
  } catch (err) {
    console.log("Error connecting to DB:", err);
  }
};

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

app.use("/authors", authorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});