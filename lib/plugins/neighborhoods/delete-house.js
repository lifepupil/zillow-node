'use strict';

var Neighborhood = require('../../models/neighborhood');
var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'DELETE',
		path: '/neighborhoods/{neighborhoodId}/houses/{houseId}',
		config: {
			description: 'Delete neighborhood.',
			validate: {
				params: {
					neighborhoodId: Joi.string().length(24).required(),
					houseId: Joi.string().length(24).required()
				}
			},
			handler: function(request, reply){
				// console.log('inside delete house plugin', request.params);
				Neighborhood.findById(request.params.neighborhoodId, function(err, neighborhood) {
					neighborhood.houses.pull(request.params.houseId);
					neighborhood.save();
					return reply(request.params.houseId);
				});
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'neighborhoods.delete-house'
};
