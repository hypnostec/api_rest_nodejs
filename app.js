/*===================================================================
	Importar Archivos necesarios de la aplicación
  ===================================================================*/
var express  = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require("mongoose");

var	app = express(),
	router = express.Router();

//=====================================================================

/*===================================================================
	Agregar los midedleware a utilizar en la aplicación
  ===================================================================*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());
//=====================================================================

router.get('/', function(req, res){
	res.send("Hello World vacano");
});

app.use(router);

app.listen(3000, function(){
	console.log("Servidor corriendo en http://localhost:3000")
});