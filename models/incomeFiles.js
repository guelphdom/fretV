var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var incomeSchema = new Schema({

    filename: {type: String, required: true},
    fileId: {type: String, required: true},
    month: {type: String},
    year: {type: Number, required: true},
    term: {type: Number}
   
});

module.exports = mongoose.model('IncomeFiles', incomeSchema);