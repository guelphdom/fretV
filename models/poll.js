const { now } = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    pollUrl:{type:String, required:true},
    studentId:{type:String, required:true},
    date:{type:Date, default:Date.now},
    amount:{type:Number, required:true},
    fullname:{type:String, required:true},
    companyId:{type:String},
  
  
});

module.exports = mongoose.model('Poll', schema);