const { now } = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    pollUrl:{type:String, required:true},
    companyId:{type:String, required:true},
    schoolName:{type:String, required:true},
    package:{type:String, required:true},
    date:{type:Date, default:Date.now},
    amount:{type:Number, required:true},
    count:{type:Number, required:true},
    duration:{type:Number},

    
  
  
});

module.exports = mongoose.model('Poll2', schema);