const User = require("../config/database").User;

module.exports.signupUser = function (req, res) {
  const newUser = new User(req.body);

  User.findOne(
    { email: newUser.email, username: newUser.username },
    function (err, user) {
      if (user)
        return res
          .status(400)
          .json({ auth: false, message: "Email and Username already exists" });

      newUser.save((err, user) => {
        if (err) {
          console.log(err);
          return res.status(400).json({ success: false });
        }
        res.status(200).json({
          success: true,
          id: user._id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
          isAdmin: user.isAdmin,
        });
      });
    }
  );
};

module.exports.loginUser = async function (req, res) {
  let token = req.cookies.auth;
  if (token !== undefined) {
    const user = await User.findByToken(token);
    if (user)
      return res.status(400).json({
        error: true,
        message: "You are already logged in.",
      });
  }
  const user = await User.findOne({
    $or: [{ username: req.body.email }, { email: req.body.email }],
  });
  console.log(req.body);
  if (user === null)
    return res.status(401).json({
      isAuth: false,
      message: "Username or Password Incorrect",
    });
  const hasPassword = await user.hasPassword(req.body.password);
  if (!hasPassword) {
    return res.status(401).json({
      error: true,
      message: "You are already logged in.",
    });
  }
  user.generateToken((err, user) => {
    if (err) return res.status(400).send(err);
    res.cookie("auth", user.token).json({
      isAuth: true,
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  });
};

module.exports.logoutUser = function (req, res) {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
};
