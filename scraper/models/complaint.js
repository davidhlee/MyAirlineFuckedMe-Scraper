// Load Mongoose
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.SchemaTypes.ObjectId
  
// Schema for the 'Complaint' Model
var ComplaintSchema = new Schema({
	// Complaint Fields
	text: String
	, author_id: ObjectId
	, category: String
	, airline: String
	, flight_number: String
	, likes: Number
	, comments: []
	, tweet: {
		link: String,
		tweet_id: Number
	}
	, timestamp: { type: Date, default: Date.now }
	
}), Complaint;

var Complaint = Mongoose.model('Complaint', ComplaintSchema);

// Export it to module.exports
module.exports.Complaint = Complaint;