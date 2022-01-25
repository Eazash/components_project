const userRouter = require("./userRouter");

module.exports.init = function (app) {
  app.use("/api/users", userRouter);
};
