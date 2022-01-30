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
					createdAt: user.createdAt
				});
			});
		}
	);
};

module.exports.loginUser = function (req, res) {
	let token = req.cookies.auth;

	User.findByToken(token, (err, user) => {
		if (err) return res(err);
		if (user) {
			return res.status(400).json({
				error: true,
				message: "You are already logged in.",
			});
		} else {
			User.findOne({ username: req.body.username }, function (err, user) {
				if (!user)
					return res.json({
						isAuth: false,
						message: " Auth failed, username not found",
					});

				user.comparePassword(req.body.password, (err, isMatch) => {
					if (!isMatch)
						return res.json({
							isAuth: false,
							message: "Password doesn't match",
						});

					user.generateToken((err, user) => {
						if (err) return res.status(400).send(err);
						res.cookie("auth", user.token).json({
							isAuth: true,
							id: user._id,
							username: user.username,
							email: user.email,
						});
					});
				});
			});
		}
	});
};

module.exports.logoutUser = function (req, res) {
	req.user.deleteToken(req.token, (err, user) => {
		if (err) return res.status(400).send(err);
		res.sendStatus(200);
	});
};
