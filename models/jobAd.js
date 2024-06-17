const mongoose = require('mongoose');


var jobAdSchema = new mongoose.Schema({


    role:{type:String, required:true},
    type:{type:String, required:true},
    description:{type:String, required:true},
    month:{type:String, required:true},
    year:{type:Number, required:true},

   
  



})

module.exports = mongoose.model('JobAd', jobAdSchema);