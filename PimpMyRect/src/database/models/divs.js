var mongoose = require('mongoose');
var DivSchema = new mongoose.Schema({
    height: String,
    width: String,
    color: String,
    radius: String
});
var Div = mongoose.model('Div', DivSchema);
module.exports = Div;
