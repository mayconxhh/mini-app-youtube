var express = require('express')

var app = express()

// SE ESTABLECE LA EXTENSION POR DEFECTO DEL MAIN INDEX
app.set('view engine', 'pug')

// DIRECCION DE ARCHIVOS STATICOS
app.use(express.static('public'))

app.get('/', function(req, res){
	res.render('index', {title: 'Web Videos'})	
})

app.get('/video/:id', function(req, res){
	res.render('index', {title: 'Video'})
})

app.get('/search/:valueSearch', function(req, res){
	res.render('index', {title: 'result'})
})

app.listen(5000, function(err){
	if (err) {
		console.log('Ocurrió un error al inicia el servidor'),
		process.exit(1)
	}	
	console.log('Iniciando servidor en el puerto: 5000')
})