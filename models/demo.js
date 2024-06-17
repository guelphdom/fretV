const mongoose = require('mongoose');

var demoSchema = new mongoose.Schema({


name:{type:String, required:true},
email:{type:String, required:true},
school:{type:String, required:true},
companyId:{type:String},


})


// Custom validation for email


module.exports = mongoose.model('Demo', demoSchema);