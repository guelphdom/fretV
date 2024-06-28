var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaV = new Schema({

 qty:{type:Number, required:true},
    name: {type: String, required:true },
    availableQty:{type:Number, required:true},
    mformat: {type: String, required: true},
    code: {type: String, required: true},
    truckId: {type: String, required: true},
    status: {type: String, required: true},
   
   
});

module.exports = mongoose.model('StockV', schemaV);