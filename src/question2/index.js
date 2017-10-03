var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var id,pregunta, aws, alt_a, alt_b, alt_c ;

page('/question2',questionwato, function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("Question 2");

	function submitFormQ1() {
		console.log("question2");
		if (aws == '1'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",localStorage.getItem("correctas")+1);
		} else {
			console.log("Respuesta Incorrecta");
		} 
	    
	    page('/question3');
	
	}
	function submitFormQ2() {
		console.log("question2");
		if (aws == '2'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",localStorage.getItem("correctas")+1);
		} else {
			console.log("Respuesta Incorrecta");
		} 
	    
	    page('/question3');
	
	}
	function submitFormQ3() {
		console.log("question2");
		if (aws == '3'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",localStorage.getItem("correctas")+1);
		} else {
			console.log("Respuesta Incorrecta");
		} 
	    
	    page('/question3');
	
	}

	$(document).ready(function (){
		console.log("pregunta:"+ pregunta);
		$('#q2texto').text(pregunta);
		$('#q2btn1').text(alt_a);
		$('#q2btn2').text(alt_b);
		$('#q2btn3').text(alt_c);

	});
	$('#q2btn1').on('click', submitFormQ1);
	$('#q2btn2').on('click', submitFormQ2);
	$('#q2btn3').on('click', submitFormQ3);
});

function questionwato (ctx, next) {
    request
    .get('/q2')
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
      alt_c = jsonObj[0].alt_c;
      next();
    })
}