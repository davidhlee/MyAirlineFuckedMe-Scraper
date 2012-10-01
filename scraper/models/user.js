// Load Mongoose
var Mongoose = require('mongoose')
  , Schema = Mongoose.Schema
  , ObjectId = Mongoose.SchemaTypes.ObjectId
  
// Schema for the 'User' Model
var UserSchema = new Schema({	
	complaints: []
	, liked_complaints: []
	, retweeted_complaints: []
	/* Twitter-provided Fields */
	
	, twitter: {
		id: Number
		, accessToken: String
		, tokenSecret: String
		, id_str: String
		, name: String
		, screen_name: String
		, location: String
		, url: String
		, description: String
		, protected: Boolean
		, followers_count: Number
		, friends_count: Number
		, listed_count: Number
		, created_at: Date
		, favourites_count: Number
		, utc_offset: Number
		, time_zone: String
		, geo_enabled: Boolean
		, verified: Boolean
		, statuses_count: Number
		, lang: String
		, status: 
		      { created_at: Date
		        , id: Number
		        , id_str: String
		        , text: String
		        , source: String
		        , truncated: Boolean
		        , in_reply_to_status_id: Number
		        , in_reply_to_status_id_str: String
		        , in_reply_to_user_id: Number
		        , in_reply_to_user_id_str: String
		        , in_reply_to_screen_name: String
		        , geo: String
		        , coordinates: {}
		        , place: String
		        , contributors: Array
		        , retweet_count: Number
		        , favorited: Boolean
		        , retweeted: Boolean 
		 }
	     , contributors_enabled: Boolean
	     , is_translator: Boolean
	     , profile_background_color: String
	     , profile_background_image_url: String
	     , profile_background_image_url_https: String
	     , profile_background_tile: Boolean
	     , profile_image_url: String
	     , profile_image_url_https: String
	     , profile_link_color: String
	     , profile_sidebar_border_color: String
	     , profile_sidebar_fill_color: String
	     , profile_text_color: String
	     , profile_use_background_image: Boolean
	     , default_profile: Boolean
	     , default_profile_image: Boolean
	     , following: Boolean
	     , follow_request_sent: Boolean
	     , notifications: Boolean
	}
}), User;

var User = Mongoose.model('User', UserSchema);

// Export it to module.exports
module.exports.User = User;