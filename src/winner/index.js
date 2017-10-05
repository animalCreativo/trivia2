var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var usernameServer, passwordServer;

page('/winner', function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("winner");
	
	$(document).ready(function (){
		setTimeout(function () {
		  window.location.href = "/login";
		}, 2000);
	});
	
});


