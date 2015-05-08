'use strict';

var Neighborhood = require('../../models/neighborhood');
var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'POST',
		path: '/neighborhoods/{neighborhoodId}/houses',
		config: {
			description: 'Add house from neighborhood.',
			validate: {
				params: {
					neighborhoodId: Joi.string().required(),
				},
				payload: {
					// houseId: Joi.string().required(),
					address: Joi.string().required(),
					photo: Joi.string(),
					price: Joi.number().required(),
					sqft: Joi.number().required(),
					bedrooms: Joi.number().required(),
					bathrooms: Joi.number().required(),
					lat: Joi.number().required(),
					lng: Joi.number().required()
				}
			},
			handler: function(request, reply){
				// console.log('payload', request.payload);
				Neighborhood.findById(request.params.neighborhoodId, function(err, neighborhood){
					neighborhood.houses.push(request.payload);
					neighborhood.save(function(){
						return reply(neighborhood);
					});
				});
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'neighborhoods.add-house'
};
