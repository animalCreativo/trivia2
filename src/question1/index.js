var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');

var id,pregunta, aws, alt_a, alt_b, alt_c ;

page('/question1',questionwato, function(ctx,next){
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
	console.log("Question 1");

	function submitFormQ1() {
		console.log("question1");
		if (aws == '1'){
			console.log("Respuesta Correcta");

			localStorage.setItem("correctas",1);
		} else {
			console.log("Respuesta Incorrecta");
			localStorage.setItem("correctas",0);
		} 
	    
	    page('/question2');
	
	}
	function submitFormQ2() {
		console.log("question1");
		if (aws == '2'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",1);
		} else {
			console.log("Respuesta Incorrecta");
			localStorage.setItem("correctas",0);
		} 
	    
	    page('/question2');
	
	}
	function submitFormQ3() {
		console.log("question1");
		if (aws == '3'){
			console.log("Respuesta Correcta");
			localStorage.setItem("correctas",1);
		} else {
			console.log("Respuesta Incorrecta");
			localStorage.setItem("correctas",0);
		} 
	    
	    page('/question2');
	
	}

	$(document).ready(function (){
		console.log("pregunta:"+ pregunta);
		$('#q1texto').text(pregunta);
		$('#q1btn1').text(alt_a);
		$('#q1btn2').text(alt_b);
		$('#q1btn3').text(alt_c);

		if(id == '1'){
			$('#q1img1').attr("src","item11.png");
			$('#q1img2').attr("src","item12.png");
			$('#q1img3').attr("src","item13.png");
		}else if(id == '2'){
			$('#q1img1').attr("src","item21.png");
			$('#q1img2').attr("src","item22.png");
			$('#q1img3').attr("src","item23.png");
		}else if(id == '5'){
			$('#q1img1').attr("src","item51.png");
			$('#q1img2').attr("src","item52.png");
			$('#q1img3').attr("src","item53.png");
		}else if(id == '9'){
			$('#q1img1').attr("src","item91.png");
			$('#q1img2').attr("src","item92.png");
			$('#q1img3').attr("src","item93.png");
		}
	});
	$('#q1btn1').on('click', submitFormQ1);
	$('#q1btn2').on('click', submitFormQ2);
	$('#q1btn3').on('click', submitFormQ3);
});

function questionwato (ctx, next) {
    request
    .get('/q1')
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
