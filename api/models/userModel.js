const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const salt = 10;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	token: {
		type: String,
	},
});

UserSchema.pre("save", function (next) {
	var user = this;

	if (user.isModified("password")) {
		bcrypt.genSalt(salt, function (err, salt) {
			if (err) return next(err);

			bcrypt.hash(user.password, salt, function (err, hash) {
				if (err) return next(err);
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});

module.exports = new model("User", UserSchema);
