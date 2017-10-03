var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var id,pregunta, aws, alt_a, alt_b, alt_c ;
var local_username, local_email;

page('/question3',questionwato, function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("Question 2");

	function submitFormQ1() {
		console.log("question3");
		if (aws == '1'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",localStorage.getItem("correctas")+1);
		} else {
			console.log("Respuesta Incorrecta");
		} 

		if (localStorage.getItem("correctas")>=2){
			   saveUserWin();
			   localStorage.setItem("correctas",0);
			   page('/winner');
			  
		}else {
			   saveUserLoser();
			   localStorage.setItem("correctas",0);
			   page('/loser');
		}
 
	
	}
	function submitFormQ2() {
		console.log("question3");
		if (aws == '2'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",localStorage.getItem("correctas")+1);
		} else {
			console.log("Respuesta Incorrecta");
		} 

		if (localStorage.getItem("correctas")>=2){
			   saveUserWin();
			   localStorage.setItem("correctas",0);
			   page('/winner');
			  
		}else {
			   saveUserLoser();
			   localStorage.setItem("correctas",0);
			   page('/loser');
		}

	
	}


	$(document).ready(function (){
		console.log("pregunta:"+ pregunta);
		$('#q3texto').text(pregunta);
		$('#q3btn1').text(alt_a);
		$('#q3btn2').text(alt_b);
		local_username=localStorage.getItem("username");
		local_email= localStorage.getItem("email");
	

	});
	$('#q3btn1').on('click', submitFormQ1);
	$('#q3btn2').on('click', submitFormQ2);

});

function questionwato (ctx, next) {
    request
    .get('/q3')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      id=jsonObj[0].id;
      pregunta = jsonObj[0].pregunta;
      aws = jsonObj[0].aws;
      alt_a = jsonObj[0].alt_a;
      alt_b = jsonObj[0].alt_b;
      next();
    })
}
function saveUserWin (ctx, next) {
	request
  	.post('/users')
  	.send({ username: local_username, email: local_email , trivia: true}) // sends a JSON post body
  	.set('X-API-Key', 'foobar')
  	.set('accept', 'json')
  	.end((err, res) => {
    // Calling the end function will send the request
  	});
}

function saveUserLoser (ctx, next) {
	request
  	.post('/users')
  	.send({ username: local_username, email: local_email , trivia: false}) // sends a JSON post body
  	.set('X-API-Key', 'foobar')
  	.set('accept', 'json')
  	.end((err, res) => {
    // Calling the end function will send the request
  	});
}