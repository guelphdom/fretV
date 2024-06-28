var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incSchema = new Schema({

    category: {type: String, },
    total: {type: Number},
    type: {type: String, required: true},
    //format: {type: String, required: true},
    month: {type: String, required: true},
    year: {type: Number, required: true},
    totalExpense: {type: Number},
    style: {type: String, },
    term: {type: Number}

});

module.exports = mongoose.model('Income Statement', incSchema);