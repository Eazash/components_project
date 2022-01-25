const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const API_PORT = process.env.API_PORT || 3000;
const DB_URL = "mongodb://localhost:27017/ecommerce";

// connect to database
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection succesful"))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

require("dotenv").config();

const app = express();

// use cors
app.use(cors());

// enable json
app.use(express.json({ exnteded: true }));

// setup logger
app.use(morgan("dev"));

// add error handler
app.use(function (error, req, res, next) {
  if (error.statusCode !== undefined) {
    return res.status(error.statusCode).json(error);
  }
  console.error(error);
  if (process.env.NODE_ENV.toLowerCase() !== "production") {
    return res.status(500).json(error);
  }
  return res.status(500);
});

// start the server
app.listen(API_PORT, () => console.log(`API running on port ${API_PORT}`));
