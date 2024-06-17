const mongoose = require('mongoose');


var roomSchema = new mongoose.Schema({


name:{type:String, required:true},
companyId:{type:String},

})

module.exports = mongoose.model('Room', roomSchema);