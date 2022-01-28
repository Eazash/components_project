const User = require("../../config/database").User;

module.exports.signupUser = function (req, res) {
	const newUser = new User(req.body);

	User.findOne({ email: newUser.email, username: newUser.username }, function (err, user) {
		if (user)
			return res.status(400).json({ auth: false, message: "Email and Username already exists" });

		newUser.save((err, doc) => {
			if (err) {
				console.log(err);
				return res.status(400).json({ success: false });
			}
			res.status(200).json({
				success: true,
				user: doc,
			});
		});
	});
};
