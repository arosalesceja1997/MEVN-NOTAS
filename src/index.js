const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const app = express();

mongoose.connect('mongodb://localhost/mevn-db', {useNewUrlParser: true, useUnifiedTopology: true})
.then((msj) => console.log('Conectado a la bd'))
.catch((err) => console.error(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', require('./routes/home'));

// Static files
app.use(express.static(__dirname + "/public"));

app.listen(app.get('port'), () => {
    console.log("Servidor " + app.get('port'));
});