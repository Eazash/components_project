const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const mainRouter = require("./routes/main.js");
const API_PORT = process.env.API_PORT || 3000;
const DB_URL = "mongodb://localhost:27017/ecommerce";

// load swagger yaml file
let swaggerDoc;
try {
  swaggerDoc = yaml.load(
    fs.readFileSync(path.join(process.cwd(), "swagger.yaml"))
  );
} catch (error) {
  console.error(error);
  process.exit(1);
}
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

// register routes
mainRouter.init(app);

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
const server = app.listen(API_PORT, "localhost", function () {
  const { address, port } = server.address();
  console.log(`API running at http://${address}:${port}/api`);

  // setup Swagger while not in production
  if (process.env.NODE_ENV !== "production") {
    app.use("/explorer", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    console.log(
      `API Documentation running at http://${address}:${port}/explorer`
    );
  }
});
