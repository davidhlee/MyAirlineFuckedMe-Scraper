// Load Mongoose
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.SchemaTypes.ObjectId
  
// Schema for the 'Complaint' Model
var ComplaintSchema = new Schema({
	// Complaint Fields
	text: { type: String, index: { unique: true, sparse: true }}
	, author_id: ObjectId
	, category: String
	, airline: String
	, flight_number: String
	, likes: Number
	, comments: []
	, tweet: {
		link: { type: String, index: { unique: true, sparse: true }}
		, tweet_id:{ type: Number, index: { unique: true, sparse: true }}
	}
	, timestamp: { type: Date, default: Date.now }
	
}), Complaint;

var Complaint = Mongoose.model('Complaint', ComplaintSchema);

// Export it to module.exports
module.exports.Complaint = Complaint;