'use strict';

var Mongoose = require('mongoose');

var neighborhoodSchema = Mongoose.Schema({
	name: {type: String, required: true},
	lat: {type: Number, required: true},
	lng: {type: Number, required: true},
	// userId: {type: Mongoose.Schema.Object.Id, ref: 'User', required: true},
	// createdAt: {type: Date, required: true, default: Date.now},
	houses: [{
	  name: String,
		lat: Number,
		lng: Number
	}]
});

var Neighborhood = Mongoose.model('Neighborhood', neighborhoodSchema);
module.exports = Neighborhood;
