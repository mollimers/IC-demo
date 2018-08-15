const mongoose = require('mongoose');

const DivSchema = new mongoose.Schema({
    height: String,
    width: String,
    color: String,
    radius: String
})

const Div = mongoose.model('Div', DivSchema);

module.exports = Div;