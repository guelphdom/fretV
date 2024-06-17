const mongoose = require('mongoose');


var cvSchema = new mongoose.Schema({


    role:{type:String, required:true},
    month:{type:String, required:true},
    year:{type:Number, required:true},
    type:{type:String, required:true},
    date:{type:String, required:true},
    filename:{type:String, required:true},
    fileId:{type:String, required:true},
  



})

module.exports = mongoose.model('CV', cvSchema);