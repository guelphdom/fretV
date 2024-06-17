var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    clientName:{type:String, required:true},
    clientEmail: {type: String, required:true },
    clientAddress: { type: String, required:true },
    city:{type:String, required:true},
    country: {type: String, required: true},
    mobile: {type: String, required: true},
  
});

module.exports = mongoose.model('Clients', schema);