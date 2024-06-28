var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    name: {type: String, required:true },
    quantity: {type: Number, required: true},
    date: {type: String, required: true},
    stockUpdate: {type: String, required: true},
    dateValue: {type: Number, required: true},
    receiver: {type: String, required: true},
    mformat: {type: String, required: true},
    month: {type: String, required: true},
    year: {type: String, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('Stock', schema);