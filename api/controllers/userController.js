const { User } = require("../config/database");

module.exports.getUsers = async function (req, res) {
  const users = await User.find();
  return res.send(users);
};
