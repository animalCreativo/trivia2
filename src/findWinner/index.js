var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var usernameWinner, emailWinner;

page('/findWinner', clean, function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("findwinner");
	
	
	function submitForm() {
		console.log("btn Login");
		request
	    .get('/getWinner')
	    .end(function (err, res) {
	      if (err) return console.log(err);
	      var json = JSON.stringify(res.body);
	      var jsonObj = jQuery.parseJSON(json);
	      console.log("datos server2:"+ json );
	      if (json == [] ){
 	 		 usernameWinner= 'No hay ganador';
	      	 emailWinner = ':(';
	      }else {
	      	 usernameWinner= jsonObj[0].username;
	      	 emailWinner = jsonObj[0].email;
	      	 $('#nameWinner').text(usernameWinner);    
	    	 $('#emailWinner').text(emailWinner);
	   
	    	console.log("name",usernameWinner);
	    	console.log("email",emailWinner);
	      }
	      
	    })

	

	}

	$('#btnBuscar').on('click',submitForm);
	$('.imgContain').on("click", "img", function () {
	    console.log('You Clicked Me');
		setTimeout(function () {
			     window.location.href = "/login";
			}, 2000);
	});
});

function clean (ctx, next) {
    
      $('#nameWinner').text('Nombre');    
	  $('#emailWinner').text('Email');
      next();
  
}
