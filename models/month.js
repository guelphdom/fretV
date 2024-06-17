const mongoose = require('mongoose');


var monthSchema = new mongoose.Schema({


month:{type:String, required:true},
num:{type:Number, required:true},


})

module.exports = mongoose.model('Month', monthSchema);