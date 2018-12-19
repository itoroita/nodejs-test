var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var userSchema = new mongoose.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  passwordConf: {
    type: String
  }
});

var User = mongoose.model('myuser', userSchema);

//Signup

router.post('/signUp', function(req, res, next) {
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var passwordConf = req.body.passwordConf;

	var newuser = new User();
	newuser.email = email;
	newuser.username = username;
	newuser.password = password;
	newuser.passwordConf = passwordConf;
	newuser.save(function(err, savedUser) {
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
		res.send('Signup Successful');
	});
});
//Login
router.post('/login', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({username: username, password: password}, function(err, user) {
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
		if(!user) {
			return res.status(404).send();
		}
		req.session.user = user;
		res.send('Login Successful');
	});
}); 

//Authorizaton
router.get('/dashboard', function(req, res) {
	if(!req.session.user) {
		return res.status(401).send();
	}
	return res.status(200).send("Welcome to phonetest API")
})

module.exports = router;

