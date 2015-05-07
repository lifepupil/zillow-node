'use strict';

var Neighborhood = require('../../models/neighborhood');
var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'POST',
		path: '/neighborhoods/{neighborhoodId}/houses',
		config: {
			description: 'Add house to neighborhood.',
			validate: {
				params: {
					neighborhoodId: Joi.string().required(),
				},
				payload: {
					address: Joi.string().required(),
					lat: Joi.number().required(),
					lng: Joi.number().required()
				}
			},
			handler: function(request, reply){
				console.log('payload', request.params);
				Neighborhood.findById(request.params.neighborhoodId, function(err, neighborhood){
					neighborhood.houses.push(request.payload);
					neighborhood.save(function(){
						reply(neighborhood);
					})
				});
			}
		}
	})

	return next();
}

exports.register.attributes = {
	name: 'neighborhoods.add-house'
}
