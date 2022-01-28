const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
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

UserSchema.methods.comparePassword = function (password, cb, next) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) return cb(next);
		cb(null, isMatch);
	});
};

UserSchema.methods.generateToken = function (cb) {
	var user = this;
	var token = jwt.sign(user._id.toHexString(), config.secret);

	user.token = token;
	user.save(function (err, user) {
		if (err) return cb(err);
		cb(null, user);
	});
};

UserSchema.statics.findByToken = function (token, cb) {
	var user = this;

	jwt.verify(token, config.secret, function (err, decode) {
		user.findOne({ _id: decode, token: token }, function (err, user) {
			if (err) return cb(err);
			cb(null, user);
		});
	});
};

UserSchema.methods.deleteToken = function (token, cb) {
	var user = this;

	user.update({ $unset: { token: 1 } }, function (err, user) {
		if (err) return cb(err);
		cb(null, user);
	});
};

module.exports = new model("User", UserSchema);
