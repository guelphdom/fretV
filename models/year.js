const mongoose = require('mongoose');


var yearSchema = new mongoose.Schema({


year:{type:String, required:true},


})

module.exports = mongoose.model('Year', yearSchema);