var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var apiConnection = require('./api_connection'); // Importa el código de api_connection.js

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Middleware para manejar errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware para manejar otros errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Llama a la función fetchData de api_connection.js y maneja la respuesta
apiConnection.fetchData()
  .then(response => {
    console.log(response.data); // Imprime los datos de la API en la consola
  })
  .catch(error => {
    console.error('Error al hacer la solicitud a la API:', error);
  });

// Endpoint GET para probar
app.get('/test', (req, res) => {
  res.send('Esto es una prueba');
});

module.exports = app;