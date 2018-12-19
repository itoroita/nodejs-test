var express = require('express');
var router = express.Router();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var router = express.Router();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('We are connected');
});

//create template
var phoneSchema = new mongoose.Schema({
  name: String,
  phone_number: Number,
  email: String,
  gender: String,
  address: String

});



//declare schema
var Phone = mongoose.model('Phone', phoneSchema);

/* insert new blog entry -CREATE */
router.post('/',  function(req, res, next) {
	var phone = new Phone(req.body);
	phone.save(function(err, result) {	
		if (err) return console.error(err);
		res.status(201).send(result);
	});
});

/* view a blog entry - READ*/
router.get('/:_id', function(req, res, next) {
	Phone.findById(req.params.id, function(err, result) {
		if (err) return console.error(err);
	    res.status(201).send(result);
	});
});


/* view all blog entries -READ FOR "ALL"*/
router.get('/', function(req, res, next) {
	Phone.find(function(err, blogs) {
		if (err) return console.error(err);
		res.status(201).send(blogs);
	});
});

/* update a blog entry -UPDATE*/
router.put('/:_id', function(req, res, next) {
	Phone.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
		if (err) return console.error(err);
		res.send('Article successfully udpated.');
	});
});

/* delete a blog entry */
router.delete('/:_id', function(req, res, next) {
	Phone.findByIdAndRemove(req.params.id, function (err) {
		if (err) return console.error(err);
		res.status(201).send("Article successfully deleted.");
	});
});

module.exports = router;
