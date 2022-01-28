const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const productRouter = require("./productRouter");

module.exports.init = function (app) {
  app.use("/api/users", userRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/products", productRouter);
};
