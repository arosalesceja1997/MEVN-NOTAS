const mongoose = require('mongoose');
const { Schema } = mongoose;

const nota = new Schema({
    nota: String,
    descripcion: String,
});

module.exports = mongoose.model('Nota', nota);