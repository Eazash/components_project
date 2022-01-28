const userRouter = require("./userRouter");
const productRouter = require("./productRouter");

module.exports.init = function (app) {
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
};
