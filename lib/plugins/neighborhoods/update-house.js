'use strict';

var Neighborhood = require('../../models/neighborhood');
// var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'PUT',
		path: '/neighborhoods/{neighborhoodId}/houses/{houseId}',
		config: {
			description: 'Update House',
			// validate: {
			// 	params: {
			// 		neighborhoodId: Joi.string().length(24).required(),
			// 		houseId: Joi.string().length(24).required()
			// 	}
			// },
			handler: function(request, reply){
				Neighborhood.findById(request.params.neighborhoodId, function(err, neighborhood) {
					console.log(request.params);
					neighborhood.houses.forEach(function(e){
						// need to make _id a string
						if(e._id.toHexString() === request.params.houseId){
							e.address = request.payload.address;
							e.photo = request.payload.photo;
							e.price = request.payload.price;
							e.sqrt = request.payload.sqrt;
							e.bedrooms = request.payload.bedrooms;
							e.bathrooms = request.payload.bathrooms;
							e.lat = request.payload.lat;
							e.lng = request.payload.lng;
							console.log(e);
						}
					});
					console.log(neighborhood.houses);
					neighborhood.save(function(err, neighborhood){
						return reply(neighborhood);
					})
				});
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'neighborhoods.update-house'
};
