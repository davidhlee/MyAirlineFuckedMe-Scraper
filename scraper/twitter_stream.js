var twitter = require('ntwitter');

var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.SchemaTypes.ObjectId;
  
  
/****************************************************** App Initialization Code *******************************************************/
Mongoose.connect('mongodb://david:2848@myairline-FSAQHURB-db-0.dotcloud.com:37732/myairlinefuckedme');
//Mongoose.connect('mongodb://david:2848@myairlinelive-FSAQHURB-db-0.dotcloud.com:38065/myairlinefuckedme');
//Mongoose.connect('mongodb://localhost/myairlinefuckedme');

// Declare all the app's MongooseJS Models
var User = require('./models/user').User;
var Complaint = require('./models/complaint').Complaint;

var twit = new twitter({
  consumer_key: "Uf9478BX4GLGeBnhAbxnA",
  consumer_secret: "38lMQKsrmO4pJ3SqVUrFU0GxoEBJbG8eUFegSq67ps",
  access_token_key: '17718540-09Mo44Cmptqiz6NVpVjP02xuv51jMoWsjc6Q2RJaw',
  access_token_secret: 'mMCYZSNfNSEytGGqxBpsxtLlQKpMAveK7nvLBPudwTc'
});

/*
twit.stream('statuses/sample', function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
*/

twit.stream('statuses/filter', { track: '#mafm,myairlinefuckedme' }, function(stream) {
  stream.on('data', function (data) {

	console.log(data);
	
	// Check if the data object is an actual tweet object (not just empty data object)
  	if(data.id_str) {
  		
  		/************* Create a new Craigslist Living Arrangement Object *************/
	  	var new_complaint_item = new Complaint;
	  	
	  	new_complaint_item.text = data.text;
	  	new_complaint_item.likes = 0;
	  	new_complaint_item.flight_number = 0;
	  	if (data.user) {
	  		new_complaint_item.tweet = {
	  			link: "http://twitter.com/" + data.user.screen_name + "/status/" + data.id_str,
	  			tweet_id: data.id_str
	  		}
	  	}
	  	
	  	User.findOne({'twitter.id': data.user.id}, function(err, olduser) {
	  	  if(err) {
	  	  	console.log("There was an error finding a user!");
	  	  	console.log(err);
	  	  }
	  	  // If a user is found
	  	  if(olduser && olduser._id) {
	  	    if (data.user) {
	  	    	new_complaint_item.author_id = olduser._id;// Query authors in Mongodb
	  	    }
	  	    
	  	    new_complaint_item.save(function (err, newComplaint){
	  	    	if (err) {
	  	    		console.log("hey mama");
	  	    		console.log(err);
	  	    	}
	  	    });
	  	  // If no user is found
	  	  } else {
	  	  	new_complaint_item.author_id = null;
	  	  
	  	  	new_complaint_item.save(function (err, newComplaint){
	  	  		if (err) {
	  	  			console.log("hey mama");
	  	  			console.log(err);
	  	  		}
	  	  	});
	  	  }
	  	});	
  	}
  });
});



//@mo_oosman