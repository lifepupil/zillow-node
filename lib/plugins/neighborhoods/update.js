'use strict';

var Neighborhood = require('../../models/neighborhood');
var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'PUT',
		path: '/neighborhoods/{neighborhoodId}',
		config: {
			description: 'Update neighborhood.',
			// validate: {
			// 	payload: {
			// 		name: Joi.string().min(1).required(),
			// 	}
			// },
			handler: function(request, reply){
				Neighborhood.findOne({_id: request.params.neighborhoodId}, function(err, neighborhood){
					console.log('test');
					if(err){
						return reply().code(400);
					}

					neighborhood.name = request.payload.name;
					neighborhood.lat = request.payload.lat;
					neighborhood.lng = request.payload.lng;
					neighborhood.uid = request.payload.uid;
					neighborhood.houses = request.payload.houses;

					neighborhood.save(function(){
						return reply(neighborhood);
					})
				});
			}
		}
	})

	return next();
}

exports.register.attributes = {
	name: 'neighborhoods.update'
}
