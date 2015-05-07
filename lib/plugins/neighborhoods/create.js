'use strict';

var Neighborhood = require('../../models/neighborhood');
var Joi = require('joi');

exports.register = function(server, options, next){
	server.route({
		method: 'POST',
		path: '/neighborhoods',
		config: {
			description: 'Create neighborhood.',
			// validate: {
			// 	payload: {
			// 		name: Joi.string().min(1).required(),
			// 	}
			// },
			handler: function(request, reply){
				var neighborhood = new Neighborhood(request.payload);
				// console.log(request.payload);
				neighborhood.save(function(){
					reply(neighborhood);
				});
			}
		}
	})

	return next();
}

exports.register.attributes = {
	name: 'neighborhoods.create'
}
