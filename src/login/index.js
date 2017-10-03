var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');
var virtual = require('virtual-keyboard');


page('/login', function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("login page");

	function submitForm() {
		console.log("btn Login");
	    var nameTxt = $('#name').val();    
	    var emailTxt = $('#email').val();
	   
	    console.log("name",nameTxt);
	    console.log("email",emailTxt);

		localStorage.setItem("username",nameTxt);
		localStorage.setItem("email",emailTxt);
	    page('/question1');


	
	}

	$('#btnBegin').on('click', submitForm);

	$('.imgContain').on("click", "img", function () {
    	setTimeout(function () {
		    page('/findWinner');
		}, 2000);
	});


});


