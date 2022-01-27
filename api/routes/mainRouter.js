const userRouter = require("./userRouter");
const authRouter = require("./authRouter");

module.exports.init = function (app) {
  app.use("/api/users", userRouter);
  app.use("/api/auth", authRouter);
};
