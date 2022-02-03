const User = require("../config/database").User;

module.exports.auth = (req, res, next) => {
	console.log("Auth");
	let token = req.cookies.auth;
	User.findByToken(token, (err, user) => {
		if (err) throw err;
		if (!user)
			return res.json({
				error: true,
			});

		req.token = token;
		req.user = user;
		next();
	});
};
