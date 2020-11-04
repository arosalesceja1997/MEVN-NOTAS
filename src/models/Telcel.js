const mongoose = require('mongoose');
const { Schema } = mongoose;

const telcel = new Schema({
    radiobase: String,
    fecha: String,
    region: String,
    trafico: String,
});

module.exports = mongoose.model('Telcel', telcel);