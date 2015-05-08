'use strict';

var Mongoose = require('mongoose');

var neighborhoodSchema = Mongoose.Schema({
	name: {type: String, required: true},
	lat: {type: Number, required: true},
	lng: {type: Number, required: true},
	uid: {type: String, required: true},
	// userId: {type: Mongoose.Schema.Object.Id, ref: 'User', required: true},
	// createdAt: {type: Date, required: true, default: Date.now},
	houses: [{
	  address: String,
	  photo: String,
		price: Number,
		sqft: Number,
		bedrooms: Number,
		bathrooms: Number,
		lat: Number,
		lng: Number
	}]
});

var Neighborhood = Mongoose.model('Neighborhood', neighborhoodSchema);
module.exports = Neighborhood;
