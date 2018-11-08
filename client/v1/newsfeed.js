var Resource = require('./resource');
var util = require("util");
var _ = require("lodash");
var crypto = require('crypto');
var camelKeys = require('camelcase-keys');

function Newsfeed() {
    Resource.apply(this, arguments);
}


util.inherits(Newsfeed, Resource);

module.exports = Newsfeed;
var Exceptions = require('./exceptions');
var Request = require('./request');

Newsfeed.get = function (session) {
	
	return new Request(session)
	    .setMethod('GET')
	    .setResource('newsFeed')
	    .send()
	    .then(function(data) {
	        
	        return data;
	   
	    })
}