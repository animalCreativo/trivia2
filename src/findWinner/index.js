var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var username, email;

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
 	 		 username= 'No hay ganador';
	      	 email = ':(';
	      }else {
	      	 username= jsonObj[0].username;
	      	 email = jsonObj[0].email;
	      }
	      
	    })

	    $('#name').text(username);    
	    $('#email').text(email);
	   
	    console.log("name",username);
	    console.log("email",email);

	}

	$('#btnBuscar').on('click',submitForm);
	$('.imgContain').on("click", "img", function () {
	    console.log('You Clicked Me');
		setTimeout(function () {
			     window.location.href = "http://165.227.126.154:8000/login";
			}, 2000);
	});
});

function clean (ctx, next) {
    
      $('#name').text('Nombre');    
	  $('#email').text('Email');
      next();
  
}
