const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const mainRouter = require("./routes/mainRouter.js");
const config = require("./config");
const database = require("./database");

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

const app = express();

// use cors
app.use(cors());

// enable json
app.use(express.json({ extended: true }));

// setup logger
app.use(morgan("dev"));

// connect to database
app.bind(database);

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

// register routes
mainRouter.init(app);

// start the server
const server = app.listen(config.api_port, "localhost", function () {
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
