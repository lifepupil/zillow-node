'use strict';

// var Secrets;
// try {
//   Secrets = require('./secrets');
// } catch(ex) {}

// var env = process.env.NODE_ENV || 'development';

var common = {
  // FIREBASE_SECRET: Secrets ? Secrets.FIREBASE_SECRET : process.env.FIREBASE_SECRET,
  FIREBASE_SECRET: process.env.FIREBASE_SECRET,
  FIREBASE_EXPIRE: 24
};

var environments = {
  development: {
    PORT: 8000,
    MONGO_URL: 'mongodb://localhost/db-dev'
  },
  test: {
    PORT: 0,
    MONGO_URL: 'mongodb://localhost/roadtrip-test'
  },
  production: {
    PORT: process.env.PORT || 0,
    MONGO_URL: 'mongodb://heroku_app36650934:cskbedf0aolomvv6rk5sot05ug@ds041228.mongolab.com:41228/heroku_app36650934'
  }

  // production: {
  //   PORT: 8000,
  //   MONGO_URL: 'mongodb://localhost/db-prod'
  // }
};

var environment = environments[env];

Object.keys(common).forEach(function(key){
  environment[key] = common[key];
});

console.log('Environment:', environment);

exports.environment = environment;
