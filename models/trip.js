const mongoose = require('mongoose');


var tripSchema = new mongoose.Schema({


    name:{type:String, required:true},
    month:{type:String, required:true},
    year:{type:Number, required:true},

    filename:{type:String, required:true},
    fileId:{type:String, required:true},
  



})

module.exports = mongoose.model('Trip', tripSchema);