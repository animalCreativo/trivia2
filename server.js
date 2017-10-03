
var express = require('express'); // se usa para levantar un server
var app = express();

var morgan = require('morgan');  // ver las peticiones en consola
var bodyParser = require('body-parser');  // parse para json

app.use(morgan('dev'));
app.use(bodyParser.json());


app.set('view engine','pug');     //maneja las vistas en view

app.use(express.static('public'));  // busca el css y los assests en public
//app.use('/node_modules',  express.static(__dirname + '/node_modules'));
// define las rutas de navegacion de la web lado cliente

//routes

require('./router')(app);


//levanta el puerto para run server

app.listen(8080, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Proyecto Animal Totems');
}) 



