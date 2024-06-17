const mongoose = require('mongoose');


var levelSchema = new mongoose.Schema({



grade:{type:Number, required:true},
levelX:{type:String, required:true},
name:{type:String, required:true},
companyId:{type:String}





})

module.exports = mongoose.model('Level', levelSchema);