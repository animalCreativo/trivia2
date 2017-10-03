var user= require('./user');
module.exports = function (app) {
	app.get('/users',(req,res)=>{
		user.getUsers((err,data) =>{
			res.json(data);
		});
	});

	app.get('/q1',(req,res)=>{
		user.getQ1((err,data) =>{
			res.json(data);
		});
	});

	app.get('/q2',(req,res)=>{
		user.getQ2((err,data) =>{
			res.json(data);
		});
	});
	app.get('/q3',(req,res)=>{
		user.getQ3((err,data) =>{
			res.json(data);
		});
	});

	app.get('/getWinner',(req,res)=>{
		user.getWinner((err,data) =>{
			res.json(data);
		});
	});

	app.post('/users', (req,res)=>{
		const userData = {
			username: req.body.username,
			email: req.body.email,
			trivia: req.body.trivia
		};

		console.log('userData', userData);


		user.insertUsers(userData, (err,data)=>{
			if (data && data.insertId){
				res.json({
					success: true,
					msg: "usuario insertado",
					data: data
				})
			}else {
				res.status(500).json({
					success: false,
					msg: "error"
				})
			}

		});
	});


	app.get('/',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})

	app.get('/question1',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/question2',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/question3',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/login',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/winner',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/loser',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})
	app.get('/findWinner',function(req,res){   // busca index en view (pug)
		res.render('index', {
			title: 'Trivia'
		});
	})


}

// curl -d "data.json" -X POST http://localhost:8080/users

// curl -X GET http://localhost:8080/users

