var mysql = require('mysql');

/*connection = mysql.createConnection({
	host: 'localhost',
	user: 'pancho',
	password: 'killua',
	database: 'trivia'	
});
*/
connection = mysql.createConnection({
	host: 'localhost',
	user: 'fran',
	password: 'Killua_235',
	database: 'trivia'	
});


var userModel = {};

userModel.getUsers = (callback) => {
	if (connection){
		connection.query(
		"SELECT * FROM `usuario`",
		(err,rows)=>{
			if (err){
				throw err;
			} else {
				callback(null,rows);
			}
		}
		)
	}
};

userModel.insertUsers = (userData, callback) => {
	var q ="insert into usuario (username , email , trivia) values(\""+userData.username+"\",\""+userData.email +"\","+ userData.trivia+");";
	console.log(q);
	if (connection){
		connection.query(
		 q,	
		(err,result)=>{
			if (err){
				throw err;
			} else {
				callback(null,{
					'insertId': result.insertId
				});
			}
		}
		)
	}
};

userModel.getQ1 = (callback) => {
	if (connection){
		connection.query(
		"SELECT * FROM `preguntas` WHERE `tipo`= 1 ORDER BY  RAND() LIMIT 1",
		(err,rows)=>{
			if (err){
				throw err;
			} else {
				callback(null,rows);
			}
		}
		)
	}
};

userModel.getQ2 = (callback) => {
	if (connection){
		connection.query(
		"SELECT * FROM `preguntas` WHERE `tipo`= 2 ORDER BY  RAND() LIMIT 1",
		(err,rows)=>{
			if (err){
				throw err;
			} else {
				callback(null,rows);
			}
		}
		)
	}
};

userModel.getQ3 = (callback) => {
	if (connection){
		connection.query(
		"SELECT * FROM `preguntas` WHERE `tipo`= 3 ORDER BY  RAND() LIMIT 1",
		(err,rows)=>{
			if (err){
				throw err;
			} else {
				callback(null,rows);
			}
		}
		)
	}
};

userModel.getWinner = (callback) => {
	if (connection){
		connection.query(
		"SELECT * FROM `usuario` WHERE  `fecha` >= CURDATE() AND `trivia` = true  ORDER BY RAND() LIMIT 1",
		(err,rows)=>{
			if (err){
				throw err;
			} else {
				callback(null,rows);
			}
		}
		)
	}
};

module.exports = userModel; 