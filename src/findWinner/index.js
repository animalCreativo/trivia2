var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var username, email;

page('/findWinner', questionwato, function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("findwinner");
	
	function submitForm() {
		console.log("btn Login");
	    $('#name').text(username);    
	    $('#email').text(email);
	   
	    console.log("name",username);
	    console.log("email",email);


	}

	$('#btnBuscar').on('click',submitForm);
	$('.imgContain').on("click", "img", function () {
	    console.log('You Clicked Me');
		setTimeout(function () {
			     window.location.href = "http://200.6.115.188:8080/login";
			}, 2000);
	});
	
});

function questionwato (ctx, next) {
    request
    .get('/getWinner')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      username= jsonObj[0].username;
      email = jsonObj[0].email;
      next();
    })
}

